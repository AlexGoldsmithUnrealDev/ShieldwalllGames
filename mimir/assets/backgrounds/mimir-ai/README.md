# Mimir AI Well backgrounds

The Mimir AI page currently uses data-driven CSS gradients. Replace them with approved production artwork only when all four variants for a chapter are ready, then set that chapter's `assetReady` value to `true` in `mimir/scripts/mimir-ai-chapters.js`.

## Source masters

- Desktop: 3840 × 2400
- Mobile: 1440 × 2560

Export compressed AVIF production files with these exact names:

- `01-question-dark.avif`
- `01-question-lit.avif`
- `01-question-dark-mobile.avif`
- `01-question-lit-mobile.avif`
- `02-grounding-dark.avif`
- `02-grounding-lit.avif`
- `02-grounding-dark-mobile.avif`
- `02-grounding-lit-mobile.avif`
- `03-truth-dark.avif`
- `03-truth-lit.avif`
- `03-truth-dark-mobile.avif`
- `03-truth-lit-mobile.avif`
- `04-review-dark.avif`
- `04-review-lit.avif`
- `04-review-dark-mobile.avif`
- `04-review-lit-mobile.avif`
- `05-language-dark.avif`
- `05-language-lit.avif`
- `05-language-dark-mobile.avif`
- `05-language-lit-mobile.avif`
- `06-control-dark.avif`
- `06-control-lit.avif`
- `06-control-dark-mobile.avif`
- `06-control-lit-mobile.avif`

Each dark/lit pair must share framing so the opacity transition illuminates one scene rather than crossfading between unrelated compositions. Focal positions, accent, text accent, frame, depth-navigation marker and glow remain configurable per chapter.

The shared Well controller loads only the current and adjacent chapter artwork. Later chapters remain lazy.
