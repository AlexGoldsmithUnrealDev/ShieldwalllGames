---
name: mimir-design
description: Use this skill to generate well-branded interfaces and assets for Mimir, Shield Wall Games, and Ashborn: Halls of Saga, either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Voice: scholar's atelier — warm darks, vellum, ember, oxblood, frost. Crafted, not corporate. Mythic, not LARP.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Use `colors_and_type.css` as the source of truth for tokens — never hand-pick hex values; reach for semantic vars like `--bg-page`, `--fg-1`, `--accent`, `--accent-gilt`.

If working on production code, copy the assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them which of the four properties they're designing for (Mimir app, Mimir site, Shield Wall Games site, Ashborn site), what kind of artifact (full screen, single component, marketing fold, slide), and the tonal weight they want. Then act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick reference:
- **Mimir app** — warm dark + content-dense + ergonomic. Plates as zone headers, character art as accents only.
- **Mimir site** — bridge tone. More breathing room than the app. Hero sells the *feeling* of worldbuilding.
- **Shield Wall Games** — confident, low-key, restrained. Stone + iron over ember + parchment. Architectural.
- **Ashborn** — heaviest. Ember, oxblood, smoke, frost. Set design over UI design — it's a poster more than a product page.

Anti-patterns: default Tailwind dark (slate-900/indigo-500), Cinzel/Trajan/MedievalSharp, glowing runes, particle effects, "magic" gradients, horned helmets, AI-render heroes that fight with the provided art, card-grid SaaS layouts on marketing.
