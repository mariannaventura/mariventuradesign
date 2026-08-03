---
name: Mari Ventura
description: Portfolio site for a Brazilian graphic designer — bold visual identity, made with care.
colors:
  ink-violet: "oklch(0.303 0.161 297)"
  lilac: "oklch(0.645 0.158 306)"
  sky: "oklch(0.78 0.087 214)"
  olive: "oklch(0.421 0.114 131)"
  brown: "oklch(0.345 0.083 55)"
  petrol-teal: "oklch(0.387 0.078 231)"
  background: "oklch(0.99 0.005 300)"
  foreground: "oklch(0.18 0.05 320)"
  card: "oklch(1 0 0)"
  muted: "oklch(0.95 0.01 300)"
  muted-foreground: "oklch(0.45 0.05 320)"
  border: "oklch(0.88 0.02 300)"
  ring: "oklch(0.62 0.22 330)"
  destructive: "oklch(0.577 0.245 27.325)"
typography:
  display:
    fontFamily: "Fraunces, serif"
    fontWeight: 600
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, sans-serif"
    fontWeight: 400
rounded:
  sm: "8px"
  md: "10px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.sky}"
    textColor: "#0a0a0a"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.sky}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  chip:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: Mari Ventura

## 1. Overview

**Creative North Star: "The Confident Signature"**

This is a designer's own mark, not a template pretending to be one. Every screen commits fully to one deep violet identity rather than hedging with a safe, interchangeable palette — the visual equivalent of a signature written without a second draft. Fraunces carries that confidence in the headlines: a serif with personality, set tight (-0.02em) so it reads as considered rather than decorative. Inter does the quiet work underneath, keeping bios, labels, and body copy legible and unfussy so the display type stays the star.

The system explicitly rejects the overly corporate, stiff-resume-site feel — no boxed-in LinkedIn-profile layouts, no generic "creative studio" sameness. Personality shows up in motion (the mouse-reactive hero gradient, staggered reveals) and in color commitment, not in decorative noise.

**Key Characteristics:**
- One saturated violet carries the brand; nothing else competes with it for attention.
- Pill-shaped (`rounded-full`) buttons and tags throughout — soft, never sharp-cornered.
- Glass, translucent navigation that adapts to the page beneath it.
- Motion is a first-class part of the identity, not decoration bolted on afterward.

## 2. Colors

The official six-color brand palette. Ink Violet drives nearly every branded surface; Sky is the sanctioned CTA accent; Lilac, Olive, and Petrol Teal are confirmed brand colors held in reserve until a component earns them; Brown rounds out the full palette for future use.

