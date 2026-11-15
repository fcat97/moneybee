---
name: MoneyBee
description: A Material 3 financial notebook for everyday money.
colors:
  paper: '#ffffff'
  ink: '#173c2d'
  green: '#285b43'
  quiet: '#40564a'
  line: '#c9d8ce'
  mint: '#f4f8f5'
  section-soft: '#f3f5f2'
  lilac: '#cbe9d5'
  green-hover: '#1f4f39'
  focus: '#285b43'
  field-border: '#71877a'
  field-error: '#a42726'
  field-error-bg: '#fff8f5'
  card-border: '#c9d8ce'
  sample-bg: '#f4f8f5'
  inverse-green: '#244c3b'
  inverse-hover: '#e0e8c7'
typography:
  display:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: clamp(44px, 5vw, 68px)
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -.03em
  headline:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: clamp(32px, 3.5vw, 48px)
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -.03em
  title:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -.65px
  body:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.8
  hero-body:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: 12px
    fontWeight: 500
  button:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.2
  navigation:
    fontFamily: Plus Jakarta Sans, sans-serif
    fontSize: 14px
    fontWeight: 400
rounded:
  button: 20px
  field: 12px
  card: 20px
  panel: 16px
  shared-card: 20px
  chip: 22px
  carousel-control: 50%
spacing:
  '8': 8px
  '14': 14px
  '17': 17px
  '20': 20px
  '24': 24px
  '30': 30px
  '60': 60px
  '75': 75px
  '100': 100px
components:
  button-primary:
    backgroundColor: '{colors.green}'
    textColor: '{colors.paper}'
    typography: '{typography.button}'
    rounded: '{rounded.button}'
    padding: 16px 24px
    height: 56px
  button-primary-hover:
    backgroundColor: '{colors.green-hover}'
  button-compact:
    backgroundColor: '{colors.green}'
    textColor: '{colors.paper}'
    rounded: '{rounded.button}'
    padding: 12px 20px
    height: 48px
  button-inverse:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.inverse-green}'
    typography: '{typography.button}'
    rounded: '{rounded.button}'
    padding: 16px 24px
    height: 56px
  button-inverse-hover:
    backgroundColor: '{colors.inverse-hover}'
  text-link:
    textColor: '{colors.green}'
    height: 48px
  input:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.ink}'
    rounded: '{rounded.field}'
    padding: 13px 14px
    height: 46px
  input-invalid:
    backgroundColor: '{colors.field-error-bg}'
    textColor: '{colors.ink}'
  planning-card:
    backgroundColor: '{colors.paper}'
    rounded: '{rounded.card}'
    padding: 28px
  shared-card:
    backgroundColor: '{colors.green}'
    textColor: '{colors.paper}'
    rounded: '{rounded.shared-card}'
    padding: 31px 26px 23px
  sample-panel:
    backgroundColor: '{colors.sample-bg}'
    rounded: '{rounded.panel}'
    padding: 19px 17px
  entry-chip:
    textColor: '{colors.green}'
    rounded: '{rounded.chip}'
    padding: 9px 12px
  carousel-control:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.green}'
    rounded: '{rounded.carousel-control}'
    size: 48px
  navigation:
    backgroundColor: '{colors.mint}'
    typography: '{typography.navigation}'
---

# Design System: MoneyBee

## Overview

**Creative North Star: "The financial notebook, composed with Material 3"**

MoneyBee uses the financial notebook as its product metaphor and Material 3 as its interface grammar. A tonal green surface system, clear type hierarchy, confident rounded shapes, and deliberate elevation make the marketing experience feel familiar while preserving the owner’s Monefy-inspired palette of pale mint, white, soft gray, and dark green.

The website presents an Android product through its actual app icon and owner-supplied app screenshots. Notebook and planning illustrations explain the recordkeeping mechanism; their sample records are identified as illustrative. Product descriptions use direct, declarative language, while download and support controls use clear action wording.

**Key Characteristics:**

- Material 3 tonal surface roles mapped to pale mint, white, soft gray, and dark green.
- Rounded controls and content surfaces with restrained, functional elevation.
- Self-hosted Plus Jakarta Sans for both headings and reading text.
- Actual app screenshots alongside softly layered notebook illustrations.
- Comfortable spacing, visible focus, and motion that respects reduced-motion preferences.

## Colors

The palette combines pale green and neutral section surfaces with dark green content and actions. CSS tokens include Material 3 roles (`surface-container-low`, `surface-container`, `surface-container-high`, `primary-container`, `on-surface`, `on-surface-variant`, and `outline`) while retaining legacy names for existing components. The frontmatter records the current source values; it is normative.

### Primary

- **Green** (`green` / `primary-color`): primary Google Play and contact actions, icon strokes, progress fills, shared-finance accents, and the final download surface.
- **Ink** (`ink`): headings, the brand name, field labels, and field content.
- **Green hover** (`green-hover`): the darker primary-action hover state.
- **Inverse green** (`inverse-green`): text on the white download action inside the green final section; `inverse-hover` is its pale hover surface.

