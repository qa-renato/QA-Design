---
name: InBot
description: Plataforma de infraestrutura conversacional — governança, escala, precisão operacional
colors:
  void-midnight: "#0c0a3b"
  command-deep: "#023c8f"
  operator-blue: "#0065fe"
  live-signal: "#15b7fe"
  surface: "#12103d"
  surface-raised: "#181660"
  surface-light: "#f5f7ff"
  off-white: "#ebebed"
typography:
  display:
    fontFamily: "Noopla, Poppins, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Noopla, Poppins, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.07em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  2xl: "24px"
  full: "9999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  6: "24px"
  8: "32px"
  12: "48px"
  16: "64px"
  20: "80px"
  24: "96px"
  32: "128px"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, #0065fe 0%, #15b7fe 100%)"
    textColor: "#ebebed"
    rounded: "{rounded.xl}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "linear-gradient(135deg, #0065fe 0%, #15b7fe 100%)"
    textColor: "#ebebed"
    rounded: "{rounded.xl}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.off-white}"
    rounded: "{rounded.xl}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.live-signal}"
    rounded: "{rounded.xl}"
    padding: "12px 24px"
  badge-brand:
    backgroundColor: "rgba(0,101,254,0.15)"
    textColor: "{colors.live-signal}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  badge-muted:
    backgroundColor: "rgba(235,235,237,0.08)"
    textColor: "rgba(235,235,237,0.6)"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  card-dark:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.off-white}"
    rounded: "{rounded.2xl}"
    padding: "24px"
---

# Design System: InBot

## 1. Overview

**Creative North Star: "The Control Room"**

The InBot design system is built for operators, not spectators. Every surface, every interaction, and every typographic choice is an instrument: legible under pressure, precise by default, and purposeful in what it reveals. The visual language communicates infrastructure — not as a metaphor, but as a material fact. There are no decorative elements that don't earn their place.

The palette lives deep in the spectrum: near-black indigo foundations with electric signal accents that communicate activity, not decoration. The typography is authoritative, with tight tracking on display sizes that reads like a system dashboard, not a marketing page. Motion exists to confirm state changes and guide attention, never to entertain.

What this system explicitly rejects: generic SaaS cream-and-teal templates, chatbot UI with balloon animations and mascots, stock-photo hero sections with smiling professionals, hero-metric layouts with big numbers on gradient backgrounds, and the performative complexity of glassmorphism used as visual filler. InBot earns authority through precision, not through spectacle.

**Key Characteristics:**
- Dark-primary: the default reading environment is deep navy, not white
- Instrument precision: every interactive element behaves predictably and confirms its state
- Controlled accent: Operator Blue and Live Signal appear purposefully, not as decoration
- Tonal depth: surfaces layer from dark to lighter, creating hierarchy without shadow overhead
- Motion discipline: animations exist only in orbital diagrams, SVG beams, and entrance reveals — never on static content

## 2. Colors: The Void-Signal Palette

Five primitive colors. Each has a defined role; none are interchangeable.

### Primary
- **Operator Blue** (`#0065fe`): The action color. Used on primary buttons, gradient start point, interactive elements. Communicates trust and decisiveness. Never used decoratively.
- **Live Signal** (`#15b7fe`): The accent and signal color. Used as gradient end, focus rings, active borders, badge text, and hover glow source. The color of something actively working.

### Secondary
- **Command Deep** (`#023c8f`): Medium surface color. Used for section backgrounds on dark-to-dark alternation, gradient mid-layer, and button secondary on gradient contexts.

### Neutral
- **Void Midnight** (`#0c0a3b`): The base. Default background for all dark sections. The default page background. Never use pure black; this tinted indigo base is the floor.
- **Surface Layer** (`#12103d`): One step lighter than Void Midnight. The default card and component background on dark surfaces.
- **Surface Raised** (`#181660`): Cards, modal surfaces, elevated elements on dark backgrounds.
- **Surface Light** (`#f5f7ff`): Background for light-variant sections. Alternates with dark to create rhythm. A near-white with a blue undertone — never pure white.
- **Off-White / Cintilante** (`#ebebed`): Default text color on dark backgrounds. Primary body text, heading text. Never pure white.

