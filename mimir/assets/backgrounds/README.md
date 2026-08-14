# Mimir well chapter backgrounds

The homepage background system is configured in `mimir/scripts/chapters.js`.

## Source and web sizes

- Desktop artwork master: approximately **3840 × 2400**
- Mobile artwork master: approximately **1440 × 2560**
- Do not serve the source PNG masters directly.
- Export compressed AVIF first, with WebP alternatives if browser testing shows they are needed.
- Keep dark and illuminated artwork perfectly aligned so they can cross-fade without visual movement.

## File map

Each chapter expects four AVIF files:

| Chapter | Desktop dark | Desktop lit | Mobile dark | Mobile lit |
| --- | --- | --- | --- | --- |
| 01 Entrance | `01-hero-dark.avif` | `01-hero-lit.avif` | `01-hero-dark-mobile.avif` | `01-hero-lit-mobile.avif` |
| 02 Product | `02-product-dark.avif` | `02-product-lit.avif` | `02-product-dark-mobile.avif` | `02-product-lit-mobile.avif` |
| 03 Connected worldbuilding | `03-connected-dark.avif` | `03-connected-lit.avif` | `03-connected-dark-mobile.avif` | `03-connected-lit-mobile.avif` |
| 04 Mimir AI and truth | `04-wisdom-dark.avif` | `04-wisdom-lit.avif` | `04-wisdom-dark-mobile.avif` | `04-wisdom-lit-mobile.avif` |
| 05 Proving Grounds | `05-proving-dark.avif` | `05-proving-lit.avif` | `05-proving-dark-mobile.avif` | `05-proving-lit-mobile.avif` |
| 06 Migration | `06-migration-dark.avif` | `06-migration-lit.avif` | `06-migration-dark-mobile.avif` | `06-migration-lit-mobile.avif` |
| 07 Collaboration | `07-collaboration-dark.avif` | `07-collaboration-lit.avif` | `07-collaboration-dark-mobile.avif` | `07-collaboration-lit-mobile.avif` |
| 08 Worldbuilders | `08-worldbuilders-dark.avif` | `08-worldbuilders-lit.avif` | `08-worldbuilders-dark-mobile.avif` | `08-worldbuilders-lit-mobile.avif` |
| 09 Ownership | `09-ownership-dark.avif` | `09-ownership-lit.avif` | `09-ownership-dark-mobile.avif` | `09-ownership-lit-mobile.avif` |
| 10 Pricing | `10-pricing-dark.avif` | `10-pricing-lit.avif` | `10-pricing-dark-mobile.avif` | `10-pricing-lit-mobile.avif` |
| 11 FAQ | `11-faq-dark.avif` | `11-faq-lit.avif` | `11-faq-dark-mobile.avif` | `11-faq-lit-mobile.avif` |
| 12 Bottom water | `12-bottom-dark.avif` | `12-bottom-lit.avif` | `12-bottom-dark-mobile.avif` | `12-bottom-lit-mobile.avif` |

## Enabling a chapter

1. Add all four files for that chapter to this directory.
2. Open `mimir/scripts/chapters.js`.
3. Find the matching chapter object.
4. Change `assetReady: false` to `assetReady: true`.
5. Tune `focalDesktop` and `focalMobile` using CSS `background-position` values such as `48% 35%`.
6. Test the dark-to-lit alignment at desktop, laptop, tablet and narrow mobile sizes.

The script only preloads the current chapter and its immediate neighbours. Chapters whose `assetReady` value remains false use the built-in neutral depth gradients and do not request missing files.

## Roadmap backgrounds

The Roadmap uses the same shared Well controller with its own data in
`mimir/scripts/roadmap-chapters.js`. Final Roadmap artwork belongs in the
dedicated `mimir/assets/backgrounds/roadmap/` directory and uses five phases:

| Phase | Desktop dark | Desktop lit | Mobile dark | Mobile lit |
| --- | --- | --- | --- | --- |
| 01 Current | `01-current-dark.avif` | `01-current-lit.avif` | `01-current-dark-mobile.avif` | `01-current-lit-mobile.avif` |
| 02 Public beta | `02-beta-dark.avif` | `02-beta-lit.avif` | `02-beta-dark-mobile.avif` | `02-beta-lit-mobile.avif` |
| 03 Refinement | `03-refinement-dark.avif` | `03-refinement-lit.avif` | `03-refinement-dark-mobile.avif` | `03-refinement-lit-mobile.avif` |
| 04 Expansion | `04-expansion-dark.avif` | `04-expansion-lit.avif` | `04-expansion-dark-mobile.avif` | `04-expansion-lit-mobile.avif` |
| 05 Horizon | `05-horizon-dark.avif` | `05-horizon-lit.avif` | `05-horizon-dark-mobile.avif` | `05-horizon-lit-mobile.avif` |

Use the same source-master guidance as the homepage: approximately 3840 × 2400
for desktop and 1440 × 2560 for mobile, exported to compressed web formats.
Keep each dark/lit pair perfectly aligned. Set `assetReady: true` for a phase
only after all four files exist, then tune its desktop and mobile focal points
in `roadmap-chapters.js`.

## Features backgrounds

The comprehensive Features page uses the same controller with eight disciplines
configured in `mimir/scripts/features-chapters.js`. Its 32 future AVIF filenames
and enablement instructions are documented in
`mimir/assets/backgrounds/features/README.md`.
