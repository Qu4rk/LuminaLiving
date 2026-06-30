---
name: The Limassol Circuit
description: Luxury editorial residence microsite on the Limassol shoreline
colors:
  coastal-night: "#111111"
  elevated-night: "#1a1a1a"
  linen: "#e8e4df"
  driftwood: "#8b8178"
  aged-brass: "#8b7355"
  light-brass: "#c4b5a0"
  hairline: "rgba(255,255,255,0.08)"
  hairline-strong: "rgba(255,255,255,0.14)"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Chillax, Helvetica Neue, sans-serif"
    fontWeight: 400
    lineHeight: 1.8
  section-label:
    fontFamily: "Chillax, Helvetica Neue, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    letterSpacing: "0.2em"
    textTransform: "uppercase"
  section-heading:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.4rem, 5vw, 4.2rem)"
    fontWeight: 300
    lineHeight: 1.15
  body-text:
    fontFamily: "Chillax, Helvetica Neue, sans-serif"
    fontSize: "clamp(1rem, 1.1vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.8
  lead:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.4rem, 2.5vw, 2rem)"
    fontWeight: 300
    lineHeight: 1.5
rounded:
  none: "0"
  hairline: "2px"
spacing:
  container: "1200px"
  gutter: "clamp(1.5rem, 5vw, 5rem)"
  section-gap: "clamp(8rem, 12vw, 16rem)"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.linen}"
    rounded: "{rounded.none}"
    padding: "1rem 2.5rem"
    typography: "{typography.section-label}"
  button-primary-hover:
    backgroundColor: "{colors.aged-brass}"
    textColor: "{colors.coastal-night}"
    rounded: "{rounded.none}"
  nav-link:
    textColor: "{colors.linen}"
    typography: "{typography.section-label}"
  section-label:
    textColor: "{colors.aged-brass}"
    typography: "{typography.section-label}"
  feature-image:
    rounded: "{rounded.hairline}"
  hairline-divider:
    backgroundColor: "{colors.hairline}"
    height: "1px"
---

# Design System: The Limassol Circuit

## 1. Overview

**Creative North Star: "The Considered Coast"**

An editorial residence microsite that treats a coastal Cyprus rental the way a serious magazine treats its subject: with restraint, precision, and the assumption that the reader has taste. The system is built on tinted-black surfaces, warm-bronze accents used sparingly, and a serif/sans pairing (Cormorant Garamond + Chillax) that lets the typography do the work that gradients and shadows would do in a lesser site. Depth comes from hairline borders and tonal shifts between `#111111` and `#1a1a1a`, never from shadows. Motion is scroll-revealed, staggered, ease-out, and never performs; it exists to pace the reader.

The system explicitly rejects stock AI designs (identical card grids, hero-metric SaaS cliché, gradient text, decorative glassmorphism), excessive emptiness that earns nothing, and over-the-top animation. Spa-copy language ("indulge", "unwind", "luxurious") is forbidden; the systems are the luxury, demonstrated not claimed.

**Key Characteristics:**
- Tinted-black canvas, never pure `#000`.
- Warm bronze accent (`#8b7355`) used on ≤10% of any screen. Its rarity is the point.
- Square corners (`border-radius: 0`) with a single 2px exception for image wraps.
- Hairline borders (`rgba(255,255,255,0.08)`) as the primary divider vocabulary.
- Serif display + sans body; hierarchy through weight contrast (300 display vs 400 body) and fluid `clamp()` scales.
- All motion uses `cubic-bezier(0.19, 1, 0.22, 1)` (ease-out-expo family). No bounce, no elastic.

## 2. Colors: The Coastal Night Palette

A restrained palette: tinted neutrals carry 90% of every screen, with one warm bronze accent doing the strategic work.

### Primary
- **Aged Brass** (`#8b7355`): the single accent. Used on section labels, the hero CTA border, hairline accents under navigation, and the rotating-word underlines. Never used as a fill on more than one element per viewport.

