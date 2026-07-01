# R3WORKED Design System

A design system for **R3WORKED** — a premium website uplift, enquiry-capture and lead-handling
service for underperforming service-business websites (trades, roofers, builders, plumbers,
electricians and similar local service businesses in the UK). This system was built to give the
brand a stronger foundation ahead of a new, more energetic homepage hero direction.

## Sources this was built from

- **Codebase**: `r3worked-website/` — a Next.js 15 / Tailwind v4 / Framer Motion marketing site,
  mounted locally (paths referenced throughout this readme are relative to that folder root, not
  guaranteed to still be mounted for future readers).
  - `r3worked_overview.md` — full product/business narrative (the source of most of the "what R3WORKED
    is" content below).
  - `src/app/globals.css` — the production color tokens, type scale and premium-card/seam utilities.
  - `src/components/homepage/*.tsx` — every homepage section (hero, the-3, before/after, enquiry
    capture, lead capture/dispatch board, pricing, final CTA, footer, nav).
  - `src/components/ui/Logo.tsx` — **note:** this file is a leftover "Hey Lola" (a different,
    unrelated restaurant-AI brand) logo component; it is NOT the R3WORKED mark and was not used.
    R3WORKED's actual identity mark is the `R3WorkedWordmark.tsx` text wordmark (recreated here as
    the `Wordmark` component).
  - `context.md` — belongs to the unrelated "Hey Lola" brand context; ignored.
  - `public/images/collins/after/*.webp` — real photography from a "Collins Construction"
    before/after case study, copied into `assets/imagery/`.
- No Figma file or slide deck was attached to this project.

## What R3WORKED is

R3WORKED reworks underperforming service-business websites into sharper commercial assets, then
handles what happens after someone enquires. Three layers, which is where the name comes from:

1. **Website uplift** — clearer structure, stronger trust presentation, better CTAs.
2. **Enquiry capture** — shorter paths to quote/contact, structured forms, less friction.
3. **Lead handling** — acknowledgement email, owner notification, clean lead logging (Google
   Sheets today), with missed-call AI voice answering explicitly marked **coming soon**, and a
   post-job review/follow-up loop.

Core promise: **stop losing enquiries.** Initial market wedge is UK roofers, expanding to other
local trades. R3WORKED should never read as a generic web agency, an "AI magic" product, or a
broad SaaS dashboard — it is a narrow, premium, practical rescue system for real inbound demand.

## Index — what's in this project

