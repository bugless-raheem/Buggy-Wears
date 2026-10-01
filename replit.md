# Buggy Wears

A premium, mobile-first brand landing page for Buggy Wears, built around a scroll-reactive WebGL fabric scene and a local fashion lookbook.

## Run & Operate

- `pnpm --filter @workspace/buggy-wears run dev` — run the landing page
- `pnpm --filter @workspace/buggy-wears run build` — build the static site
- No backend, database, or secrets are required by this artifact.

## Stack

- pnpm workspace, Vite, vanilla JavaScript (no React)
- Three.js 0.160.0, GSAP 3.12.7, Lenis 1.1.18
- postprocessing 6.36.4 (peer range includes Three.js 0.160.0)
- Google Fonts: Cormorant Garamond and Inter

## Where things live

- `artifacts/buggy-wears/src/content.js` — placeholder copy and local image references
- `artifacts/buggy-wears/src/style.css` — visual tokens and responsive styling
- `artifacts/buggy-wears/src/scene/` — upcoming WebGL fabric scene modules

## Architecture decisions

- The user explicitly removed the 3D logo from scope. The 3D fabric is the interactive WebGL centerpiece; the supplied SVG may only appear as a flat logo.
- Follow the brief's staged review process: complete one stage, provide exact preview checks, and wait for user feedback before advancing.

## Product

A single-page brand showcase, not a shop. Do not add products, pricing, carts, checkout, accounts, backend forms, or tracking.

## User preferences

- Keep the experience fun, premium, and restrained, with scroll-reactive fabric and the exact green/ivory/near-black palette in the build brief.

## Gotchas

- The supplied seven photos are fashion/lifestyle shots, not textile macro photos. The current fabric texture/detail references are temporary crops and should be replaced with real fabric photography before launch.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
