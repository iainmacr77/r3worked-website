# Marketing Site UI kit

Recreation of the live R3WORKED marketing homepage (`r3worked-website/src/app/page.tsx` and
`src/components/homepage/*.tsx`), plus a new hero concept exploring the brief's requested
"lead rescue engine" direction.

## Files

- `index.html` — full click-through recreation of the **current** production homepage: nav,
  hero, trust ticker, the-3 system section, before/after showcase, enquiry capture, lead
  capture/dispatch board, pricing, final CTA, footer. Composed from `SectionsA.jsx` +
  `SectionsB.jsx`, built entirely from this design system's components (`Button`, `Icon`,
  `Wordmark`, `PremiumCard`, `DarkPanel`, `SurfaceCard`, `SectionHeading`, `SegmentedToggle`).
- `new-hero-concept.html` + `RescueEngine.jsx` — **the new hero direction** (see root readme
  "New hero concept" section for the full design rationale). A `@startingPoint` so consuming
  projects can seed a new build directly from it.

## Ground truth

This is a direct visual recreation, not a reinterpretation — colors, copy, spacing and card
shapes are taken from the source `.tsx` files. The before/after showcase is simplified (static
toggle over the Collins Construction "after" image rather than the full interactive modal with
iframe-style scrolling previews) since that interaction is specific to the case-study content,
not the reusable design language.