### Neutral
- **Coastal Night** (`#111111`): the canvas. Never `#000`; this is a warm-tinted black.
- **Elevated Night** (`#1a1a1a`): raised surfaces, the preloader, nav background on scroll.
- **Linen** (`#e8e4df`): primary text and heading color. Warm off-white, never `#fff`.
- **Driftwood** (`#8b8178`): muted body copy, captions, secondary text.
- **Light Brass** (`#c4b5a0`): the lighter accent variant, used rarely for hover/active micro-states.
- **Hairline** (`rgba(255,255,255,0.08)`): the default divider. Used on `feature-solo` top/bottom borders, nav separators, list dividers.
- **Hairline Strong** (`rgba(255,255,255,0.14)`): borders on interactive elements (buttons, inputs).

### Named Rules
**The One Voice Rule.** Aged Brass appears on ≤10% of any given screen. Its rarity is the point. If two brass elements are visible in the same viewport, one is wrong.

**The Tinted-Black Rule.** Never use `#000` or `#fff`. Every neutral is tinted toward warm. The canvas is `#111111`, the text is `#e8e4df`. Pure black and pure white are forbidden.

**The Anomaly Quarantine.** Two off-palette colors exist in the current code as legacy anomalies: `#00FF33` (bright green, used on `.btn-primary:hover`) and `#AEE2FF` (light blue, used on hero rotating words). These violate the palette and must be replaced with Aged Brass or Light Brass on any redesign pass. Do not propagate them.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia fallback)
**Body Font:** Chillax (with Helvetica Neue fallback)

**Character:** A serif/sans pairing where the serif (Cormorant Garamond at weight 300) carries every heading and the lead text, while the sans (Chillax at weight 400) carries body copy, labels, and navigation. The contrast is weight-led (300 vs 400) and family-led (serif vs sans) simultaneously. Italic Cormorant is available for editorial inflection. Letter-spacing is slightly tightened on display (`-0.01em`) and slightly opened on labels (`0.2em`, uppercase).

### Hierarchy
- **Display / Section Heading** (Cormorant Garamond, 300, `clamp(2.4rem, 5vw, 4.2rem)`, line-height 1.15): the dominant heading inside each section.
- **Lead** (Cormorant Garamond, 300, `clamp(1.4rem, 2.5vw, 2rem)`, line-height 1.5): editorial intro paragraphs, set in the serif to signal "this is voice, not navigation."
- **Feature Heading** (Cormorant Garamond, 300, `clamp(1.8rem, 3vw, 2.6rem)`, line-height 1.2): sub-section headings inside feature blocks.
- **Body** (Chillax, 400, `clamp(1rem, 1.1vw, 1.15rem)`, line-height 1.8): default paragraph copy. Max line length 58–65ch.
- **Label** (Chillax, 500, 0.7rem, letter-spacing 0.2em, uppercase): section labels like `[ Signature Living ]`, button copy, nav links. The workhorse micro-element.

### Named Rules
**The Serif-Heads-Only Rule.** Cormorant Garamond is reserved for headings and lead text. Body copy, labels, buttons, and navigation use Chillax. Mixing the serif into body copy breaks the hierarchy.

**The Label Voice Rule.** Section labels are always uppercase, always 0.7rem, always 0.2em letter-spacing, always bracketed `[ Like This ]`, always Aged Brass. They are the system's most recognizable signature; do not vary them.

## 4. Elevation

This system is flat by default. There are no box-shadows in the token set. Depth is conveyed entirely by:

1. **Tonal layering** — `#111111` (canvas) vs `#1a1a1a` (elevated surface) vs transparent.
2. **Hairline borders** — `rgba(255,255,255,0.08)` (default) and `rgba(255,255,255,0.14)` (strong, on interactive elements).
3. **Image containment** — `feature-image-wrap` uses `overflow: hidden` with a 2px radius and a slow `transform: scale(1.03)` on hover, which is the closest the system gets to a shadow.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. No `box-shadow` is permitted on cards, buttons, inputs, or sections. If depth is needed, use a hairline border or a tonal shift to `--bg-elevated`.

**The Hover-Transform Rule.** The only motion permitted on a resting surface is a slow `transform: scale()` on contained images (`0.8s var(--ease)`). No `translateY` lift on cards, no shadow-on-hover.

## 5. Components