### Primary
- **Ink Violet** (oklch(0.303 0.161 297) / #3B0373): The brand's signature color. Anchors the hero's animated conic gradient, marks active nav links on light pages, and is reused as the `accent` role (filter-pill active state, focus rings, hover borders on contact cards).

### Secondary
- **Petrol Teal** (oklch(0.387 0.078 231) / #004B66): Part of the official palette but not yet applied anywhere in the live pages. Reserved capacity for a future section or component that needs a second brand color distinct from Ink Violet — don't introduce it speculatively until there's a real use.

### Tertiary
- **Lilac** (oklch(0.645 0.158 306) / #A571D9): The organic gradient partner to Ink Violet — powers the hero's mouse-reactive conic gradient alongside Ink Violet. Needs dark (foreground-ink) text when used as a background; too light for white text at body-copy contrast.
- **Sky** (oklch(0.78 0.087 214) / #71C6D9): The sanctioned CTA accent. Solid fill on the hero's primary button, outline/text on the secondary button, hover/active link color on dark routes. Needs dark (near-black) text when used as a background.
- **Olive** (oklch(0.421 0.114 131) / #365902) and **Brown** (oklch(0.345 0.083 55) / #592B02): Confirmed official brand colors, not yet applied in the live UI. Hold in reserve for a genuine use (e.g. category color-coding, a future section) rather than introducing them decoratively.

### Neutral
- **Background** (oklch(0.99 0.005 300)): Page base on every route except the hero, which overrides it with the violet-to-lilac gradient.
- **Foreground** (oklch(0.18 0.05 320)): Default body text color — a near-black tinted toward the violet hue, not a pure gray. Also the correct text color on top of Lilac or Sky backgrounds.
- **Card** (oklch(1 0 0)): Pure white, used for card surfaces (contact links) sitting on the tinted background.
- **Muted** (oklch(0.95 0.01 300)) / **Muted Foreground** (oklch(0.45 0.05 320)): Chip/tag backgrounds and their text — skill pills, portfolio tag chips, the diagonal-stripe image placeholder.
- **Border** (oklch(0.88 0.02 300)): Card borders, section dividers, the placeholder-image dashed outline.
- **Ring** (oklch(0.62 0.22 330)): Focus-visible outline color, distinct from Ink Violet so keyboard focus stays visibly separate from the brand accent.
- **Destructive** (oklch(0.577 0.245 27.325)): Reserved for error/destructive states via the shadcn primitives; not yet surfaced in any custom page.

### Named Rules
**The One Accent Rule.** Ink Violet is the only color allowed to signal "this is active / this is the brand" — active nav links, active filter pills, focus rings on interactive elements. It does not appear as a body-text color or a large background fill outside the hero.

**The Contrast-Pairs Rule.** Dark palette colors (Ink Violet, Olive, Brown, Petrol Teal) always pair with near-white text. Light palette colors (Lilac, Sky) always pair with the site's dark Foreground ink, never white. Verified against WCAG AA (≥4.5:1 for body text) for every color in the palette.

## 3. Typography

**Display Font:** Fraunces (serif)
**Body Font:** Inter (sans-serif)

**Character:** A confident, slightly editorial serif against a clean, functional sans — the pairing that lets headlines feel authored while everything else stays out of the way.

### Hierarchy
- **Display** (600 weight, `text-4xl md:text-6xl`, -0.02em tracking): The hero H1 only — "Design gráfico com propósito e sensibilidade."
- **Headline** (Fraunces, -0.02em tracking, h1–h4 default): Section and page titles across Trabalhos, Sobre, Contato.
- **Body** (Inter, 400 weight): Bios, descriptions, nav labels, footer copy.
- **Label** (Inter, `text-xs`/`text-sm`, uppercase + `tracking-widest` on case-study eyebrows): Case-study metadata labels, filter-pill text.

### Named Rules
**The Serif-Owns-Headings Rule.** Fraunces is reserved for h1–h4 only, set at -0.02em. Inter never appears at display size, and Fraunces never appears in body copy or UI chrome (buttons, nav, chips).

## 4. Elevation

Mostly flat with restrained shadow use for a small set of elements that need to visually lift off the page — profile photo, case-study hero image, hover states on contact cards. No ambient shadow system; each usage is a discrete, deliberate lift rather than part of a layered elevation scale.

### Shadow Vocabulary
- **Photo lift** (`shadow-lg`): Sticky profile photo on Sobre, hero image on case-study detail pages.
- **Hover lift** (`hover:shadow-md`): Contact link cards, signaling interactivity on hover only — flat at rest.
- **Drop shadow** (`drop-shadow-2xl` / `drop-shadow-xl`): The hero symbol and wordmark images, separating them from the animated gradient behind them.

### Named Rules
**The Flat-at-Rest Rule.** Cards and interactive surfaces carry no shadow by default. Shadow appears only as a hover response or on isolated hero imagery — never as ambient depth applied everywhere.

## 5. Components

### Buttons
- **Shape:** Fully rounded (`rounded-full`, 9999px) — every button in the system is a pill, no exceptions.
- **Primary:** Solid Sky (#71C6D9) background with near-black (#0a0a0a) text, `px-6 py-3`, medium weight. Used for the hero's primary CTA ("Ver trabalhos").
- **Secondary / Ghost:** Transparent background, Sky border and text, `hover:bg-white/10`. Used for the hero's fallback CTA ("Entrar em contato").
- **Filter pill (Trabalhos):** Bordered, `bg-background` at rest; active state fills solid `bg-accent` (Ink Violet) with `accent-foreground` text and `shadow-sm`.

### Chips
- **Style:** `bg-muted` background, `muted-foreground` text, `rounded-full`, small padding (`px-2 py-0.5` to `px-3 py-1`).
- **Use:** Skill tags on Sobre, portfolio tags on Trabalhos and case-study cards — always informational, never interactive/clickable.

### Cards / Containers
- **Corner Style:** `rounded-2xl` (contact link cards), `rounded-lg` (images: profile photo, case-study hero, focus ring on portfolio thumbnails).
- **Background:** `bg-card` (pure white) on the tinted off-white page background.
- **Shadow Strategy:** flat at rest, `hover:shadow-md` on interaction (see Elevation).
- **Border:** 1px `border-border`, shifting to `border-accent` on hover.
- **Internal Padding:** `p-6` on contact cards.

### Inputs / Fields
No custom input styling has shipped yet — the shadcn `input.tsx` primitive is installed but unused in any live route. When a contact form or similar is built, inherit the border/ring/radius tokens above rather than introducing new values.

### Navigation
Fixed, full-width header with a glassmorphism treatment: `backdrop-blur-md` plus a translucent background that adapts to the page beneath it — `bg-black/20` with a `border-white/10` hairline on the dark hero route, `bg-white/40` with `border-black/10` everywhere else. Link text and hover/active colors invert the same way: white text with a Sky hover/active on the dark hero, black text with an Ink Violet hover/active on every other page. Active links additionally pick up `font-medium`.

### Hero Gradient (signature component)
A mouse-reactive conic gradient unique to the home route: two overlapping conic gradients (`overlay` blend mode) cycling through `#180037 → #3B0373 → #A571D9 → #3B0373 → #6C3DA4`, an organic blend from Ink Violet to Lilac, driven by spring-smoothed cursor position (`useSpring` stiffness 60 / damping 20). This is the single most distinctive piece of the system — it should not be reused decoratively elsewhere, since its power depends on being the hero's one-time signature move.

## 6. Do's and Don'ts

### Do:
- **Do** keep Ink Violet as the only "this is active/branded" signal — nav active state, filter-pill active state, focus/hover accents.
- **Do** use `rounded-full` for every button and tag; it's a system-wide constant, not a per-component choice.
- **Do** keep shadows flat-at-rest and reserve them for hover feedback or isolated hero imagery (profile photo, case-study hero, logo marks).
- **Do** pair Fraunces (headings only, -0.02em) with Inter (everything else) — never mix in a third typeface.
- **Do** use the entrance choreography already established (`FadeIn`/`Stagger`/`StaggerItem`, 0.6s duration, `cubic-bezier(0.22, 1, 0.36, 1)` easing, 20–24px translate) for new sections, so motion feels consistent rather than one-off per page.
- **Do** pair dark palette colors with near-white text and light palette colors with the site's Foreground ink — see the Contrast-Pairs Rule.

### Don't:
- **Don't** make the site feel like an "overly corporate or stiff resume site" — no boxed LinkedIn-profile layout, no neutral-safe corporate palette. This is a designer's authored site.
- **Don't** introduce a second saturated accent competing with Ink Violet; Sky is the only sanctioned secondary color, reserved for CTAs and dark-nav states.
- **Don't** apply Petrol Teal, Olive, or Brown speculatively — they stay dormant until a real component needs a distinct color from this palette.
- **Don't** reuse the hero's mouse-reactive conic gradient as a generic decorative background elsewhere; it's the home page's signature move, not a pattern.
- **Don't** add ambient/ubiquitous drop shadows to cards or buttons — this system stays flat except for the specific hover and hero-image cases documented in Elevation.
