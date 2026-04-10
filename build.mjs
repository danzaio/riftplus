import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const dist = resolve(root, 'dist');
const assetVersion = Date.now().toString();

const stampHtml = (html) =>
  html
    .replace('./src/styles.css', `./src/styles.css?v=${assetVersion}`)
    .replace('./src/danzaio.js', `./src/danzaio.js?v=${assetVersion}`);

const stampJs = (js) =>
  js.replace("./danzaio-data.js", `./danzaio-data.js?v=${assetVersion}`);

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of await readdir(root)) {
  if (entry.endsWith('.html')) {
    const html = await readFile(resolve(root, entry), 'utf8');
    await writeFile(resolve(dist, entry), stampHtml(html), 'utf8');
  }
}

await cp(resolve(root, 'src'), resolve(dist, 'src'), { recursive: true });
const danzaioJs = await readFile(resolve(root, 'src', 'danzaio.js'), 'utf8');
await writeFile(resolve(dist, 'src', 'danzaio.js'), stampJs(danzaioJs), 'utf8');

for (const entry of await readdir(resolve(root, 'public'))) {
  await cp(resolve(root, 'public', entry), resolve(dist, entry), { recursive: true });
}

console.log(`Built ${dist}`);
