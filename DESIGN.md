---
name: Michael Bimira — Portfolio
description: A portfolio that proves data analytics and applied AI skills through real case studies, rendered as a CRT oscilloscope signal bench.
colors:
  phosphor-green: "#0f0"
  amber: "#ffa500"
  graticule-gray: "#c0c0b0"
  near-black: "#060604"
  crt-screen: "#0a0a08"
  bezel-border: "#14140e"
  element-border: "#1a1a12"
  dim-trace: "#8fff8f"
  subtitle-muted: "#8a8a70"
  title-white: "#ffffff"
  body-text: "#e8e8e0"
typography:
  display:
    fontFamily: "'Courier New', Courier, monospace"
    fontSize: "clamp(32px, 6vw, 56px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-1px"
    textTransform: "uppercase"
  body:
    fontFamily: "'Courier New', Courier, monospace"
    fontSize: "clamp(13px, 1.4vw, 16px)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Courier New', Courier, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.4px"
    textTransform: "uppercase"
  instrument:
    fontFamily: "'Courier New', Courier, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "1px"
    textTransform: "uppercase"
rounded:
  sm: "4px"
  md: "8px"
  circle: "50%"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  knob:
    backgroundColor: "{colors.crt-screen}"
    textColor: "{colors.phosphor-green}"
    rounded: "{rounded.circle}"
    padding: "0"
    size: "42px"
  knob-active:
    backgroundColor: "{colors.crt-screen}"
    textColor: "{colors.phosphor-green}"
    rounded: "{rounded.circle}"
    padding: "0"
    size: "42px"
  trace-primary:
    textColor: "{colors.phosphor-green}"
  trace-dim:
    textColor: "{colors.dim-trace}"
  readout-primary:
    textColor: "{colors.title-white}"
  readout-accent:
    textColor: "{colors.amber}"

# Design System: Michael Bimira — Portfolio

## Overview

**Creative North Star: "The Signal Bench"**

A portfolio that works like a CRT oscilloscope signal bench: case studies are signals plotted on a ten-division graticule, results appear as phosphor-green traces and amber readouts, and navigation is a row of instrument knobs. The visitor decides within seconds whether the work is real — the mechanism (measurement, traces over time, graticule structure) is the product's own vocabulary, not a borrowed SaaS template.

The aesthetic is dark, measured, and instrument-like. Density is low in the first viewport (one screen, many signals) and rises in the scrollable sections below. Motion is a single continuous sweep line, not scattered hover effects. Every surface belongs to the CRT world: the graticule is the ground, phosphor is the accent, amber marks state.

