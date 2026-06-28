<div align="center">

<img src="public/favicon.svg" alt="App Landing" width="96" height="96">

# app-landing

[![Stars](https://img.shields.io/github/stars/bohd4nx/app-landing?style=flat&color=7c3aed&label=Stars)](https://github.com/bohd4nx/app-landing/stargazers)
[![Forks](https://img.shields.io/github/forks/bohd4nx/app-landing?style=flat&color=7c3aed&label=Forks)](https://github.com/bohd4nx/app-landing/forks)
[![License](https://img.shields.io/github/license/bohd4nx/app-landing?style=flat&color=7c3aed)](LICENSE)

100% vibe-coded mobile app landing page template — built with Next.js 16, React 19, and Tailwind CSS v4. Drop in your app's content, deploy, done.

**[Live Demo](https://landing.bohd4n.dev)** · **[Report Bug](https://github.com/bohd4nx/app-landing/issues)**

</div>

---

## Features

- Hero section with App Store & Google Play buttons, rating, version, and OS info
- Screenshot gallery with always-visible violet scrollbar
- Pricing tiers (Free / Pro / Teams) with highlighted card
- Feature cards, customer reviews with star ratings, and FAQ accordion
- 4-column desktop footer with Legal, Product, and Follow Us sections
- Light / Dark / System theme toggle with localStorage persistence
- Privacy Policy and Terms of Service pages rendered from Markdown
- Dot grid background via CSS `body::before` pseudo-element
- Static export (`output: 'export'`) — deploy anywhere, no server needed
- App Store metadata auto-fetch at build time (optional)

---

## Quick Start

**Requires:** Node.js 20+, pnpm

```bash
git clone https://github.com/bohd4nx/app-landing.git
cd app-landing
pnpm install
pnpm dev
```

Open `http://localhost:3000` — live reload included.

```bash
pnpm build   # static export → out/
pnpm lint    # biome check --write
```

---

## Configuration

Everything is in one file: **`src/config.ts`**

```ts
export const site = {
  name: "Your App Name",
  description: "...",
  logo: "/favicon.svg",
  storeLinks: { apple: "#", google: "#" },
  rating: { score: 4.8, count: "1.2K" },
  version: "1.0.0",
  minimumOS: "13.0",
  releaseDate: "Jan 10, 2026",
  social: [...],
}
```

| Key                         | Description                                                   |
| --------------------------- | ------------------------------------------------------------- |
| `site.name`                 | App name shown in header, footer, and tab title               |
| `site.logo`                 | Path to app icon (used everywhere, SVG recommended)           |
| `site.storeLinks`           | Apple and Google Play deep links                              |
| `site.social`               | Social icons in footer — supports any `react-icons` icon      |
| `storeConfig.fetchRealData` | Set to `true` to pull live data from App Store at build time  |
| `storeConfig.appStoreAppId` | Numeric App Store ID (from the app URL)                       |
| `features`                  | Feature cards array — title, description, icon                |
| `screenshots`               | Array of image paths in `/public/assets/screenshots/`         |
| `pricingTiers`              | Pricing cards — add `highlighted: true` for the featured tier |
| `reviews`                   | Customer testimonials with author and star rating             |
| `faqs`                      | FAQ items — question and answer                               |

---

## Legal Pages

Edit the Markdown files directly — they auto-render on the page:

- **Privacy Policy:** `src/app/privacy-policy/privacy.md`
- **Terms of Service:** `src/app/terms-of-service/terms.md`

---

## License

MIT — see [LICENSE](LICENSE)
