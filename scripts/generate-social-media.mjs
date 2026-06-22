import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const socialDir = join(root, 'social-media');
const svgPath = join(socialDir, 'instagram-launch.svg');

const svg = await readFile(svgPath);

await mkdir(socialDir, { recursive: true });

const square = await sharp(svg, { density: 300 })
  .resize(1080, 1080)
  .png({ compressionLevel: 6 })
  .toBuffer();

await writeFile(join(socialDir, 'instagram-launch-1080.png'), square);
console.log('Created social-media/instagram-launch-1080.png (1080×1080)');

const portrait = await sharp(svg, { density: 300 })
  .resize(1080, 1350, {
    fit: 'contain',
    background: { r: 241, g: 248, b: 242, alpha: 1 },
  })
  .png({ compressionLevel: 6 })
  .toBuffer();

await writeFile(join(socialDir, 'instagram-launch-1080x1350.png'), portrait);
console.log('Created social-media/instagram-launch-1080x1350.png (1080×1350)');
