import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const dist = resolve(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of await readdir(root)) {
  if (entry.endsWith('.html')) {
    await cp(resolve(root, entry), resolve(dist, entry));
  }
}

await cp(resolve(root, 'src'), resolve(dist, 'src'), { recursive: true });

for (const entry of await readdir(resolve(root, 'public'))) {
  await cp(resolve(root, 'public', entry), resolve(dist, entry), { recursive: true });
}

console.log(`Built ${dist}`);
