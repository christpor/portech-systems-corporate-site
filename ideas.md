# PorTech Systems — Design Direction

## Three visual approaches considered

### 1. Cobalt Signal Architecture

**Very Brief Intro:** A dark, editorial enterprise interface where cobalt carries signal, silver carries structure, and the visual language evokes disciplined infrastructure rather than consumer futurism.

**Probability:** 0.07

### 2. Institutional Lightfield

**Very Brief Intro:** A pale silver corporate environment with fine black typography, measured cobalt emphasis, and airy information density inspired by annual reports and research publications.

**Probability:** 0.04

### 3. Industrial Meridian

**Very Brief Intro:** A warm graphite-and-aluminum technical identity with engineering-chart proportions, sharp modular panels, and cobalt used only for selected operational states.

**Probability:** 0.09

## Chosen approach: Cobalt Signal Architecture

### Design Movement

The site will translate **Swiss International Typographic Style** into a contemporary enterprise-technology setting. It will use asymmetry, a disciplined baseline rhythm, modular information bands, and controlled negative space to convey rigor and confidence.

### Core Principles

1. **Signal over spectacle:** Cobalt appears only where a decision, status, or action should be read immediately.
2. **Architectural hierarchy:** Information lives in carefully aligned horizontal bands, editorial columns, and graduated surface depths rather than anonymous, uniformly rounded cards.
3. **Evidence made visible:** Numeric markers, data traces, labels, rules, and metadata are treated as first-class visual material.
4. **Calm technical precision:** Every interaction, line, shadow, and transition feels measured, quiet, and built for a discerning enterprise audience.

### Color Philosophy

The charcoal foundation signals permanence and operational depth. Silver and cool gray create legible structure without the starkness of pure white. **Cobalt blue** is the site’s reserved signal current: it focuses attention on active states, key data, and calls to action, rather than operating as broad decoration. Icy blue is used sparingly for luminous contrast in data motifs.

### Layout Paradigm

The main layout uses a **signal spine**: a narrow left-side editorial rail on wide screens that grounds the page in indexed sections and visual markers, while content flows through offset wide and narrow columns. Hero and feature sections shift their anchoring points instead of repeating centered blocks. On smaller screens, the rail collapses into a concise horizontal index.

### Signature Elements

1. A low-contrast **coordinate field** of crisp horizontal and vertical rules that tracks across the site’s darkest surfaces.
2. **Signal blocks**: cobalt bracket marks, index numbers, and data dots that introduce significant headings and active navigation.
3. **Silverline frames**: precise 1-pixel panel divisions and stepped corner cuts that differentiate feature panels from generic rounded cards.

### Interaction Philosophy

Interactions should feel like interrogating a well-made technical instrument. Hover states reveal a concise line of context, selection states visibly accumulate, and results update decisively. The system favors clear state changes over decorative animation.

### Animation

Motion uses opacity and transform only. Small groups may enter with 40–60 ms staggering and a 220 ms cubic-bezier ease-out. Product selections and filter changes respond instantly; dialogs and global search can use a controlled 240 ms fade-and-rise from `scale(0.97)`. All nonessential motion is disabled when `prefers-reduced-motion` is enabled.

### Typography System

**Space Grotesk** will provide high-contrast display headings, product labels, numerals, and navigation. **IBM Plex Sans** will serve as the readable body face and metadata system. Headings use tight tracking and decisive size changes; body content uses relaxed leading; dense data labels use uppercase, tracked, small text with tabular numerals where appropriate.

### Brand Essence

**PorTech Systems is the decision infrastructure for organizations that cannot afford uncertainty.**

Personality: **assured, analytical, exacting**.

### Brand Voice

Headlines are concise, declarative, and operationally focused. Calls to action use specific verbs, while microcopy clarifies the decision or destination rather than filling space.

Example headline: “Make critical systems legible.”

Example CTA: “Compare the platform”

### Wordmark & Logo

The mark is a cobalt **P-shaped signal path**: a geometric monogram that begins as an open square trace and resolves into an upward-facing port/arrow. It is paired with a custom letter-spaced PorTech Systems wordmark in Space Grotesk, but the symbol remains recognizable at favicon scale.

### Signature Brand Color

**Signal Cobalt — #185CFF**

## Style Decisions

1. The initial experience is intentionally dark to emphasize cobalt signal states and enterprise gravity.
2. No generic stock imagery will be used in place of meaningful visual storytelling; prominent assets will be purpose-made brand abstractions with intentional text-safe space.
3. Surface radii remain small and selective, with silverline rules and stepped corners carrying most of the visual structure.
4. Content described as illustrative will be presented as demo material until replaced with approved PorTech source content.
5. **Cobalt rule:** Signal Cobalt `#185CFF` appears only on primary actions, active states, selected items, key numerals, and compact signal markers; broad cobalt fields are reserved for rare, decisive brand moments.
6. **Layout rule:** Every major page exposes a signal-spine behavior through an indexed rail, offset column, evidence band, or table-like structure; pages do not resolve into only centered heroes plus equal cards.
7. **Motif rule:** Coordinate fields, bracket marks, data dots, and silverline divisions recur across dark surfaces as the PorTech visual grammar; generic rounded SaaS cards are avoided.
