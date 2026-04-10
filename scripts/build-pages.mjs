import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const out = resolve(root, 'pages-dist');
const srcOut = resolve(out, 'src');
const assetVersion = Date.now().toString();

const stampHtml = (html) =>
  html
    .replace('./src/styles.css', `./src/styles.css?v=${assetVersion}`)
    .replace('./src/danzaio.js', `./src/danzaio.js?v=${assetVersion}`);

const stampJs = (js) =>
  js.replace("./danzaio-data.js", `./danzaio-data.js?v=${assetVersion}`);

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await mkdir(srcOut, { recursive: true });

let html = await readFile(resolve(root, 'danzaio.html'), 'utf8');
await writeFile(resolve(out, 'index.html'), stampHtml(html), 'utf8');

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