- `styles.css` — the global stylesheet entry point (imports everything below).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`.
- `components/`
  - `core/` — `Button`, `PremiumCard`, `DarkPanel`, `SurfaceCard`, `SectionHeading`,
    `SegmentedToggle`, `StatusPill` + `IconTile`, `Wordmark`.
  - `icons/` — `Icon`, a curated Lucide-compatible stroke icon set.
- `ui_kits/marketing-site/` — full click-through recreation of the current production homepage
  (`index.html`), plus the new hero concept (`new-hero-concept.html` / `RescueEngine.jsx`).
- `templates/hero-lead-rescue-engine/` — the new hero, packaged as a starting-point template for
  consuming projects (`HeroLeadRescueEngine.dc.html`).
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand/texture/imagery) that
  populate the Design System tab, plus this readme's deeper-dive sections below.
- `assets/imagery/` — the Collins Construction before/after case-study photography.

## Fonts

Inter (400–800), loaded from Google Fonts CDN in `tokens/fonts.css`. The production codebase
consumes Inter via the `@fontsource/inter` npm package rather than shipping raw font binaries, and
Inter is itself a standard open-source Google Font (not a proprietary brand typeface) — so no
substitution was needed and no font upload is required. If R3WORKED ever commissions a custom
display face, drop the binaries in `assets/fonts/` and replace the `@import` with `@font-face`
rules pointing at them.

## New hero concept — "Lead Rescue Engine"

The brief asked for a new hero with more energy and a clearer cause-and-effect story than a static
dashboard screenshot. The direction built here (`templates/hero-lead-rescue-engine/` and
`ui_kits/marketing-site/new-hero-concept.html`) is a hybrid of the brief's Option A (Lead Rescue
Engine) and Option D (phone + dashboard):

- **Three enquiry sources** (web form, missed call, WhatsApp) sit above a **central dark engine
  panel** carrying the coral sticker-shadow used on the production dashboard card.
- **Animated flow lines** (dashed SVG strokes with a moving dash offset) connect sources → engine →
  outcomes, making the "catch → alert → log → follow up" sequence legible in seconds without
  reading any copy.
- The engine's status pill **cycles RECEIVED → ROUTED → LOGGED** on a 2.2s loop — a restrained,
  purposeful motion rather than a flashy one.
- **Missed call is visibly marked "Soon"** — voice answering is never shown as live, per the brief.
- **Three outcomes** (alert sent, lead logged, review queued) fan out below the engine, closing the
  loop back to the "stop losing enquiries" promise.
- Entrance is a gentle staggered fade/rise (`r3t-pop-in` / `r3-pop-in`), never a bounce.

This preserves the existing palette, wordmark, button and card language entirely — the evolution is
in composition and motion, not a new visual system.

## Content fundamentals

**Voice**: direct, commercially confident, no fluff. Sentences are short and declarative
("Stop losing enquiries.", "Lead logged.", "Owner alerted."). Copy explains *what happens*, not
*how clever the technology is*.

**Person**: mostly second-person/implied ("you") in marketing copy ("we structure your website...",
"how it should feel"), but UI microcopy is written in a neutral, system-log register with no
pronoun at all — status lines read like a real operational log, not a chat assistant ("New serious
enquiry"-style labels, timestamps, "Owner alerted", "Lead logged").

**Casing**: sentence case for headlines and body copy; UPPERCASE + wide tracking (`0.14–0.2em`)
exclusively for eyebrows, status pills, and meta labels ("LEAD RESCUE FOR TRADES & LOCAL SERVICE
BUSINESSES", "RESPONSE TARGET", "PHASE 02"). Never uppercase a full sentence.

**Numbers as proof, not hype**: "5 min" response target, "£1,250" one-off price, "£200/month" — real
numbers stated plainly, no fake growth percentages or invented client counts.

**No emoji, ever.** No fake testimonials, fake logos, or fake reviews. No "AI will run your
business" language — automation is described as what it concretely does (sends an alert, logs a
record), not what it magically promises.

**Restraint on the v2/AI layer**: missed-call AI voice answering is always labelled explicitly
"Coming soon" and never shown as a live, working feature — this is a hard rule, not a style choice.

**Section naming pattern**: "Phase 01 / 02 / 03" for the three core layers; short label + one-line
description; a "what's included" bullet list uses plain nouns, not marketing adjectives
("Homepage-led rebuild with up to 5 key pages", not "revolutionary rebuild").

## Visual foundations

**Palette**: warm off-white ("porcelain") background world with near-black ("ink") panels and a
single coral/clay accent family, evolved here with a small, restrained operational-status system
(green = live/logged, amber = pending/coming-soon) used only as tiny indicators — never as a
dominant fill. See `guidelines/colors-*.card.html` for full swatches.

**Type**: Inter only, one family for everything. Display sizes (h1–h3) use tight negative tracking
(-0.02em to -0.04em) and fluid `clamp()` sizing so the same markup scales desktop→mobile without
breakpoints. Body copy uses slightly looser tracking (-0.006em to -0.01em) and `text-wrap: pretty`.
Eyebrows/labels/meta are the only uppercase text, always with wide positive tracking.

**Backgrounds**: solid flat color only — no photographic hero backgrounds, no bluish-purple
gradients. The only non-flat background devices are (a) a barely-visible technical grid
(`rgba(22,22,22,0.1)` lines at 64px, ~4% opacity) behind hero/CTA sections, evoking a "control
room" without looking technical, and (b) a fixed full-viewport SVG film-grain noise layer at 3%
opacity over the whole page. Both are extremely subtle — the base surface always reads as flat and
clean.

**Photography**: the only real imagery in the source project is the Collins Construction
before/after case-study set (`assets/imagery/`) — warm, natural daylight architectural photography,
not stock-agency looking. There is no hero photography and no headshots/avatars anywhere in the
brand; product visuals are always UI mockups, never photos of people.

**Animation**: restrained and purposeful — fades + 10–30px rises on scroll-into-view (never a
bounce/spring overshoot), 0.6–0.9s durations with an eased-out custom cubic-bezier
(`[0.2, 0.65, 0.3, 0.9]` or `[0.22, 1, 0.36, 1]`), staggered by ~0.08–0.15s per item. Status/"live"
states pulse gently (opacity 1→0.45, scale 1→0.85, ~1.4–1.6s) rather than blink hard. Flow/progress
lines animate via a slow, continuous dash-offset — legible motion, never distracting.

**Hover states**: buttons and CTAs lift 2px (`translateY(-2px)`) and deepen background slightly
(ink → slate, or a subtle brightness increase on coral) — no color-inversion hovers. Cards get a
lift + the signature coral sticker-shadow appears on hover where it wasn't present at rest (see the3
step cards). Ghost/outline buttons brighten their translucent white fill on hover.

**Press/active states**: not explicitly defined in the source; follow the hover pattern but drop the
lift (return to `translateY(0)`) for a "pressed down" read.

**Borders**: hairline only, always low-opacity black (`rgba(22,22,22,0.05–0.12)`) on light surfaces
or low-opacity porcelain (`rgba(247,243,238,0.1)`) on dark panels — never a solid saturated border
color, and never a colored left-border accent strip on cards.

**Shadows**: two systems, deliberately different in character. (1) **Soft elevation** — large, soft,
warm-toned shadows (`rgba(72,50,37,...)` not pure black) for glass "premium-card" surfaces, often
paired with an `inset 0 1px 0 rgba(255,255,255,0.7-0.9)` top highlight for a frosted-glass look. (2)
**Sticker offset shadow** — a hard, un-blurred `6-8px 6-8px 0px` coral-muted shadow, used only on
dark ink panels (the hero dashboard mock, the pricing panel) — this is the brand's single most
distinctive shape signature; never blur it, never apply it to light cards.

**Corner radii**: generous throughout — 8px on small controls up to 40px on the final-CTA hero
panel — and buttons/pills are always fully rounded (`border-radius: 999px`), never radiused
rectangles.

**Cards**: three distinct surfaces, never mixed: a frosted glass "premium-card" (blur + soft warm
shadow) for editorial content blocks; a solid ink panel with the sticker shadow for
dashboard/product-mockup surfaces; and a plain white card with a tight, minimal shadow for dense
form-field/data-tile grids. No card anywhere uses a colored left-border accent strip.

**Transparency & blur**: `backdrop-filter: blur(12px)` is used specifically on the premium-card
glass surface over the porcelain background — never over photography, and never as a full-page glass
overlay. Everywhere else, transparency shows up only as low-opacity borders/text (see above), not as
blurred glass.

**Layout**: max content width `84rem` (~1344px), generous section padding (`py-24` mobile /
`py-32` desktop, `px-6` / `px-10`), and a `light-section-seam` hairline gradient device marking
section boundaries on the light background. Nothing is pinned/fixed except the sticky nav.

## Iconography

Icons throughout the production codebase come from **`lucide-react`** (stroke-based, 24×24 grid,
2px stroke, round caps/joins, no fills) — this is the only icon system in the brand; there is no
custom icon font, no PNG icon set, and no emoji usage anywhere. This design system reproduces the
exact subset of Lucide icons actually used on the homepage as a single `Icon` component
(`components/icons/Icon.jsx`) with inline path data matching Lucide's open-source (ISC-licensed)
paths, rather than adding an npm dependency — see that component's card for the full icon set.
Extend it the same way (24×24 grid, 2px stroke) if a new icon is needed; never hand-roll a
one-off inline SVG elsewhere in a screen.

## Caveats / what to help me get right next

- **Fonts**: Inter is loaded from Google Fonts CDN rather than self-hosted binaries (see "Fonts"
  above) — this is intentional, not a gap, since it's a standard open font. Flag if R3WORKED wants
  it self-hosted for offline/perf reasons instead.
- **No real logomark**: R3WORKED currently has no icon-only brand mark, only the text wordmark. If
  one exists outside this codebase, please attach it.
- **Before/After showcase simplified**: the UI kit's before/after section is a static toggle over a
  single case-study image rather than the full interactive iframe-style scrolling preview modal in
  production — that interaction is specific to the Collins Construction case-study content, not
  reusable design language, so it wasn't rebuilt in full.
- **New hero concept is one direction** (Option A/D hybrid). If you'd rather see Option B
  (split-screen sequential workflow) or Option C (two-scenario toggle) built out as alternatives,
  say the word and I'll add them as additional templates.

**Please iterate with me** — tell me if the operational status-color system (green/amber) should be
stronger or quieter, whether the sticker-shadow motif should extend to more surfaces, and whether the
Lead Rescue Engine hero should be built out further (e.g. clicking a source card actually types
into the mock form, or a phone mockup with a real WhatsApp notification slide-in).
