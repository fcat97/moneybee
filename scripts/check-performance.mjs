import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { gzipSync } from 'node:zlib';

// Measure the exported artifact, excluding the nomodule fallback modern browsers skip.
const sitemap = readFileSync('out/sitemap.xml', 'utf8');
const budget = 132 * 1024;
for (const [, location] of sitemap.matchAll(/<loc>(.*?)<\/loc>/g)) {
  const path = new URL(location).pathname;
  const html = readFileSync(`out/${path === '/' ? 'index' : path.slice(1)}.html`, 'utf8');
  const scripts = new Set([...html.matchAll(/<script\b[^>]*>/g)]
    .filter(([tag]) => !/\bnomodule\b/i.test(tag))
    .flatMap(([tag]) => [...tag.matchAll(/src="([^"]+)"/g)].map(([, src]) => src)));
  const bytes = [...scripts].reduce((sum, src) => sum + gzipSync(readFileSync(`out${src}`)).length, 0);
  console.log(`${path}: ${(bytes / 1024).toFixed(1)} KiB initial JavaScript (gzip; budget ${budget / 1024} KiB)`);
  assert.ok(bytes <= budget, `${path} exceeds the initial JavaScript budget`);
}
