# Shieldwall Games — Web Project

The official websites for Shieldwall Games and its debut title, Ashborn: Halls of Saga.

## Pages

| Page | File | Description |
|------|------|-------------|
| Shieldwall Games | `index.html` | Company homepage |
| Ashborn: Halls of Saga | `ashborn.html` | Product landing page |
| 404 | `404.html` | Custom not-found page |

## Tech Stack

- Vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no npm
- Files run directly in any browser — just open index.html
- Deployed via GitHub Pages

## Local Development

No setup required. Open any `.html` file directly in a browser, or use a simple local server:

```bash
# Using Python (built into macOS/Linux)
python3 -m http.server 8000

# Using Node.js (if installed)
npx serve .
```

Then visit `http://localhost:8000`

## Project Structure

```
/
├── index.html              # Shieldwall Games homepage
├── ashborn.html            # Ashborn: Halls of Saga landing page
├── 404.html                # Custom 404 page
├── styles/
│   ├── main.css            # Global design system — edit this for brand-wide changes
│   └── ashborn.css         # Ashborn-specific overrides only
├── scripts/
│   ├── main.js             # Shared JS — nav, scroll, reveal
│   └── ashborn.js          # Ashborn-specific interactions
├── assets/
│   ├── images/             # All imagery (WebP preferred)
│   ├── fonts/              # Self-hosted fonts when supplied
│   └── icons/              # SVG icons including favicon
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages auto-deploy
├── CLAUDE.md               # AI assistant brief — read before making changes
└── README.md               # This file
```

## Design System

All colours, spacing, and typography are defined as CSS custom properties in `styles/main.css`. Change a variable there and it updates across both pages.

Key variables:

- `--font-display` / `--font-body` — placeholder fonts, to be replaced with client-supplied fonts
- `--color-parchment` / `--color-near-black` — primary background tones
- `--color-aged-gold` / `--color-deep-red` — accent colours

## Deployment

This site deploys automatically to GitHub Pages on every push to `main`. No manual steps required.

To enable GitHub Pages on a new repository:

1. Go to **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow handles the rest

## Before Launch Checklist

### Content
- [ ] Supply and integrate custom fonts (replace placeholder Google Fonts in main.css)
- [ ] Add character art illustrations to mimir/assets/images/ (5 images)
- [ ] Add app screenshots to mimir/assets/images/
- [ ] Add Ask Mimir well-with-wisp illustration to mimir/assets/images/
- [ ] Add Ashborn CCG card artwork to ashborn/assets/images/
- [ ] Add Ashborn world panoramic art to ashborn/assets/images/
- [ ] Create OG images — 1200×630px for each page

### Email
- [ ] Create Buttondown account at buttondown.com
- [ ] Create two lists: Mimir Beta, Ashborn Release
- [ ] Enable double opt-in on both lists
- [ ] Configure custom sending domain (shieldwallgames.co.uk) via DNS
- [ ] Replace ACTION_URL placeholder in index.html, mimir/index.html, ashborn/index.html, components/email-mimir.html, components/email-ashborn.html

### Brand
- [ ] Confirm social media platforms and update URLs in footer (all three pages)
- [ ] Confirm copyright year (currently 2025)
- [ ] Generate PNG favicon from assets/icons/favicon.svg

### DNS & Domains
- [ ] Confirm primary domain (shieldwallgames.co.uk)
- [ ] Configure shieldwallgames.com → 301 → shieldwallgames.co.uk (via registrar)
- [ ] Configure ashbornsaga.com → 301 → shieldwallgames.co.uk/ashborn/ (via registrar)
- [ ] Configure ashbornsaga.co.uk → 301 → shieldwallgames.co.uk/ashborn/ (via registrar)
- [ ] Update all og:url and canonical tags to live domain

### GitHub Pages
- [ ] Go to repo Settings → Pages → set Source to GitHub Actions
- [ ] Push to main — workflow deploys automatically
- [ ] Verify live URL in Settings → Pages
- [ ] (Optional) Add custom domain in Settings → Pages → Custom domain

## Working with Claude Code

This project includes a `CLAUDE.md` file that acts as a persistent brief for AI-assisted development. Claude Code reads this file before every session. Do not delete it.

When asking Claude Code to make changes:

- Reference specific files and section names
- Check `CLAUDE.md` is still accurate after major changes
- Keep the Before Launch Checklist in both `CLAUDE.md` and `README.md` in sync
