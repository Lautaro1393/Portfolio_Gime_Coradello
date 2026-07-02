---
name: High-End Editorial Portfolio
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#556500'
  on-secondary: '#ffffff'
  secondary-container: '#cfed3e'
  on-secondary-container: '#596900'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#400011'
  on-tertiary-container: '#f92e62'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#d2f041'
  secondary-fixed-dim: '#b6d321'
  on-secondary-fixed: '#181e00'
  on-secondary-fixed-variant: '#404c00'
  tertiary-fixed: '#ffd9dc'
  tertiary-fixed-dim: '#ffb2ba'
  on-tertiary-fixed: '#400011'
  on-tertiary-fixed-variant: '#910030'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '700'
    lineHeight: 92px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  margin-page: 4rem
  gutter: 1.5rem
  section-gap: 8rem
  editorial-stack: 2rem
---

## Brand & Style

The brand personality is sophisticated, avant-garde, and effortlessly chic. It targets luxury fashion houses, high-end agencies, and editorial directors. The emotional response is one of artistic admiration and professional confidence.

The design style is a hybrid of **Minimalism** and **Editorial Layout**. It leverages the white space found in high-fashion magazines like Vogue or i-D, prioritizing the visual narrative of the photography over UI ornamentation. The aesthetic is clean and structured, but utilizes dynamic, asymmetrical compositions to mirror the energy of urban sessions. Bold, high-contrast imagery is framed by a neutral, museum-like digital environment.

## Colors

The palette is anchored in high-contrast neutrals to allow the photography to remain the focal point.
- **Primary (Noir):** A deep, elegant black used for typography and structural elements.
- **Neutral (Gallery):** A soft, off-white grey that provides a warmer, more sophisticated backdrop than pure white, reminiscent of high-quality paper stock.
- **Accents (Urban Electric):** Vibrant neon lime and hot pink, sampled directly from the urban street-style photography. These are used sparingly for interactive highlights, hover states, and small editorial "pips" to inject a modern, youthful edge into the minimalist framework.

## Typography

The typographic hierarchy relies on the contrast between a classic Serif and a technical Sans-Serif.
- **Headlines:** Use Playfair Display to evoke the heritage of fashion publishing. Large-scale headings should often overlap or sit tightly against images to create a "magazine cover" effect.
- **Body & Metadata:** Hanken Grotesk provides a clean, modern counterpoint. It is used for descriptions, measurements, and contact information, ensuring high legibility even at smaller sizes.
- **Labels:** Uppercase labels with generous letter spacing are used for navigational elements and small categorizations (e.g., "EDITORIAL," "COMMERCIAL").

## Layout & Spacing

The layout uses a **Fluid Editorial Grid** based on a 12-column system for desktop. 

- **Composition:** Avoid center-aligned stacks. Use asymmetrical placement where images span different column counts (e.g., a portrait image spanning 4 columns flanked by a landscape image spanning 7 columns).
- **Whitespace:** Use extreme vertical margins ("Section Gaps") to create a sense of luxury and pace, allowing the viewer to breathe between different photographic series.
- **Mobile:** Transition to a single-column layout with 1.5rem side margins. Maintain the large serif typography but scale it down to ensure text doesn't break awkwardly.

## Elevation & Depth

This system avoids traditional drop shadows in favor of **Tonal Layering** and **Structural Overlaps**.
- **Flat Depth:** Depth is created by z-index layering—text overlapping images or images slightly overlapping each other.
- **Ghost Outlines:** For interactive elements like "View Project," use 1px solid borders without fills to maintain the minimalist aesthetic.
- **Image Treatment:** Use high-quality transitions (fade-in, subtle scale) rather than elevation changes to indicate focus.

## Shapes

The design uses **Sharp (0px)** roundedness. Every image container, button, and input field must have crisp, 90-degree angles. This reinforces the architectural and "high-end" feel of the portfolio, mirroring the sharp lines of editorial photography frames.

## Components

- **Buttons:** Primary buttons are solid black rectangles with white text in `label-caps`. Hover states should trigger the `secondary_color` (Neon Lime) to create a sudden, modern "glitch" of color.
- **Image Cards:** No borders or shadows. Use "bleed" layouts where images extend to the edge of the viewport where appropriate. Captions appear in `label-caps` positioned at the bottom-right or vertically along the side of the image.
- **Navigation:** A minimal top bar. The menu items should use `label-caps` with a 1px underline that appears on hover.
- **Series List:** For the main portfolio index, use large-scale text links that reveal a thumbnail image on hover, creating an interactive, fast-paced browsing experience.
- **Contact Form:** Ultra-minimalist. 1px bottom-border only for inputs, with labels floating above in `label-caps`.