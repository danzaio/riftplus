import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { assets } from '../src/data.js';

const concurrency = 4;
let cursor = 0;

async function download(asset) {
  const response = await fetch(asset.url, {
    headers: { 'user-agent': 'Mozilla/5.0', accept: '*/*' },
  });
  if (!response.ok) {
    throw new Error(`Failed to download ${asset.url}: ${response.status} ${response.statusText}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  await mkdir(dirname(asset.file), { recursive: true });
  await writeFile(asset.file, buffer);
  console.log(`saved ${asset.file}`);
}

async function worker() {
  while (cursor < assets.length) {
    const index = cursor++;
    const asset = assets[index];
    try {
      await download(asset);
    } catch (error) {
      console.error(error);
      process.exitCode = 1;
    }
  }
}

await Promise.all(Array.from({ length: concurrency }, worker));
