# Material 3 redesign design

## Intent

Redesign MoneyBee's homepage, features page, and shared header/footer around Material 3 principles so visitors can understand the Android app and reach its Google Play listing. Use the recommended responsive showcase composition: a clear hero paired with a tonal app-preview surface, followed by readable, purpose-led content groups.

## Goals

- Apply Material 3's tonal surface hierarchy, semantic color roles, shape scale, readable type hierarchy, accessible state layers, and responsive navigation.
- Preserve MoneyBee's established brand: pale mint, white, soft gray, dark green, Plus Jakarta Sans, actual app icon, and real screenshots.
- Keep current product facts, copy, interactions, metadata, accessibility behavior, and Google Play path accurate.
- Improve consistency across the homepage, feature catalog, and shared site shell.

## Non-goals and anti-goals

- Do not redesign blog, privacy, or terms pages in this pass.
- Do not replace product copy, invent claims, or represent sample records as real data.
- Do not replace real app captures with fabricated screenshots or change app functionality.
- Avoid default web-card grids as the page's main structure; use cards where they explain a distinct feature or provide a meaningful surface.

## Approaches

1. **Recommended: Material 3 showcase.** Give the hero a distinct tonal container for the real app preview and organize the rest of the home and features pages into clear content regions with M3 surface roles. This makes the visual language more cohesive while keeping the app evidence prominent.
2. **Side-by-side hero with lighter M3 styling.** Keep the current hero structure and apply Material 3 tokens and component treatments. This is lower change but leaves more of the old visual composition in place.

The user asked to continue with the recommended showcase direction after selecting the homepage, features page, and shared shell as the scope.

## Constraints and implementation calls

- Use the existing Next.js App Router, CSS, React components, and self-hosted Plus Jakarta Sans; add no dependency.
- Keep current routes, links, SEO data, structured data, form behavior, carousel controls, reduced-motion support, and responsive behavior.
- Translate Material 3 color roles into MoneyBee's existing green and mint brand instead of adopting default Material purple or blue.
- Keep blog and legal content accessible through the shared navigation/footer without restyling their page bodies.
- Implement a restrained M3 shape scale and tonal elevation, visible focus states, touch-sized controls, and hover/pressed/disabled states.

## Builder decisions

- The target audience is everyday money organizers evaluating MoneyBee before downloading the Android app.
- The main success action remains visiting Google Play; feature comprehension is the supporting goal.
- The layout uses the actual screenshot carousel inside a tonal showcase, then retains the notebook illustration and existing section content.
- Homepage and feature catalog receive the revised shared component language; shared header/footer receive corresponding M3 navigation and action styling.
