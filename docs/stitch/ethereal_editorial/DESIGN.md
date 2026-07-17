---
name: Ethereal Editorial
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d4'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ed'
  surface-container: '#f5ece7'
  surface-container-high: '#efe6e2'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#504347'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efea'
  outline: '#837378'
  outline-variant: '#d5c2c7'
  surface-tint: '#854e64'
  primary: '#69364b'
  on-primary: '#ffffff'
  primary-container: '#844d63'
  on-primary-container: '#ffc9dc'
  inverse-primary: '#f9b3cc'
  secondary: '#4b5a9c'
  on-secondary: '#ffffff'
  secondary-container: '#a6b5fd'
  on-secondary-container: '#354585'
  tertiary: '#454646'
  on-tertiary: '#ffffff'
  tertiary-container: '#5d5e5d'
  on-tertiary-container: '#d8d8d7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e5'
  primary-fixed-dim: '#f9b3cc'
  on-primary-fixed: '#360b20'
  on-primary-fixed-variant: '#69374c'
  secondary-fixed: '#dde1ff'
  secondary-fixed-dim: '#b8c4ff'
  on-secondary-fixed: '#001354'
  on-secondary-fixed-variant: '#334282'
  tertiary-fixed: '#e3e2e1'
  tertiary-fixed-dim: '#c7c6c5'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464746'
  background: '#fff8f5'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  glass-padding: 32px
---

## Brand & Style

This design system embodies a premium, editorial aesthetic that balances academic structure with ethereal softness. The brand personality is sophisticated, calm, and intellectually curious, designed to evoke a sense of clarity and prestige.

The visual style is a blend of **Minimalism** and **Glassmorphism**. It utilizes expansive white space and high-end typography typical of luxury publications, while integrating modern digital techniques like frosted-glass surfaces, soft background blurs, and subtle periwinkle-to-lavender gradients. The result is a UI that feels lightweight and luminous, prioritizing content legibility within a dreamlike, atmospheric environment.

## Colors

The palette is anchored by a deep, muted plum (Primary) used for key emphasis and brand-critical typography. This is balanced by a misty periwinkle (Secondary) which appears primarily in soft gradients and background blurs to provide a sense of depth and "air."

The background strategy relies on a warm, off-white (Tertiary) base, rather than pure white, to maintain a soft editorial feel. Gradients should transition subtly from pale lavender to misty blue with low opacity (5-15%) to create the ethereal atmosphere. Neutrals are kept warm and dark, avoiding pure black to prevent visual jarring against the soft pastel environment.

## Typography

The typography system uses a high-contrast pairing to establish an editorial hierarchy. **Libre Caslon Text** serves as the primary display and headline face, providing a literary and authoritative tone. It should be used with tight tracking in large sizes to emphasize its classical proportions.

**Be Vietnam Pro** provides a clean, contemporary counterpoint for body text and functional labels. Its approachable and neutral character ensures high legibility in dense academic content. Labels should frequently utilize uppercase styling with generous letter-spacing to act as clear navigational anchors without competing with the primary serif headlines.

## Layout & Spacing

The design system utilizes a **Fluid Grid** with generous internal padding to create a sense of lightness. On desktop, a 12-column layout is used with wide 64px outer margins to frame the content like a book page. 

Spacing is based on an 8px base unit, but emphasizes "breathing room" over density. Components like cards and sidebars should employ significant internal padding (32px+) to maintain the premium feel. On mobile devices, margins scale down to 20px, and complex multi-column layouts reflow into a single vertical stack, maintaining the signature soft gradients as background fixed elements.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and soft, ambient depth rather than traditional shadows. 

1.  **Base Layer:** Soft lavender/blue gradient mesh background.
2.  **Surface Layer:** Semi-transparent white containers (80-90% opacity) with a `20px` to `40px` backdrop blur. 
3.  **Accent Elevation:** Elements that require focus use an extremely diffused, low-opacity shadow (Color: Primary, Opacity: 8%, Blur: 30px) to simulate a soft "glow" rather than a physical drop shadow.
4.  **Floating Elements:** Small interactive triggers (like "play" or "expand" icons) use a more saturated version of the primary color with a subtle outer glow to stand out against blurred backgrounds.

## Shapes

The shape language is sophisticated and "Rounded." A standard corner radius of `0.5rem` (8px) is applied to most UI components to soften the layout. Larger containers, such as the primary content cards or glass panels, use `1rem` (16px) to emphasize their distinct presence. 

Buttons and interactive chips may occasionally use pill-shaped (full) rounding to contrast against the more structured rectangular forms of the text blocks.

## Components

### Buttons
- **Primary:** Solid Primary color fill with white or light cream text. Pill-shaped.
- **Secondary:** Transparent background with a thin Primary color border (1px) and a subtle backdrop blur.
- **Tertiary/Ghost:** No border, Primary color text, with a slight background tint on hover.

### Cards & Panels
- Constructed using the Glassmorphism style: White fill at 85% opacity, `backdrop-filter: blur(24px)`.
- Borders should be 1px, solid white at 30% opacity to define the edge against gradients.

### Navigation
- Sidebar navigation uses a clean vertical list with "active" indicators represented by a vertical Primary color bar and bolded text.

### Input Fields
- Soft, off-white backgrounds with a 1px border that shifts to Primary on focus. 
- Labels sit above the field in uppercase `label-md` styling.

### Chips & Tags
- Small, pill-shaped elements with a very light Secondary color tint and Primary color text. Used for categories or metadata like "Academic Year."