**The Gradient Rule.** The primary gradient (Operator Blue → Live Signal, 135°) is reserved for primary call-to-action elements and the hero background. It is never used on text except in the `MetricCard` value field, where it functions as a data-display convention. Applying the gradient to body copy or section headlines is prohibited.

**The Signal Economy Rule.** Live Signal (`#15b7fe`) appears in ≤ 3 roles per screen: accent borders, focus rings, and hover glows. When it appears everywhere, it loses its signal value. Rarity is the point.

## 3. Typography

**Display Font:** Noopla Bold (with Poppins Bold, system-ui, sans-serif as fallback stack)
**Body Font:** Poppins (with system-ui, sans-serif as fallback)

**Character:** Noopla is the brand's voice — authoritative and distinctive at large sizes, carrying the weight of an enterprise product that doesn't need to explain itself. Poppins provides the clarity: readable, neutral, reliable across all functional text. The pairing creates a two-tier reading experience: headlines command, body explains.

### Hierarchy

- **Display** (700 weight, clamp(3rem, 6vw, 4.5rem), line-height 1.1, tracking -0.03em): Hero headline only. One per page. Maximum impact, minimum words.
- **Headline** (700 weight, clamp(2rem, 4vw, 3rem), line-height 1.15, tracking -0.03em): Section titles. What the user reads first when scanning. 8-10 words maximum.
- **Title** (600 weight, 1.875rem / 30px, line-height 1.3, tracking -0.02em): Subsection headers, card titles with prominence. Two to four words.
- **Body Large** (400 weight, 1.125rem / 18px, line-height 1.65): Lead paragraphs, first sentences of sections. Max 65-75ch line length.
- **Body** (400 weight, 1rem / 16px, line-height 1.6): Standard body copy. Max 65-75ch. Every line earns its place.
- **Label** (500 weight, 0.75rem / 12px, line-height 1.2, tracking 0.07em, uppercase): Badges, eyebrows, captions, metadata chips. The voice of categorization.

**The One Sentence Rule.** If a headline runs to three lines, rewrite it. If a body paragraph runs past 65ch, wrap it. Typography is infrastructure: it routes attention, not prose.

## 4. Elevation

InBot uses a hybrid elevation system: tonal layering as the primary depth signal, supplemented by purposeful glow shadows as state indicators. Traditional drop shadows appear only on modals and elevated floating elements.

