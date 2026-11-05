# MoneyBee performance checklist

Applied to the Next.js static export on 2026-11-05. This website renders its content at build time: it has no request-time database, API endpoints, or server-side queries. The contact form prepares an email draft.

## Changes

- Removed the unused global toast renderer. It was downloading toast code and subscribing to state on every page, although no published page creates toasts. Reusable toast components remain available for future work.
- Moved the contact schema and its validation dependency into a dynamic import used only on submission. The button reports progress, prevents repeated submissions while validation is loading, and offers a direct-email fallback if the download fails. Validation errors still focus the offending field; a failed download can be retried.
- Changed the screenshot carousel to load its first image immediately and subsequent images when selected or entering its viewport. Native `loading="lazy"` alone was fetching hidden horizontal slides. A viewport observer excludes edge-only intersections. Previously viewed images stay mounted; unloaded slides reserve their space with skeletons.
- Removed four unused direct dependencies: `firebase`, `dotenv`, `@genkit-ai/next`, and `patch-package`. The lockfile removed 73 packages. Existing Genkit development tooling and reusable UI component dependencies are retained.
- Added `npm run perf:check` and a deployment gate. Every exported public page must stay within 132 KiB of initial JavaScript measured with gzip, excluding the legacy `nomodule` fallback skipped by modern browsers. This is an artifact budget, not a claim that the local server sends compressed responses.
- Retained the preceding responsive WebP image improvements, fixed dimensions, local font, and reduced-motion handling.

## Checklist coverage

| Screenshot item | Outcome |
| --- | --- |
| Cache API responses / compress API payloads | No application API calls or payloads exist. |
| Load balancer / CDN | Hosting concern. The repository deploys a static export to GitHub Pages; no application server requires balancing. |
| Index database / cache expensive queries / remove N+1 queries / connection pooling | No website database or runtime queries exist. |
| Compress images | WebP variants and responsive image selection are implemented; source assets remain available. |
| Loading skeletons | Unloaded screenshot slides reserve their dimensions with skeleton placeholders. Main page text remains server-rendered. |
| Debounce input handlers | The form does no searches, requests, or expensive validation while typing. Validation runs on submission; debouncing would add delay without removing expensive work. |
| Split code into chunks | Next.js route chunks plus deferred form-validation code. |
| Server-side caching | Pages are rendered once at build time. Cache headers for the exported files belong to the host. |
| Paginate large lists | Four blog posts and a small feature catalog; pagination is unnecessary at this size. |
| Lighthouse audit | Before/after mobile audits and a final desktop audit recorded below and in `performance-results.json`. |
| Unnecessary re-renders | Removed the unused toast subscription; carousel image state retains the same reference when no new slides need loading. |
| Minify JS and CSS | Next.js production builds already minify assets. Audit `out/`, not the development server. |
| Lazy loading | Offscreen screenshots now load on demand; blog thumbnails use native lazy loading. The first hero image retains high priority. |
| Defer non-critical scripts | Deferred form validation. No third-party analytics, ads, or chat scripts are loaded. |
| Unused dependencies | Four unused direct dependencies removed; remaining dependencies support source components or existing developer tooling. |

## Measurements and limits

Lighthouse 13.6.0, installed Chromium, default simulated mobile throttling, the same local production-export server at `http://127.0.0.1:9010/`. The Python server sends neither gzip nor production cache headers. These are single lab runs, not field Core Web Vitals or published-host results. Small timing differences are measurement noise.

| Mobile homepage measurement | Before this pass | After |
| --- | ---: | ---: |
| Lighthouse performance score | 78/100 | 78/100 |
| Total transferred during audit | 1,114,198 bytes | 835,255 bytes |
| Screenshot requests during audit | 7 | 2 |
| Screenshot transfer during audit | 268,927 bytes | 80,612 bytes |
| First contentful paint | 1.8 s | 1.8 s |
| Largest contentful paint | 5.6 s | 5.5 s |
| Total blocking time | 40 ms | 60 ms |
| Cumulative layout shift | 0 | 0 |
| Initial JavaScript, gzip artifact measurement | 150.6 KiB | 128.3 KiB |

The audit runs long enough for autoplay to request a second screenshot. A separate browser check with reduced motion verifies exactly one screenshot request at startup, then loads all seven through direct selection and verifies wraparound. The reduction in transferred bytes is measurable; the mobile score did not improve in this local setup.

The final desktop run scored **98/100**, with first contentful paint at 0.4 s, largest contentful paint at 1.1 s, approximately 0 ms total blocking time, and zero cumulative layout shift. There is no desktop baseline for comparison. Numeric results and audit configuration are recorded in [performance-results.json](performance-results.json).

Browser verification also covers the contact form's deferred validation, invalid-field focus, draft feedback, failed-download fallback, and retry. All nine public pages were checked at 320, 390, 768, and 1440px, with no horizontal page overflow, broken loaded images, or JavaScript exceptions.

## Verify and publish

Run `npm run typecheck`, `npm test`, `npm run build`, `npm run seo:check`, and `npm run perf:check`. The Pages workflow checks the SEO export and JavaScript budget before uploading its artifact.

For a local audit, serve `out/` with `python3 -m http.server 9010 --directory out`, then run `npx --yes lighthouse@13.6.0 http://127.0.0.1:9010/ --only-categories=performance --output=html --output-path=./lighthouse-mobile.html`. Chrome must be installed. Add `--preset=desktop` for desktop measurements.

After publication, audit the HTTPS domain and inspect response headers. Ensure the hosting layer compresses HTML, CSS, JavaScript, and JSON; caches content-hashed `/_next/static/` assets for a long lifetime; and revalidates HTML and non-versioned public assets when releases change. Do not give unversioned images an immutable cache policy. Static export cannot apply Next.js server `headers()` settings. This pass has not changed hosting or published the site.

References: [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports), [Next.js lazy loading](https://nextjs.org/docs/app/guides/lazy-loading), and [Lighthouse measurement guidance](https://developer.chrome.com/docs/devtools/lighthouse).