### Buttons
- **Shape:** Square corners (`border-radius: 0`).
- **Primary:** transparent background, 1px `hairline-strong` border, Linen text, `padding: 1rem 2.5rem`, label-typography (0.75rem, 500, uppercase, 0.18em letter-spacing). Slow 0.6s `var(--ease)` transition on background, color, and border-color.
- **Hover:** fills with Aged Brass, text flips to Coastal Night. (Current code uses an off-palette `#00FF33` green here; see The Anomaly Quarantine Rule. Redesigns must use Aged Brass.)
- **Active:** `transform: scale(0.98)` for tactile feedback.
- **No secondary/ghost variant.** The system uses a single button style; hierarchy is by typography and placement, not by variant.

### Section Labels
- The signature micro-element. Uppercase, 0.7rem, 0.2em letter-spacing, Aged Brass, bracketed `[ Like This ]`.
- Appears at the top of every section. Always set in Chillax, never the serif.

### Feature Blocks (Image + Text)
- Two-column grid (`1fr 1fr`), `clamp(3rem, 6vw, 7rem)` gap, `align-items: center`.
- Reversed variant uses `direction: rtl` on the grid (children reset to `ltr`).
- Image wrap: `overflow: hidden`, 2px radius, 4:5 aspect-ratio image with `object-fit: cover`, slow `scale(1.03)` on hover.
- Feature heading: Cormorant Garamond 300, `clamp(1.8rem, 3vw, 2.6rem)`. Body: Chillax 400, muted Driftwood, max-width 42ch.

### Feature Solo (Text-Only Editorial Break)
- `max-width: 640px`, centered, top and bottom hairline borders, `padding: clamp(3rem, 6vw, 5rem) 0`.
- Heading + paragraph, centered. The quiet pause between image-led feature blocks.

### Navigation
- Fixed top bar, transparent over hero, fills with Elevated Night on scroll.
- Logo in Chillax, nav links in label-typography (uppercase, 0.2em). CTA button uses the primary button style at a smaller size.

### Hairline Dividers
- 1px, `rgba(255,255,255,0.08)`. The default way to separate anything: section breaks, list items, feature-solo boundaries. Never use a thicker border, never use a colored stripe.

## 6. Do's and Don'ts

### Do:
- **Do** use Aged Brass (`#8b7355`) on section labels, the hero CTA border, and at most one accent element per viewport.
- **Do** set every heading in Cormorant Garamond at weight 300, every body/label in Chillax.
- **Do** separate sections and elements with 1px `rgba(255,255,255,0.08)` hairlines, never thicker borders.
- **Do** use `clamp()` for every type size and every major spacing value, so the system stays fluid across breakpoints.
- **Do** reveal content on scroll with `cubic-bezier(0.19, 1, 0.22, 1)` easing, staggered, never choreographed beyond a gentle reveal.
- **Do** respect `prefers-reduced-motion: reduce` — every reveal must degrade to a static visible state.
- **Do** keep body copy to 58–65ch max line length for readability.

### Don't:
- **Don't** use pure `#000` or pure `#fff`. The canvas is `#111111`, the text is `#e8e4df`. Tint every neutral warm.
- **Don't** propagate the legacy anomaly colors `#00FF33` (button hover green) or `#AEE2FF` (rotating words blue). Replace them with Aged Brass on any redesign pass.
- **Don't** use `box-shadow` on any resting surface. Depth comes from hairlines and tonal layering only.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe. Side-stripes are forbidden; use full hairlines or background tints instead.
- **Don't** use `background-clip: text` with a gradient. Single solid colors only; emphasis is by weight or size, never gradient text.
- **Don't** use glassmorphism (`backdrop-filter: blur`) decoratively. Rare and purposeful, or nothing.
- **Don't** build hero-metric templates (big number, small label, supporting stats, gradient accent). This is a SaaS cliché and antithetical to the editorial register.
- **Don't** build identical card grids (same-sized icon + heading + text, repeated). If a list is needed, vary the rhythm.
- **Don't** use bounce or elastic easing. Only the ease-out-expo family (`cubic-bezier(0.19, 1, 0.22, 1)`).
- **Don't** write spa-copy ("indulge", "unwind", "luxurious", "the ultimate"). The systems are the luxury; demonstrate the mechanism, never claim the adjective.
- **Don't** introduce a second saturated color. The palette is Aged Brass + neutrals. Full stop.
