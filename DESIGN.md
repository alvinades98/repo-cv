---
name: Alvin Ade Portfolio
description: Personal portfolio for a full-stack developer, styled like a print shop. Cream paper, thick ink borders, hard offset shadows.
colors:
  coral: "#f1664f"
  lime: "#b7e779"
  violet: "#7062df"
  coral-text: "#aa3525"
  lime-text: "#426622"
  paper: "#f7f1e6"
  surface: "#fffdf8"
  ink: "#211f1c"
  ink-muted: "#5b5750"
  dark-paper: "#201e22"
  dark-surface: "#302d32"
  dark-ink: "#fff7ec"
  dark-ink-muted: "#c4bcb0"
  dark-coral: "#ff806a"
  dark-lime: "#c5f28a"
  dark-violet: "#9a8dff"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2rem, 6.5vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.075em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.8rem, 6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Space Mono, monospace"
    fontSize: "0.68rem"
    fontWeight: 700
    letterSpacing: "0.12em"
rounded:
  tag: "3px"
  card: "4px"
spacing:
  card-sm: "20px"
  card: "32px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "12.8px 19.2px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "12.8px 19.2px"
    height: "48px"
  section-tag:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "5.6px 10.4px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  tech-chip:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "4px 10px"
---

# Design System: Alvin Ade Portfolio

## Overview

**Creative North Star: "The Print Shop"**

The page is a sheet of cream paper with everything stamped or pasted onto it. Every object has a thick ink border and a hard offset shadow with no blur, so its depth reads like a cut-out raised off the paper. Colour is used as flat blocks (coral, lime, violet), like risograph ink, never gradients. Type is a grotesk set tight and heavy, paired with monospace labels that read like printed captions.

Interactions should feel physical and solid. Hovering lifts an object, so its shadow grows. Pressing pushes it into its shadow until the shadow is gone. Motion follows the same physics: objects are set down onto the paper, and solid blocks sweep across words before the words appear.

**Key Characteristics:**
- Paper background with a 22px dot grid.
- 2–3px ink borders, 3–4px corners, offset shadows with zero blur.
- Three flat accents (coral, lime, violet), always with dark ink text, never white.
- Space Grotesk 700 with tight tracking for headings; Space Mono for labels.
- Light and dark themes with the same structure. Only the paper, ink and accent brightness change.

## Colors

Three flat accents on cream paper and dark ink, as if printed in limited inks.

