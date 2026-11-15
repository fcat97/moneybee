# Material 3 Marketing Site Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the MoneyBee homepage, features page, and shared header/footer using Material 3 principles.

**Architecture:** Keep the current Next.js and CSS architecture. Define M3 semantic color, shape, state, and elevation tokens in the global stylesheet, then apply them to the existing marketing composition and shared React components.

**Tech Stack:** Next.js App Router, React, TypeScript, CSS, Plus Jakarta Sans, lucide-react.

**Spec:** `docs/superpowers/specs/2026-11-15-material-3-redesign-design.md`

## Global Constraints

- Keep existing copy, product claims, app screenshots, structured data, SEO, route behavior, carousel controls, and contact form behavior.
- Keep `/blogs`, `/privacy-policy`, and `/terms-and-conditions` reachable; their content and body styling are outside scope.
- Preserve MoneyBee's pale mint, white, soft-gray, dark-green palette and Plus Jakarta Sans; do not adopt default Material blue or purple.
- Add no dependencies.
- Do not add or run tests unless the user asks.

## Review Focus

- Narrow mobile view: hero action, showcase, and nav must fit without horizontal overflow; review at 375px.
- Keyboard navigation: focus remains visible on desktop nav, mobile disclosure, carousel controls, links, and buttons.
- Reduced motion: existing reduced-motion behavior remains intact.
- Feature anchors: all four category links and feature-detail anchors remain reachable after card and container styling changes.
- Alternate routes: shared header/footer redesign remains legible on blog and legal pages without changing those page bodies.

---

### Task 1: Define the Material 3 visual tokens and shared shell

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/layout/header.tsx`
- Modify: `src/components/layout/footer.tsx`

**Interfaces:**
- Consumes: existing custom properties and `PlayStoreLink` component.
- Produces: shared M3 semantic surface, shape, state-layer, focus, header, and footer styles used by homepage and features page.

- [ ] Add M3 semantic tokens mapped to MoneyBee brand colors: primary, on-primary, surface, surface-container-low, surface-container, outline, and focus.
- [ ] Apply a restrained shape scale (small controls, medium cards, large hero showcase), tonal elevation, 48px minimum navigation/actions, hover/pressed states, and visible focus.
- [ ] Update shared header/footer styles and markup only as needed; preserve all destinations and mobile menu close behavior.
- [ ] Inspect shared shell on home, features, blog, and legal routes at desktop and mobile widths.

### Task 2: Recompose the homepage around an M3 app showcase

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`
- Preserve: `src/components/hero-screenshot-carousel.tsx`, `src/components/features-overview.tsx`

**Interfaces:**
- Consumes: shared M3 tokens and shell from Task 1; current hero, carousel, and section components.
- Produces: a responsive screenshot-led hero showcase and consistent M3 content surfaces across homepage sections.

- [ ] Place the existing real screenshot carousel in a distinct tonal showcase container, retaining its controls, caption, and attribution.
- [ ] Rebalance the hero copy, download action, feature link, and showcase for desktop and single-column mobile layouts.
- [ ] Apply coherent surface roles, shape, spacing, and state styling to existing homepage sections without replacing product copy or sample content.
- [ ] Review the full homepage at desktop and 375px mobile, including interactive carousel and reduced-motion states.

### Task 3: Apply the M3 system to the feature catalog

**Files:**
- Modify: `src/app/features/page.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: shared M3 tokens and shell from Task 1; existing feature inventory and metadata.
- Produces: a scannable M3 feature catalog with working breadcrumb, category navigation, and detail anchors.

- [ ] Style the feature title, intro, category navigation, group headings, and feature descriptions with M3 hierarchy and surface roles.
- [ ] Keep existing feature inventory, claims, IDs, metadata, structured data, and links unchanged.
- [ ] Review all responsive grid widths and confirm category and feature anchors still target the correct sections.

### Task 4: Final review and mechanical detection

**Files:**
- Review: `src/app/globals.css`, `src/app/page.tsx`, `src/app/features/page.tsx`, `src/components/layout/header.tsx`, `src/components/layout/footer.tsx`

- [ ] Run the Impeccable detector once over changed UI targets and fix actionable findings.
- [ ] Inspect one desktop and one mobile render of homepage and features page, plus shared shell on one blog or legal route.
- [ ] Confirm the final diff contains no copy, route, or product-claim changes outside the agreed scope.
