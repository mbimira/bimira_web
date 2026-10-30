---
name: Michael Bimira — Portfolio
description: A portfolio that proves data analytics and applied AI skills through real case studies, rendered as a clean, professional design system.
colors:
  ink: "#1a1a2e"
  accent: "#2563eb"
  accent-hover: "#1d4ed8"
  neutral-bg: "#ffffff"
  neutral-surface: "#f8fafc"
  neutral-border: "#e5e7eb"
  neutral-text-muted: "#6b7280"
  neutral-text-body: "#374151"
  neutral-text-light: "#9ca3af"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.5px"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(13px, 1.4vw, 16px)"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  hero:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-1px"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
spacing:
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-outline:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.accent}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  contact-link:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.accent}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  project-card:
    backgroundColor: "{colors.neutral-bg}"
    borderColor: "{colors.neutral-border}"
    rounded: "{rounded.lg}"
    padding: "24px"
  skill-tag:
    backgroundColor: "#eff6ff"
    textColor: "{colors.accent-hover}"
    rounded: "{rounded.lg}"
    padding: "6px 14px"

# Design System: Bimira The Analyst

## Overview

**Creative North Star: "Clean, professional, data-first"**

A clean, light-themed portfolio that presents data analytics and applied AI work in a professional, approachable format. The design uses a white ground with deep navy text, blue accents, and generous spacing — inspired by modern data analytics portfolios like Alex The Analyst. Content comes first: case studies, skills, and contact information are presented clearly without decorative distraction.

**Key Characteristics:**
- Deep navy (#1a1a2e) primary text on white (#ffffff) ground
- Blue (#2563eb) accent for actions and links
- Clean sans-serif typeface throughout
- Light surface backgrounds (#f8fafc) for section separation
- Border-radius 12px for cards and containers
- Generous spacing with 8px baseline grid

## Colors

**Primary — Deep Navy (#1a1a2e):** Used for headings, body text, and primary emphasis. The darkest value in the system.

**Accent — Blue (#2563eb):** Used for primary actions, links, skill tags, and section borders. The brand color.

**Neutral — White (#ffffff):** Body background and card surfaces.

**Neutral — Light Surface (#f8fafc):** Section backgrounds and subtle section separation.

**Neutral — Border (#e5e7eb):** Card borders, dividers, and input borders.

**Neutral — Text Muted (#6b7280):** Secondary text, captions, and metadata.

**Neutral — Text Body (#374151):** Paragraph text and supporting content.

**Named Rules:**
**The Blue Accent Rule.** Blue (#2563eb) is the only chromatic accent used for actions and emphasis. It appears on buttons, links, skill tags, and section borders — never on body text or backgrounds.

**The Clean Surface Rule.** Every surface is either white (#ffffff) or light surface (#f8fafc). No gradients, no glass, no decorative textures.

## Typography

**Display Font:** System sans-serif (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial) — used for headings and the product name.

**Body Font:** System sans-serif — used for paragraphs, case study text, and supporting content.

**Label Font:** System sans-serif — used for tracked uppercase labels, skill tags, and section kickers.

**Character:** A single sans-serif face throughout. Hierarchy is established through size, weight, and letter spacing — not through font mixing.

### Hierarchy

- **Display** (800, clamp(2.25rem, 4vw, 3rem), line-height 1.1, -0.5px letter-spacing): Product name and major section headings.
- **Hero** (800, 3rem, line-height 1.1, -1px letter-spacing): Hero section headline.
- **Body** (400, clamp(13px, 1.4vw, 16px), line-height 1.7): Case study text, about text, contact content.
- **Label** (700, 0.85rem, line-height 1, +0.05em letter-spacing, uppercase): Section kickers, skill tags, project tags, contact labels.

## Layout

The homepage uses a single-column layout with a sticky header, hero section, about section, projects section, and contact section. Below-the-fold sections use full-width background bands alternating between white and light surface (#f8fafc).

**Spacing rhythm:** 8px baseline grid. Tight groups within cards (padding 24px), generous separation between sections (padding 100px top/bottom).

**Responsive:** Single column on all screen sizes. Header collapses to hamburger menu on mobile (below 768px). Hero text scales fluidly.

## Elevation & Depth

No shadows are used for depth. Depth is conveyed through borders (#e5e7eb), background layering (white cards on light surface), and subtle hover transforms (translateY -4px on cards).

**Shadow Vocabulary:** None. Flat, tonal system.

## Shapes

**Corner Strategy:** 12px border-radius on cards and containers — rounded but not pill-shaped. 8px on smaller elements.

**Borders:** 1px #e5e7eb on cards, buttons, and inputs. 3px #2563eb on section heading accents.

**Clipping:** None.

## Components

### Buttons

**Primary:** Background #2563eb, text #ffffff, 8px radius, padding 10px 20px, font-weight 600.

**Outline:** Background transparent, border 1px #2563eb, text #2563eb, 8px radius, padding 10px 20px.

**Hover:** Primary darkens to #1d4ed8; outline fills to #eff6ff.

### Contact Links

Block-level links with left icon, 12px padding, 1px #e5e7eb border, 12px radius. Hover fills to #eff6ff.

### Project Cards

White background, 1px #e5e7eb border, 16px radius, 24px padding. Hover brightens border to #2563eb and lifts slightly.

### Skill Tags

Light blue background (#eff6ff), blue text (#1d4ed8), 1px #bfdbfe border, 20px radius, padding 6px 14px.

### Signature Component: Hero Section

Light blue-gray gradient background (#f8fafc to #eff6ff), centered content, large display typography, two primary actions (View My Work primary, About Me outline).

## Do's and Don'ts

### Do:

- **Do** use blue (#2563eb) as the only chromatic accent, used sparingly for actions and emphasis.
- **Do** use system sans-serif fonts — no custom web fonts, no mixed typography.
- **Do** keep generous whitespace — cards and sections have ample breathing room.
- **Do** use light surface backgrounds (#f8fafc) for section separation, never gradients or textures.
- **Do** label all demonstration data as real; no fabricated metrics.

### Don't:

- **Don't** use dark themes, neon accents, or glowing effects.
- **Do not** use custom web fonts or mixed font families — one system sans-serif face.
- **Don't** use glassmorphism, blur, or gradient backgrounds.
- **Don't** use hard offset shadows — depth comes from borders and background layering.
- **Don't** use same-size cards of icon-plus-heading-plus-text as the only page structure.