### Primary
- **Stamp Coral** (#f1664f): the primary button, the contact panel, the accent word in section headings, and icon tiles. The colour of action and urgency.

### Secondary
- **Riso Lime** (#b7e779): section tags, the hero terminal, tech chips, and the hover state of the primary button. The colour of labels and system status.

### Tertiary
- **Press Violet** (#7062df): the hero accent ("Portfolio."), company names on the timeline, the journey border, and the focus ring. Used sparingly as a third accent.

### Neutral
- **Cream Paper** (#f7f1e6): the page background and the navbar.
- **Card Stock** (#fffdf8): the surface of cards and controls.
- **Press Ink** (#211f1c): text, all borders, and every shadow.
- **Faded Ink** (#5b5750): secondary text, corner labels, and captions.
- **Readable Coral / Lime** (#aa3525 / #426622): accent versions for text on paper, for AA contrast.

### Named Rules
**The Dark Ink Rule.** Text on an accent surface (coral, lime, violet) is always Press Ink (#211f1c), including in dark mode. Never put white text on an accent.

**The Flat Ink Rule.** Colour is applied as solid blocks. No gradients, glows or transparency on accents.

## Typography

**Display Font:** Space Grotesk (with sans-serif)
**Label/Mono Font:** Space Mono (with monospace)

**Character:** A heavy, tightly set grotesk paired with a monospace that reads like a technical caption. The pairing makes the site feel like an engineer's zine.

### Hierarchy
- **Display** (700, clamp(2rem, 6.5vw, 6rem), 1.04, uppercase, -0.075em): the hero title only.
- **Headline** (700, clamp(1.8rem, 6vw, 4rem), 1.0): section headings, two lines; the second line is a coral accent word.
- **Title** (700, 1.25–1.5rem): card titles and timeline roles.
- **Body** (400–500, 0.875–1.125rem, 1.7): descriptions, at most about 580px wide.
- **Label** (Space Mono 700, 0.6–0.7rem, 0.12–0.2em, uppercase): tags, corner indices ("01 / FE"), nav links, and metadata.

### Named Rules
**The Caption Rule.** Every piece of metadata (indices, years, tags, statuses) is set in uppercase Space Mono. Space Grotesk is reserved for content.

## Layout

Containers are centred: up to 1200px for the hero and contact section, 1300px for about, 1400px for portfolio. Side padding is 24px on mobile and 48px on desktop, and sections are spaced 96px apart vertically. Grids are 1 → 2 → 4 columns for skills and 1 → 2 → 3 for projects. The hero is two columns (1.4fr / 1fr) on desktop; the tilted card art is hidden below 1024px. The career timeline runs down a centre spine on desktop and a left spine on mobile.

## Elevation & Depth

Depth comes only from hard offset shadows in the ink colour (`Npx Npx 0`, no blur). Shadow size shows height: small for tags, medium for cards, large for the hero art and contact panel. Shadows always fall to the bottom right.

### Shadow Vocabulary
- **Pin** (`box-shadow: 3px 3px 0 #211f1c`): tags, the logo, controls, icon tiles.
- **Button** (`box-shadow: 5px 5px 0 #211f1c`): buttons at rest.
- **Card** (`box-shadow: 6px 6px 0 #211f1c`): cards at rest; 9px on hover.
- **Slab** (`box-shadow: 10px 10px 0 #211f1c`): the hero art and contact panel.

### Named Rules
**The Shadow Physics Rule.** A lift makes the shadow larger. A press moves the object toward its shadow until the shadow reaches 0. Never use a blurred shadow.

## Shapes

Nearly square corners: 3px for tags and chips, 4px for cards, buttons and controls. Borders are 2px on components and 3px on large slabs (hero art, contact panel, loading card). Small square markers (8px with a 1px ink border) stand in for bullets. Hero art cards are rotated (4° and -6°) like pasted photos.

## Components

### Buttons
- **Shape:** nearly square (4px), 2px ink border, minimum height 48px (44px on mobile).
- **Primary:** Stamp Coral with Press Ink text, Space Grotesk 700, 0.8rem, uppercase, 0.08em tracking.
- **Hover / Focus:** moves 3px toward its shadow (5px shadow → 2px) and changes to lime. Focus shows a 3px violet outline offset by 3px.
- **Active:** moves 5px; the shadow disappears.
- **Secondary:** Card Stock background, same behaviour.

### Chips
- **Style:** Riso Lime, 1.5px ink border, 3px corners, Space Mono 10–11px. Used for tech stacks on projects and the timeline.

### Cards / Containers
- **Corner Style:** 4px.
- **Background:** Card Stock; the contact panel uses Stamp Coral.
- **Shadow Strategy:** Card (6px) at rest, 9px with a 4px lift on hover.
- **Border:** 2px Press Ink.
- **Internal Padding:** 20px on mobile, 32px on desktop.

### Navigation
- **Style:** fixed bar on Cream Paper with a 2px bottom border and a 3px shadow. Logo in a lime box. Links in Space Mono 0.68rem uppercase, Faded Ink. The active link gets a 3px coral underline that draws in from the left.
- **Mobile:** a 44px menu button opens a Card Stock panel under the bar.

### Section Tag (signature)
A small lime label in uppercase Space Mono with a 3px shadow, placed above every section heading ("CORE SYSTEMS", "EXPERIENCE LOG").

## Do's and Don'ts

### Do:
- **Do** give every raised object a 2px ink border and an offset shadow with no blur.
- **Do** keep text on accent surfaces in Press Ink (#211f1c).
- **Do** set metadata in uppercase Space Mono with wide tracking.
- **Do** animate with the shadow physics: set objects down onto the paper, press them into their shadow.

### Don't:
- **Don't** use blurred shadows, glows, gradients or glassmorphism.
- **Don't** use large corner radii (more than 4px) or pill shapes.
- **Don't** add a fourth accent colour beyond coral, lime and violet.
- **Don't** put white text on an accent.
