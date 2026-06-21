import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const logoDir = join(root, 'public/logo');
const pngDir = join(logoDir, 'png');
const publicDir = join(root, 'public');

const appIconSvg = join(logoDir, 'app-icon.svg');
const ogImageSvg = join(logoDir, 'og-image.svg');
const logoFullSvg = join(logoDir, 'logo-full.svg');
const logoMarkSvg = join(logoDir, 'logo-mark.svg');

const appIconSizes = [
  { name: 'app-icon-1024.png', size: 1024 },
  { name: 'app-icon-512.png', size: 512 },
  { name: 'app-icon-192.png', size: 192 },
  { name: 'app-icon-180.png', size: 180 },
  { name: 'app-icon-48.png', size: 48 },
  { name: 'app-icon-32.png', size: 32 },
];

async function renderSvg(svgPath, width, height, options = {}) {
  const svg = await readFile(svgPath);
  return sharp(svg, { density: 512 })
    .resize(width, height, {
      fit: 'contain',
      background: options.background ?? { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();
}

await mkdir(pngDir, { recursive: true });

const appSvg = await readFile(appIconSvg);

for (const { name, size } of appIconSizes) {
  const png = await sharp(appSvg, { density: 512 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(join(pngDir, name), png);
  console.log(`Created png/${name}`);
}

const webp1024 = await sharp(appSvg, { density: 512 })
  .resize(1024, 1024)
  .webp({ quality: 90 })
  .toBuffer();
await writeFile(join(pngDir, 'app-icon-1024.webp'), webp1024);
console.log('Created png/app-icon-1024.webp');

const ogPng = await renderSvg(ogImageSvg, 1200, 630, {
  background: { r: 245, g: 247, b: 245, alpha: 1 },
});
await writeFile(join(publicDir, 'og-image.png'), ogPng);
console.log('Created public/og-image.png');

const logoFullPng = await renderSvg(logoFullSvg, 520, 96, {
  background: { r: 0, g: 0, b: 0, alpha: 0 },
});
await writeFile(join(logoDir, 'logo-full.png'), logoFullPng);
console.log('Created logo/logo-full.png');

const markPng512 = await renderSvg(logoMarkSvg, 512, 512, {
  background: { r: 0, g: 0, b: 0, alpha: 0 },
});
await writeFile(join(pngDir, 'logo-mark-512.png'), markPng512);
console.log('Created png/logo-mark-512.png (transparent)');

console.log('\nAll logo assets generated.');
