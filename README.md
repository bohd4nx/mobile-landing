<div align="center">
  <img src="public/assets/favicon.png" alt="Mobile Landing" width="120" height="120" style="border-radius: 24px;">

  <h1>🚀 Mobile App Landing Page</h1>

  <p><strong>Modern, fast, and customizable landing page template for mobile apps</strong></p>

  <p>Built with <strong>Astro</strong> · <strong>React</strong> · <strong>TypeScript</strong> · <strong>Tailwind CSS</strong></p>

  <p>
    <a href="#-quick-start">Quick Start</a> ·
    <a href="#-customization">Customization</a> ·
    <a href="https://landing.bohd4n.dev">Demo</a>
  </p>
</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📱 **Responsive Design** | Perfect on mobile, tablet, and desktop |
| 🖼️ **Screenshot Gallery** | iPhone/iPad preview with lightbox |
| 🎨 **Modern UI** | Clean design with Framer Motion animations |
| 🌗 **Theme Switcher** | Light/Dark/System modes with persistence |
| ⚡ **Fast Performance** | Astro for optimal loading speed |
| 🔍 **SEO Ready** | Meta tags and semantic HTML |
| 📊 **Review System** | Star ratings and testimonials |
| 🎯 **TypeScript** | Type-safe configuration |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/bohd4nx/mobile-landing.git
cd mobile-landing

# Install dependencies
npm install

# Start dev server
npm run dev
```

Your site runs at `http://localhost:4321` 🎉

### Build & Deploy

```bash
# Build for production
npm run build

# Preview build
npm run preview
```

---

## 🎨 Customization

### 📁 Configuration Structure

All content is in `src/config/` - each file handles one aspect:

```
src/config/
├── site.ts          # App name, description, store links
├── features.ts      # Feature cards
├── reviews.ts       # User testimonials
├── faqs.ts          # FAQ section
├── screenshots.ts   # Image paths
└── socialLinks.ts   # Social media
```

**📖 [Full Configuration Guide](src/config/README.md)**

---

## 📄 Legal Pages

Edit Markdown files for Privacy & Terms:

- **Privacy Policy:** `src/pages/content/privacy.md`
- **Terms of Service:** `src/pages/content/terms.md`

Both support full Markdown and auto-styling.

---

## 🎯 Common Tasks

| Task | File to Edit |
|------|-------------|
| Change app name | `src/config/site.ts` |
| Add/remove features | `src/config/features.ts` |
| Update store links | `src/config/site.ts` |
| Replace screenshots | `src/config/screenshots.ts` |
| Modify reviews | `src/config/reviews.ts` |
| Update FAQ | `src/config/faqs.ts` |
| Add social media | `src/config/socialLinks.ts` |

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file

---

<div align="center">
  <p>Made with ❤️ by <a href="https://t.me/bohd4nx">Bohdan</a></p>
  <p>⭐ Star this repo if you find it useful!</p>
</div>