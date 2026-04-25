import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const out = resolve(root, 'pages-dist');
const srcOut = resolve(out, 'src');
const assetVersion = Date.now().toString();

const stampHtml = (html) =>
  html
    .replaceAll('../src/styles.css', '__PARENT_STYLES__')
    .replaceAll('../src/danzaio.js', '__PARENT_SCRIPT__')
    .replaceAll('./src/styles.css', '__ROOT_STYLES__')
    .replaceAll('./src/danzaio.js', '__ROOT_SCRIPT__')
    .replaceAll('__PARENT_STYLES__', `../src/styles.css?v=${assetVersion}`)
    .replaceAll('__PARENT_SCRIPT__', `../src/danzaio.js?v=${assetVersion}`)
    .replaceAll('__ROOT_STYLES__', `./src/styles.css?v=${assetVersion}`)
    .replaceAll('__ROOT_SCRIPT__', `./src/danzaio.js?v=${assetVersion}`);

const stampJs = (js) =>
  js.replace(/\.\/danzaio-data\.js/g, `./danzaio-data.js?v=${assetVersion}`);

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await mkdir(srcOut, { recursive: true });

const pages = [
  { from: resolve(root, 'danzaio.html'), to: resolve(out, 'index.html') },
  { from: resolve(root, 'ven', 'index.html'), to: resolve(out, 'ven', 'index.html') },
  { from: resolve(root, 'hanbot', 'index.html'), to: resolve(out, 'hanbot', 'index.html') },
];

for (const page of pages) {
  const html = await readFile(page.from, 'utf8');
  await mkdir(dirname(page.to), { recursive: true });
  await writeFile(page.to, stampHtml(html), 'utf8');
}

for (const entry of await readdir(resolve(root, 'public'))) {
  await cp(resolve(root, 'public', entry), resolve(out, entry), { recursive: true });
}

for (const file of ['styles.css', 'danzaio.js', 'danzaio-data.js']) {
  await cp(resolve(root, 'src', file), resolve(srcOut, file));
}

const danzaioJs = await readFile(resolve(root, 'src', 'danzaio.js'), 'utf8');
await writeFile(resolve(srcOut, 'danzaio.js'), stampJs(danzaioJs), 'utf8');

await writeFile(resolve(out, '.nojekyll'), '', 'utf8');

console.log(`Built ${out}`);
