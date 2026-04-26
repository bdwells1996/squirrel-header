# Squirrel Header

A responsive hero header component built with Next.js, Tailwind CSS, and GSAP-style CSS animations.

## Approach

The priority was a **working, pixel-accurate build first** — responsive layout, correct typography, imagery, and component structure — before layering on motion. Once the site was solid, interactions and transitions were added progressively:

- CSS keyframe animations driven by a `LoadingContext` that gates all motion behind a page-load state
- Staggered entry animations (slide-up text, clip-path image reveal, scale-in button, icon drop)
- An idle bounce loop on the arrow icon after the intro sequence completes
- Hover transitions on interactive elements

This means the UI is always correct at rest and degrades gracefully — the animations enhance rather than depend on each other.

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- **SVGR** — inline SVG imports as React components

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  animations/       # Animation style helpers (delay-based CSS keyframe configs)
  app/              # Next.js App Router entry (layout, page, globals)
  components/
    Header.tsx      # Main hero header
    Nav/            # Navigation bar + mobile menu
    Button.tsx      # Reusable button variants
    Icon.tsx        # SVG icon wrapper
    LoadingScreen.tsx
    SquigglePath.tsx # Decorative SVG path
  context/
    LoadingContext.tsx  # Tracks page load state to trigger animations
  lib/
    animation.ts    # animStyle utility — generates hidden/loaded style objects with delay interpolation
```

## Key Design Decisions

**`animStyle` utility** — rather than scattering inline style objects across components, animation configs are defined once in `src/animations/headerAnims.ts` as named presets. Each preset carries its hidden state (for FOUC prevention) and its active animation string, with `__delay__ms` as a placeholder swapped at call-site. This keeps the component JSX readable and animation timing centralised.

**`LoadingContext`** — a simple boolean context that flips after the loading screen completes. All animated elements read `isLoaded` and switch from their hidden style to their animated style, so nothing plays until the page is ready.
