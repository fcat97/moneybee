import { readdir, stat } from 'node:fs/promises';
import sharp from 'sharp';

// Keep source assets and their URLs; regenerate small static variants without a server.
let originalBytes = 0;
let optimizedBytes = 0;
async function variant(source, target, width) {
  await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(target);
  originalBytes += (await stat(source)).size;
  optimizedBytes += (await stat(target)).size;
}

await variant('public/icon.png', 'public/icon-96.webp', 96);
for (const file of await readdir('public/screenshots')) {
  if (!file.endsWith('.webp') || /-\d+\.webp$/.test(file)) continue;
  for (const width of [320, 480]) {
    await variant(`public/screenshots/${file}`, `public/screenshots/${file.replace('.webp', `-${width}.webp`)}`, width);
  }
}
for (const file of await readdir('public')) {
  if (!/^blog-.*\.jpg$/.test(file)) continue;
  for (const width of [480, 1200]) {
    await variant(`public/${file}`, `public/${file.replace('.jpg', `-${width}.webp`)}`, width);
  }
}
console.log(`Generated image variants: ${optimizedBytes.toLocaleString()} bytes (${Math.round((1 - optimizedBytes / originalBytes) * 100)}% smaller than source equivalents).`);
