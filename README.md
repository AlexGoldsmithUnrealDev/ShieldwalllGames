# Shieldwall Games Web Project

The public website for Shieldwall Games Ltd, Mimir, and Ashborn CCG.

## Live structure

| Page | File | Purpose |
| --- | --- | --- |
| Shieldwall Games | `index.html` | Studio homepage led by Mimir |
| Mimir | `mimir/index.html` | Product, V1 scope, pricing, FAQ, beta signup |
| Mimir roadmap | `mimir/roadmap.html` | Data-driven public roadmap |
| Ashborn CCG | `ashborn/index.html` | Product landing page |
| Privacy | `privacy.html` | Website and planned Mimir privacy model |
| Terms | `terms.html` | Website and planned Mimir commercial terms |
| 404 | `404.html` | Custom not-found page |

## Tech stack

- Vanilla HTML, CSS, and JavaScript
- No framework, npm dependency, or build step
- MailerLite embedded forms for email capture
- GitHub Actions deployment to GitHub Pages during the pre-launch website phase
- Canonical domain: `shieldwallgames.co.uk`

## Local development

Open the files directly or run a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

```text
/
├── index.html
├── privacy.html
├── terms.html
├── 404.html
├── CNAME
├── styles/
│   ├── main.css
│   └── shieldwall.css
├── scripts/
│   └── main.js
├── assets/
│   ├── images/
│   ├── fonts/
│   ├── icons/
│   └── logos/
├── mimir/
│   ├── index.html
│   ├── roadmap.html
│   ├── roadmap-data.json
│   ├── styles/
│   │   ├── mimir.css
│   │   └── roadmap.css
│   └── scripts/
│       ├── mimir.js
│       ├── chapters.js
│       ├── roadmap-chapters.js
│       ├── roadmap.js
│       └── generate-roadmap.js
├── ashborn/
│   ├── index.html
│   └── styles/
│       └── ashborn.css
├── .github/workflows/deploy.yml
├── CLAUDE.md
└── README.md
```

## Mimir commercial source of truth

The live site currently uses the planned V1 commercial model:

| Tier | Monthly | Annual |
| --- | ---: | ---: |
| Mimir Core | Free | Free |
| Apprentice | £6.99 | £69.99 |
| Worldsmith | £14.99 | £149.99 |
| Loremaster | £24.99 | £249.99 |

Core keeps unlimited local worlds and entries. Paid tiers add advanced workflows, Mimir AI allowance, collaboration, hosting, and scale rather than artificial local content caps.

The deeper canonical commercial specification lives in the Lorekeeper/Mimir application repository at `docs/commercial-model.md`. When pricing or entitlements change there, this website and `CLAUDE.md` must be updated together.

### Roadmap authoring

`mimir/roadmap-data.json` is the primary Roadmap content source. After changing
it, run `node mimir/scripts/generate-roadmap.js` to refresh the semantic HTML
snapshot in `mimir/roadmap.html`. The snapshot keeps the page useful and
indexable when JavaScript or JSON loading fails; `roadmap.js` adds only the
interactive detail layer.

The homepage and Roadmap share the Well stage/controller in
`mimir/scripts/chapters.js`. Roadmap-only phase artwork and colour configuration
lives in `mimir/scripts/roadmap-chapters.js`.

## Current V1 positioning

Mimir V1 is being completed around:

- Local-first structured worldbuilding
- Trees, timeline, calendar, maps, quests, dialogue, story arcs, validation, history, and accessibility
- Mimir AI and constructed-language translation
- General imports and competitor migration
- Proving Grounds for prototyping conversations, quests, tabletop sessions, board-game systems, and related interactive ideas
- Collaboration for shared creative work
- Hosted worlds for player/viewer/participant use cases

MCP connections and direct Unreal, Unity, and Godot integrations are future post-V1 work. Do not advertise them as V1 launch features.

## Mimir AI positioning

Customer-facing language is **Mimir AI**.

Do not ask customers to choose Haiku, Sonnet, Opus, or another provider SKU in website copy. Mimir chooses the underlying processing route internally. Credit consumption is based on the amount/type of work rather than a customer-selected provider model.

Current launch-planning monthly allowances are:

- Core: 25 credits + 100 one-time welcome credits
- Apprentice: 400 credits
- Worldsmith: 1,200 credits
- Loremaster: 3,000 credits

These allowances are still subject to beta workload validation before paid checkout opens.

## Email capture

MailerLite account ID: `2430389`

- Mimir form: `data-form="x3uRLn"`
- Ashborn form: `data-form="rvVjbn"`
- Double opt-in is used for marketing lists
- Sending domain: `shieldwallgames.co.uk`

Do not reintroduce Buttondown instructions.

## Design and implementation rules

- Keep the current design system and visual identity unless explicitly asked to redesign it.
- Vanilla HTML/CSS/JS only.
- Keep semantic HTML and WCAG AA accessibility.
- Prefer shared tokens/components over new one-off patterns.
- Keep Mimir pricing anchored at `mimir/#pricing`.
- Keep user data ownership/local-first language precise: local worlds stay on the user's device by default; AI and optional hosted/collaboration services are network features.
- Do not promise future features as already delivered.
- Do not expose bring-your-own-key (BYOK) as a customer feature.
- Do not use the retired product name Lorekeeper in public website copy.

## Deployment

Every push to `main` triggers the GitHub Pages workflow. GitHub Pages is the current pre-launch website host.

Before Mimir becomes a commercial SaaS/download service, the production website/download/account infrastructure should be reviewed and moved to the intended commercial hosting setup rather than assuming GitHub Pages is the permanent service architecture.

## Before public paid launch

- [ ] Finish and validate migration/import workflows
- [ ] Finish Proving Grounds
- [ ] Finish collaboration and hosted-world systems
- [ ] Benchmark Mimir AI workloads and confirm monthly credit allowances
- [ ] Load-test hosted project/collaborator/storage allowances
- [ ] Finalise production auth, account ledger, payment, broker, storage, and hosting infrastructure
- [ ] Update `privacy.html` with the actual production subprocessors and retention details
- [ ] Update `terms.html` and checkout flow for the consumer/subscription law in force at launch
- [ ] Confirm refund/cancellation wording and hosted downgrade grace periods
- [ ] Create final OG images
- [ ] Verify all beta/launch MailerLite forms and automations
- [ ] Move installers/download delivery to the intended commercial storage/CDN
- [ ] Review GitHub Pages replacement for the commercial site
- [ ] Configure remaining domain redirects

## Social media

- Facebook: `https://www.facebook.com/share/18PW3HCR6m/`
- Instagram: `https://www.instagram.com/shieldwall_games`
- YouTube: `https://youtube.com/@shieldwallgames`
- Twitter/X: `https://twitter.com/ShieldwallG`

## Working with AI coding assistants

Read `CLAUDE.md` before making site changes. After any material product/pricing change, check all of:

- `mimir/index.html`
- `mimir/roadmap.html`
- `mimir/roadmap-data.json`
- `privacy.html`
- `terms.html`
- `README.md`
- `CLAUDE.md`

Do not treat older files inside `Mimir Design System/` as the commercial source of truth. They are retained design/reference material and may contain historical copy.