**The Stack:**
1. `void-midnight` (#0c0a3b) — ground floor: page background, dark sections
2. `surface` (#12103d) — first floor: card backgrounds, component surfaces
3. `surface-raised` (#181660) — second floor: modals, dropdowns, elevated cards
4. `surface-light` (#f5f7ff) — alternate floor: light-variant sections, not an elevation step

**The Glow Convention:** Shadows in this system are not ambient light simulations — they are state indicators. Glow appears when something is active, hovered, or highlighted.

### Shadow Vocabulary
- **Ambient** (`0 1px 3px rgba(0,0,0,0.3)`): Subtle separation for floating small elements.
- **Elevated** (`0 4px 16px rgba(0,0,0,0.4)`): Cards and elevated containers.
- **Modal** (`0 8px 32px rgba(0,0,0,0.5)`): Overlay elements. Maximum ambient shadow.
- **Signal Glow** (`0 0 40px rgba(21,183,254,0.15)`): Hover state on cards. Communicates interactivity.
- **Active Glow** (`0 0 60px rgba(0,101,254,0.25)`): Active/featured elements. The brightest state.
- **Nucleus Breathe** (animated `0 0 24px rgba(0,101,254,0.52), 0 0 52px rgba(21,183,254,0.16)`): Reserved for the EcosystemOrbit core node. Not reused elsewhere.

**The Flat-By-Default Rule.** Surfaces are flat at rest. Glows appear only as a response to hover, active state, or diagram animation. A card that glows at rest has no hover state to reveal — it has already shown its hand.

## 5. Components

### Buttons

Buttons are instruments, not decoration. The primary button is the only call-to-action that glows. Secondary buttons are for alternative paths, never for competing with primary.

- **Shape:** Softly rounded (16px / `rounded-xl`), large-radius pill for the AnimatedCTA variant
- **Primary:** Gradient Operator Blue → Live Signal (135°), Off-White text, 12px/24px padding. Hover: 90% opacity + signal glow (`0 0 30px rgba(0,101,254,0.4)`). Active: scale(0.98).
- **Secondary:** Transparent background, 1px border `rgba(21,183,254,0.4)`, Off-White text. Hover: border strengthens to full Live Signal, background `rgba(21,183,254,0.08)`. Active: scale(0.98).
- **Ghost:** No border, no background. Live Signal text. Hover: color shifts to Off-White. For tertiary actions only.
- **Focus (all variants):** 2px outline in Live Signal (#15b7fe), offset 3px.

### AnimatedCTA (Signature Component)

The primary discovery CTA. A pill-shaped container with an animated SVG border beam and a directional arrow swap on hover.

- **Shape:** Pill (9999px radius), two-layer structure: outer wrapper with subtle border + inner link with background fill
- **Border Beam:** SVG `<rect>` with `pathLength="500"`, `stroke-dasharray: 150 350`, animated via `inbot-discover-border-run` keyframe. Beam completes one loop in 1.5s linear.
- **Arrow Swap:** CSS Grid `40px|auto|40px` keeps text centered. Right arrow visible at rest → scale(0)/opacity:0 on hover. Left arrow hidden at rest → scale(1)/opacity:1 on hover. 0.4s cubic-bezier(0.16, 1, 0.3, 1).
- **Variants:** `light` (on dark backgrounds, Live Signal beam), `dark` (on light backgrounds, Operator Blue beam), `gradient` (on Command Deep backgrounds, Off-White beam)
- **Reduced Motion:** Border beam paused, arrow transition removed. Remains fully functional.

### ShinyButton (Signature Component)

Secondary hero CTA. A pill with a Houdini conic-gradient rotating border and a circle-to-pill fill expansion on hover.

- **Border:** `@property --inbot-shiny-angle` animates a conic-gradient border (Operator Blue → shine → transparent) in a 3s loop.
- **Fill:** A Live Signal circle (42px) positioned at the left, expands to full pill width on hover. Uses cubic-bezier(0.16, 1, 0.3, 1).
- **Text:** Label color transitions from Off-White → Aurora dark on hover (matching the fill expansion).
- **Reduced Motion:** Animation paused, border falls back to a static Operator Blue border.

### Badges / Eyebrows

Always pill-shaped (9999px). Always uppercase. Always tracking-wide (0.07em). Never more than 3 words.

- **Brand:** `rgba(0,101,254,0.15)` background, Live Signal text, `rgba(21,183,254,0.3)` border. Used on dark section eyebrows.
- **Accent:** `rgba(21,183,254,0.12)` background, Live Signal text, `rgba(21,183,254,0.25)` border.
- **Muted:** `rgba(235,235,237,0.08)` background, Off-White at 60% opacity, subtle white border.
- **Dark:** `rgba(2,60,143,0.4)` background (Command Deep tinted), Off-White text. Used on light section eyebrows.

### Cards

- **Dark surface:** Background `#12103d` (surface token), 1px border `rgba(21,183,254,0.12)`, 24px radius, 24px internal padding. Hover: border strengthens to `rgba(21,183,254,0.35)` + signal glow.
- **Light surface:** Background white or `#f5f7ff`, 1px border `rgba(0,101,254,0.15)`. Used in InteractiveFeatures. Hover: box-shadow elevation.
- **No nested cards.** A card inside a card is always wrong.

### Navigation (Header)

Two visual states: transparent at page top, floating pill after 40px scroll.

- **Rest:** Full-width, transparent background, z-50 fixed position. Invisible separation from page.
- **Scrolled:** Pill shape, `max-width: 1180px`, centered via `left: 50% / translate(-50%)`. Background `rgba(12,10,59,0.82)` with `backdrop-blur-xl`. Border `rgba(21,183,254,0.12)`. Transition: 500ms on max-width, border-color, box-shadow.
- **Nav links:** Hover uses a vertical slide effect — the text climbs out as a duplicate slides in from below. Overflow hidden on the anchor.
- **Focus:** Live Signal ring with Aurora offset.

### EcosystemOrbit (Signature Component)

SVG orbital diagram representing the InBot platform as a connected system.

- **Structure:** Three concentric rings. Outer and inner beams rotate in opposite directions. Radial pulse lines travel from nucleus to node chips.
- **Nucleus:** Breathing glow animation, 6s ease-in-out. Represents InBot core.
- **Chips:** Staggered scale(0.65→1) entrance with 0.12s delay per chip. Hover: border strengthens, subtle glow, 2px lift.
- **Ambient Orbs:** Three blurred radial gradient blobs behind the SVG. Static, no animation.
- **Reduced Motion:** All animations paused/hidden. Static diagram remains fully visible.

## 6. Do's and Don'ts

### Do:
- **Do** use `void-midnight` (#0c0a3b) as the default dark surface. Never pure black.
- **Do** alternate dark and light sections to create scroll rhythm. Dark → Light → Dark → Light is a reliable cadence.
- **Do** use Live Signal (#15b7fe) sparingly: active borders, focus rings, hover glows. Its rarity is its value.
- **Do** keep display headlines at 8-10 words maximum. If it needs three lines, rewrite it.
- **Do** use tonal layering (void-midnight → surface → surface-raised) before reaching for shadows.
- **Do** respect `prefers-reduced-motion` on every animation: paused orbits, disabled transitions, static fallbacks.
- **Do** give all focusable elements a 2px Live Signal outline with 3px offset. WCAG AA contrast is non-negotiable.
- **Do** lead with the consequence, not the feature. "Governança sobre cada interação" before the technical description.
- **Do** use the gradient (Operator Blue → Live Signal) on primary buttons only. One gradient anchor per screen.

### Don't:
- **Don't** use visual clichés from chatbot and bot UI: animated speech bubbles, smiling robot mascots, notification badge overlays on chat icons.
- **Don't** use generic SaaS landing templates: cream backgrounds, green/teal accents, "Join X+ companies" testimonial strips, animated counter metrics in a hero-metric layout.
- **Don't** use side-stripe borders (`border-left` > 1px as a colored accent). This is prohibited. Use full borders, background tints, or leading icons instead.
- **Don't** use gradient text on body copy, section headlines, or labels. The gradient text utility exists for `MetricCard` values only — a data-display convention, not a typographic style.
- **Don't** use glassmorphism as a default aesthetic. The floating header pill uses `backdrop-blur` purposefully; decorative frosted cards are prohibited.
- **Don't** use identical card grids: the same icon-plus-title-plus-text pattern repeated across a uniform grid. Vary card size, content depth, or layout before repeating the pattern.
- **Don't** use bank-photo aesthetics: smiling people at laptops, office collaboration stock images, hands holding phones. If product UI can't fill the space, use orbital diagrams, abstract glows, or nothing.
- **Don't** use buzzwords without evidence: "revolutionary", "disruptive", "transformational", "simple and easy". InBot's copy is precise and evidenced, not aspirational.
- **Don't** animate layout properties (width, height, margin, padding). Animate only transform and opacity.
- **Don't** use bounce or elastic easing. Ease out with exponential curves only: cubic-bezier(0.16, 1, 0.3, 1) for entrances, ease for micro-interactions.
- **Don't** open modals as the first response to a user action. Exhaust inline and progressive disclosure alternatives first.
