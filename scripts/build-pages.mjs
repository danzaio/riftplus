import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const out = resolve(root, 'pages-dist');
const srcOut = resolve(out, 'src');

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await mkdir(srcOut, { recursive: true });

let html = await readFile(resolve(root, 'danzaio.html'), 'utf8');
html = html.replace(/<title>[\s\S]*?<\/title>/, '<title>Rift+ - Script Suite Showcase</title>');
await writeFile(resolve(out, 'index.html'), html, 'utf8');

for (const entry of await readdir(resolve(root, 'public'))) {
  await cp(resolve(root, 'public', entry), resolve(out, entry), { recursive: true });
}

for (const file of ['styles.css', 'danzaio.js', 'danzaio-data.js']) {
  await cp(resolve(root, 'src', file), resolve(srcOut, file));
}

await writeFile(resolve(out, '.nojekyll'), '', 'utf8');

console.log(`Built ${out}`);

