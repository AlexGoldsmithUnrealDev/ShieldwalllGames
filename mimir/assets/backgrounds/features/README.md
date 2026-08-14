# Mimir Features Well artwork

The Features page uses the shared controller in `mimir/scripts/chapters.js` and
the page configuration in `mimir/scripts/features-chapters.js`.

Supply aligned dark/lit pairs for desktop and mobile. Recommended source
masters remain approximately 3840 × 2400 desktop and 1440 × 2560 mobile; publish
compressed AVIF files rather than source masters.

| Discipline | Desktop dark | Desktop lit | Mobile dark | Mobile lit |
| --- | --- | --- | --- | --- |
| Build | `01-build-dark.avif` | `01-build-lit.avif` | `01-build-dark-mobile.avif` | `01-build-lit-mobile.avif` |
| Connect | `02-connect-dark.avif` | `02-connect-lit.avif` | `02-connect-dark-mobile.avif` | `02-connect-lit-mobile.avif` |
| Visualise | `03-visualise-dark.avif` | `03-visualise-lit.avif` | `03-visualise-dark-mobile.avif` | `03-visualise-lit-mobile.avif` |
| Write & Plan | `04-write-dark.avif` | `04-write-lit.avif` | `04-write-dark-mobile.avif` | `04-write-lit-mobile.avif` |
| Understand | `05-understand-dark.avif` | `05-understand-lit.avif` | `05-understand-dark-mobile.avif` | `05-understand-lit-mobile.avif` |
| Test | `06-test-dark.avif` | `06-test-lit.avif` | `06-test-dark-mobile.avif` | `06-test-lit-mobile.avif` |
| Own & Protect | `07-own-dark.avif` | `07-own-lit.avif` | `07-own-dark-mobile.avif` | `07-own-lit-mobile.avif` |
| Share | `08-share-dark.avif` | `08-share-lit.avif` | `08-share-dark-mobile.avif` | `08-share-lit-mobile.avif` |

When all four files for a discipline exist, set its `assetReady` value to
`true` in `features-chapters.js` and tune `focalDesktop` / `focalMobile`. The
shared controller loads only the active and adjacent discipline artwork.