### Neutral

- **Paper** (`paper` / `surface`): the page background, cards, fields, and white surfaces.
- **Surface containers**: low (`#f4f8f5`) carries section bands and list areas; container (`#eaf2ed`) and high (`#dfeae3`) distinguish nested content; primary container (`#cbe9d5`) identifies selected, emphasized, or interactive green surfaces.
- **Warm gray** (`section-soft`): the neutral layer for notebook and shared-finance regions.
- **Soft green** (`lilac`): a legacy alias for the primary container tint, not a purple visual direction.
- **Quiet** (`quiet`): supporting copy, captions, notes, and secondary text.
- **Line** (`line`), **card border** (`card-border`), and **field border** (`field-border`): subdued separators and control outlines.
- **Sample background** (`sample-bg`): inset illustrative planning surfaces.

The green `focus` color is an accessibility state. `field-error` and `field-error-bg` identify invalid support fields. Tailwind’s inherited HSL semantic variables remain in the source for the existing UI library.

## Typography

**Display Font:** Plus Jakarta Sans, with sans-serif fallback.

**Body Font:** Plus Jakarta Sans, with sans-serif fallback.

The variable font is self-hosted at `/fonts/plus-jakarta-sans-latin.woff2`, covers weights 400–800, uses `font-display: swap`, and is preloaded by the root layout. Headings use strong weight and restrained negative tracking; body text uses regular weight and open leading.

### Hierarchy

- **Display:** the `display` frontmatter role records the desktop hero. On mobile up to 650px it becomes `clamp(40px, 10.4vw, 58px)` with 1.14 leading; below 374px it is 38px. Intermediate widths have explicit overrides in the stylesheet.
- **Headline:** the `headline` role describes ordinary section headings. Mobile headings use `clamp(32px, 8vw, 42px)` with slightly looser tracking (`-.03em`). Several sections use explicit local sizes.
- **Title:** the `title` role records desktop planning-card titles. Shared-card titles use 27px; tool titles use 17px. Card-specific responsive sizes remain local.
- **Body:** the `body` role describes recurring product copy. Observed leading ranges from 1.7 to 1.9. The hero uses the `hero-body` role with a 480px maximum line width, changing to 16px on smaller screens and a 430px maximum width on mobile.
- **Label:** the `label` role records form labels. Navigation and buttons have their own frontmatter roles. Input text uses 14px on desktop and 16px on mobile.

Small captions and sample-record labels belong to illustrations and secondary notes. They are not a reusable reading-text scale.

**The Readable Sans Rule.** Use Plus Jakarta Sans for display and reading text; retain the clean sans-serif direction confirmed for MoneyBee.

## Layout

The standard centered shell is capped at 1240px with 40px side gutters; at 1440px and above it uses a 140px total inset. Up to 900px the shell uses 24px side gutters; up to 650px it uses 20px. Homepage and feature content share the same shell.

Full-width tonal bands wrap the constrained content. The desktop hero uses `.92fr 1.08fr` with the real screenshot carousel inside a large tonal showcase; it stacks to one column below 650px. Desktop feature stories use two columns; planning and feature grids use three or four columns where the content supports them, then collapse through two columns to one on mobile. On mobile the notebook explanation precedes its illustration.

The homepage feature overview is a compact icon and title index. Its 28 links read as low-emphasis feature rows rather than raised cards: four columns on desktop, three up to 900px, and two up to 650px. Descriptions live on `/features`, reached through “See details” or a feature title. Individual titles link directly to their description anchors.

The dedicated features page groups all 28 description cards into everyday records, planning, personal settings, and online features. Four columns become three up to 1100px, two up to 900px, and one up to 650px. Category links, a breadcrumb, and a return-to-overview link support navigation. Header and footer Features links target this page.

Section spacing remains generous and responsive, with local hero, contact, data, footer, and final-download spacing tuned to their content. The sticky header is 80px on desktop, 76px up to 900px, and 72px on mobile. Desktop navigation gives way to a disclosure menu at 900px. Anchor scrolling leaves room for the header.

## Elevation & Depth

Most content uses tonal layering. A restrained two-level shadow scale distinguishes the phone frame and temporary navigation panel; important content cards use a single soft elevation with no stacked border-plus-shadow treatment. Slight page rotations belong to the notebook illustration rather than every content card.

### Shadow Vocabulary

- **Elevation 1:** `0 1px 3px rgb(22 55 39 / 12%), 0 1px 2px rgb(22 55 39 / 8%)`.
- **Elevation 2:** `0 4px 10px rgb(22 55 39 / 12%), 0 1px 3px rgb(22 55 39 / 8%)`.

**The Quiet Depth Rule.** Use tonal surfaces and fine borders for ordinary content; reserve the observed diffuse shadows for the phone, notebook pages, and mobile navigation.