**Key Characteristics:**
- Phosphor green (#0f0) primary on near-black (#060604) ground
- Amber (#ffa500) for readouts and actions
- Graticule gray (#c0c0b0) for secondary labels and measurement markings
- Courier New monospace throughout — instrument caps for display, tracked labels for data
- Ten-division graticule as the spatial armature
- One continuous sweep line as the only motion

## Colors

**Primary — Phosphor green (#0f0):** Used for title text, active traces, active knob borders, the sweep line, and the readout-value highlight. This is the screen's active ink — it never exceeds ~15% of any given screen.

**Secondary — Amber (#ffa500):** Used for readout labels, the contact button border and text, and power-state indicators. Amber marks state changes and actions; it is never used for body text.

**Neutral — Graticule gray (#c0c0b0):** Used for graticule labels, inactive knob borders, secondary text, and measurement markings. Provides contrast against the near-black ground without competing with phosphor.

**Neutral — Near-black (#060604):** Body background. The darkest value in the system; everything else is drawn on top of it.

**Neutral — CRT screen (#0a0a08):** Panel background inside the bezel. Slightly lighter than the body ground so the screen reads as a recessed surface.

**Neutral — Body text (#e8e8e0):** Soft off-white for long-form body copy (value proposition, case study paragraphs, about text). Higher contrast than graticule gray for readability at paragraph scale.

**Named Rules:**
**The One Voice Rule.** Phosphor green is the only chromatic accent on any given screen. Amber is reserved for readouts and actions; everything else is gray, white, or black. This rarity is the point.

**The Ground Rule.** Every surface is either near-black (body), CRT screen (#0a0a08, recessed panels), or phosphor/amber (ink). No gradients, no glass, no tinted overlays.

## Typography

**Display Font:** Courier New (with Courier, monospace fallback) — monospace instrument caps, used for the product name and section headings.

**Body Font:** Courier New (with Courier, monospace fallback) — monospace, used for case study descriptions and readout values.

**Label/Mono Font:** Courier New (with Courier, monospace fallback) — tracked uppercase, used for knob labels, trace labels, graticule markings, and metadata.

**Character:** A single monospace face throughout. The instrument character comes from tracking, case, and scale — not from mixing families. The display is large and tight-tracked (-1px); labels are small and wide-tracked (+0.4px to +1px).

### Hierarchy

- **Display** (700, clamp(32px, 6vw, 56px), line-height 1, -1px letter-spacing): Product name and section headings. Appears top-left of the CRT screen and as section headers below.
- **Title** (400, clamp(13px, 1.4vw, 16px), line-height 1.4): Case study titles within traces. Bold weight within the trace.
- **Body** (400, clamp(13px, 1.4vw, 16px), line-height 1.5): Case study problem/data/method/result text. Max measure ~75ch.
- **Label** (400, 11px, line-height 1, +0.4px letter-spacing, uppercase): Graticule markings, trace labels, case metadata.
- **Instrument** (400, 12px, line-height 1, +1px letter-spacing, uppercase): Knob navigation labels.

**Named Rule:**
**The Mono-Only Rule.** One font family, one source. No display serif, no system sans, no mixed typography. The monospace face carries the entire voice.

## Layout

The first viewport is a CRT display filling the viewport (min-height 100vh), with the graticule as ground and phosphor traces as content. Below it, a single-column scrollable page wraps case studies, about, and contact sections at max-width 1000px.

The graticule is a ten-by-ten division grid rendered as hairline linear-gradient layers, fixed at 64px cell size. All content is measured against this grid: traces align to divisions, readouts sit at measured positions, the title anchors top-left.

**Spacing rhythm:** More space above a heading than below it (headings have margin-bottom only). Tight groups within case cards (padding 24px), generous separation between sections (margin-bottom 64px).

**Responsive:** At widths below 640px, the CRT bezel narrows to 92vw with reduced height, traces stack with tighter gaps, knob font reduces to 11px, and the readout stack becomes vertical. The graticule cell size stays fixed at 64px; fewer divisions are visible on narrow screens.

## Elevation & Depth

No shadows are used for depth. Depth is conveyed through layering: the body ground (#060604) is the furthest plane, the CRT screen (#0a0a08) sits on top, the bezel border (#14140e) frames it, and phosphor/amber ink is the topmost layer. The inset shadow on the bezel creates a recessed-screen effect without colored halos.

**Shadow Vocabulary:** None. This is a flat, tonal system — depth comes from value contrast and border definition, not from drop shadows.

## Shapes

**Corner Strategy:** The CRT bezel is rounded (8px radius) to read as a physical instrument casing. Knobs are full circles (50% radius) to read as detented controls. Case cards have sharp corners with hairline borders — they are documents, not containers.

**Borders:** 10px bezel border (#14140e), 2px screen border (#1a1a12), 2px knob borders (#c0c0b0), 1px case card borders (#1a1a12), 1px contact button border (#ffa500). No colored borders above 1px on cards or list items.

**Clipping:** No clip-path masks, no geometric cutouts. The sweep line is a full-height 2px element, not a masked reveal.

## Components

### Buttons / Knobs

**Shape:** Circular (50% radius), 42×42px (36×36px on mobile).

**Primary:** Background #0a0a08, border 2px #c0c0b0, text #0f0 at 12px tracked uppercase. Active state adds phosphor glow (box-shadow 0 0 14px rgba(15,255,0,0.4)) and border color #0f0.

**Hover / Focus:** Border color brightens to #0f0; active knobs gain phosphor glow shadow. Focus rings are not separately themed — the knob's own border serves as focus indication.

**Secondary / Ghost:** None. All navigation is knob-based.

### Traces

**Style:** Phosphor green (#0f0) primary channel, dimmer green (#8fff8f) secondary channel. Monospace at 13-16px with trace-label prefix (11px, tracked). Traces animate in with a fade-and-slide; they are not interactive elements.

### Readouts

**Style:** Two-column readout panel. Primary readout (#fff text with #0f0 value at 1.6em), secondary readout (#ffa500 text). Tabular numerals for values.

### Cards / Containers

**Corner Style:** Sharp (no radius) on case cards.

**Background:** #0a0a08 (CRT screen color).

**Shadow Strategy:** None — flat cards with hairline borders.

**Border:** 1px solid #1a1a12.

**Internal Padding:** 24px (lg spacing scale).

### Navigation

Knob row centered below the CRT screen: four circular knobs (view work, case studies, about, contact). Active knob is highlighted with phosphor border and glow. Clicking a knob switches the visible page section and freezes/releases the sweep line (trigger behavior).

### Signature Component: CRT Graticule

A ten-division graticule rendered as tiled linear-gradient hairlines (64px cells, #3a3a30 at 35% opacity) covering the CRT screen. Graticule labels (0.0–0.8 on Y axis, Q1–Q4 on X axis) in #c0c0b0 at 11px. This is the spatial armature — all content is measured against it.

## Do's and Don'ts

### Do:

- **Do** use phosphor green (#0f0) as the only chromatic accent, capped at ~15% screen coverage per the One Voice Rule.
- **Do** measure all content against the ten-division graticule; the grid is the spatial armature, not decoration.
- **Do** keep motion to a single continuous sweep line; no scattered hover effects or per-section entrances.
- **Do** use Courier New monospace for everything — display, body, and labels — differentiated by size, weight, and tracking only.
- **Do** label all demonstration data as synthetic; no invented commercial claims.

### Don't:

- **Don't** use a kicker or eyebrow above any heading — the heading carries its own weight (this is a ban, not a default).
- **Don't** use gradient text, glass/blur decoration, or colored border-left/right above 1px on cards.
- **Don't** use hard offset shadows (4px 4px 0) — this is not a neobrutalist world.
- **Don't** use system display faces or mixed font families; Courier New is the only face.
- **Don't** use same-size cards of icon-plus-heading-plus-text as page structure.
