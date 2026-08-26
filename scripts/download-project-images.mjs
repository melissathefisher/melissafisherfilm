import { mkdir, readFile, rename, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const sourcePath = path.join(root, 'src/data/projects.ts');
const outputDir = path.join(root, 'public/images/projects');
const source = await readFile(sourcePath, 'utf8');
const calls = [...source.matchAll(/sq\('([^']+)',\s*'([^']+)'(?:,\s*(\d+))?\)/g)];
const assets = new Map();

for (const [, id, file, width = '1500'] of calls) {
  assets.set(id, { id, file, width });
}

await mkdir(outputDir, { recursive: true });

let downloaded = 0;
let cached = 0;

for (const { id, file, width } of assets.values()) {
  const output = path.join(outputDir, `${id}.webp`);
  try {
    const existing = await stat(output);
    if (existing.size > 1024) {
      cached += 1;
      continue;
    }
  } catch {
    // Download missing assets below.
  }

  const remote = `https://images.squarespace-cdn.com/content/v1/679fd8d092446c2cd8a6ba71/${id}/${file}?format=${width}w`;
  const response = await fetch(remote, { headers: { Accept: 'image/webp' } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${remote}`);

  const bytes = new Uint8Array(await response.arrayBuffer());
  if (bytes.length < 1024) throw new Error(`Image response was unexpectedly small: ${remote}`);

  const temporary = `${output}.download`;
  await writeFile(temporary, bytes);
  await rename(temporary, output);
  downloaded += 1;
}

// Remove abandoned partial downloads after a successful run.
for (const { id } of assets.values()) {
  await rm(path.join(outputDir, `${id}.webp.download`), { force: true });
}

console.log(`Project images ready: ${assets.size} total (${downloaded} downloaded, ${cached} cached).`);