## Shapes

The Material 3 shape scale uses 12px for fields and compact controls, 16px for nested surfaces, 20px for buttons and content cards, and 28–32px for large showcase regions. Carousel controls are circles, with small round slide markers.

Homepage feature links are compact horizontal rows with 32px duotone icons and a primary-container state layer on hover or focus. Feature descriptions sit on low tonal containers with 20px corners and 24px padding; directly linked descriptions use the primary-container color and elevation.

Both feature surfaces share Phosphor duotone icons, with coordinated green, teal, blue, amber, and plum foregrounds over the pack’s original 20% opacity layer. Overview icons are 32px on desktop and 27px on mobile; detail icons are 40px inside a 48px tonal container. Selected SVGs from the pinned `@phosphor-icons/core@2.1.1` CDN package are served locally under `public/icons/features/`, with source and MIT license notices alongside them. Lucide remains the icon system for the rest of the site.

The phone has a distinct device silhouette (30px outer corners and 22px image/viewport corners) inside a 32px tonal showcase. Notebook illustrations use overlapping pages, soft tonal surfaces, and restrained rotations.

## Components

### Buttons

Download and support actions are clear and strongly contrasted. The primary variant uses green with white text, 20px corners, and a soft elevation. Its minimum height is 56px; the compact header variant is 48px high. Actions retain at least 44px touch targets.

Hover darkens the primary background, raises the action slightly, and deepens elevation. Active feedback returns to baseline. The final green section uses the inverse white button variant. Text links use a primary-container state layer rather than a persistent underline.

All keyboard-focusable controls retain a green outline (2px, 3px offset). Reduced-motion styling removes action and icon transforms and shortens transitions to .01ms.

### Chips

Entry-option chips are descriptive labels, not filters. They use pale green (`#edf2e8`), a thin green-gray border (`#ccd7c7`), 11px text, a 7px icon gap, and the observed chip padding and radius. No selected or interactive state is established.

### Cards / Containers

Planning cards use white surfaces with a single soft elevation and an inset sample panel. Shared-ledger surfaces use the established green and pale-green palette. Descriptions and illustrative examples remain distinct blocks.

### Inputs / Fields

Support fields are white with a field border, green ink, visible labels, and 46px minimum height for single-line inputs. Textareas resize vertically. Focus changes the border to green while retaining the global focus outline; invalid fields use the recorded error border and pale error background. Border and background transition over 180ms. Mobile entry text is 16px. Feedback is announced through the live status region, and invalid submission focuses the relevant field.

### Navigation

The white sticky header carries the actual app icon, MoneyBee wordmark, desktop navigation links, compact download action, and mobile menu. Links use rounded 48px state surfaces. Mobile links sit in a white, softly elevated disclosure panel. Escape closes the menu and restores focus to its trigger; outside interaction and link selection close it.

### FAQ

Native disclosure rows are separated by fine lines. A summary has a 64px minimum height with a green plus/minus affordance. Answer text uses regular reading sizes and generous leading. Opening an answer uses a 220ms reveal only when reduced motion is not requested.

### Notebook illustrations and screenshot carousel

Retain the real app screenshots inside the phone and the clearly labeled example notebook pages alongside product explanations. The carousel has previous/next, play/pause, count, slide-selection buttons, swipe, and arrow-key controls. Its round navigation buttons are 48px on desktop and 44px on mobile; slide-selection buttons are at least 32px high with small round markers. The selected marker widens horizontally.

The carousel advances every 5000ms only while visible, unpaused, unfocused, unhovered, and the document is visible. Manual navigation or dragging pauses it. Reduced motion stops autoplay, disables the play control, and makes manual changes immediate. Captions announce manual changes politely; automatic changes are not announced.

One-time illustration motion uses `cubic-bezier(0.16, 1, 0.3, 1)`: phone/notebook entry 700ms, page entry 620ms with 60ms staggering, and progress fills 750ms. Page hover motion lasts 300ms and requires a fine pointer, hover support, and no reduced-motion preference. Content is visible before JavaScript runs; hidden documents and preference changes cancel active illustration animations.

## Do's and Don'ts

### Do:

- **Do** use the existing mint, paper, and warm-gray surfaces with dark green text and actions.
- **Do** keep headings and body copy in the self-hosted Plus Jakarta Sans family.
- **Do** retain the actual MoneyBee icon, real app screenshots, and understandable notebook mechanism.
- **Do** label sample financial records as illustrations and keep product descriptions declarative.
- **Do** preserve visible keyboard focus, labeled controls, responsive stacking, and reduced-motion behavior.

### Don't:

- **Don't** reintroduce the superseded ivory-and-serif visual direction.
- **Don't** use illustration microtext as the size for product descriptions or form entry.
- **Don't** replace genuine app captures with fabricated interfaces presented as screenshots.
- **Don't** make animation necessary to reveal content or remove the carousel’s manual controls.
