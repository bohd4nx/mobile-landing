<div align="center">
  <img src="public/favicon.webp" alt="Logo" width="120" height="120" style="border-radius: 20px;">
  
  <h1>Mobile App Landing Page</h1>
  
  <p>
    <strong>A modern, responsive landing page template for mobile applications</strong>
  </p>
  
  <p>
    Built with Astro, React, and Tailwind CSS for optimal performance and developer experience
  </p>
  
  <p>
    <a href="https://landing.bohd4n.dev">
      <img src="https://img.shields.io/badge/Demo-Live-blue?style=for-the-badge&logo=vercel" alt="Live Demo">
    </a>
    <a href="https://github.com/bohd4nx/mobile-landing/stargazers">
      <img src="https://img.shields.io/github/stars/bohd4nx/mobile-landing?style=for-the-badge&logo=github" alt="GitHub stars">
    </a>
    <a href="https://github.com/bohd4nx/mobile-landing/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
    </a>
  </p>
</div>

---

## ✨ Features

<table>
  <tr>
    <td>📱 <strong>Responsive Design</strong></td>
    <td>Perfectly optimized for all devices and screen sizes</td>
  </tr>
  <tr>
    <td>🖼️ <strong>Device Preview</strong></td>
    <td>Interactive toggle between iPhone and iPad screenshots</td>
  </tr>
  <tr>
    <td>🎨 <strong>Modern UI/UX</strong></td>
    <td>Clean design with smooth Framer Motion animations</td>
  </tr>
  <tr>
    <td>📝 <strong>Markdown Support</strong></td>
    <td>Easy editing of Privacy Policy and Terms of Service</td>
  </tr>
  <tr>
    <td>🔍 <strong>SEO Optimized</strong></td>
    <td>Built-in meta tags and semantic HTML structure</td>
  </tr>
  <tr>
    <td>⚡ <strong>Lightning Fast</strong></td>
    <td>Astro's island architecture for optimal performance</td>
  </tr>
  <tr>
    <td>🌗 <strong>Dark Mode</strong></td>
    <td>Beautiful dark theme by default</td>
  </tr>
  <tr>
    <td>♿ <strong>Accessible</strong></td>
    <td>WCAG compliant with proper ARIA labels</td>
  </tr>
</table>

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/bohd4nx/mobile-landing.git
cd mobile-landing

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```


## 🎨 Customization Guide

### 1. App Information

Edit `src/config/appInfo.ts`:

```typescript
export const appInfo = {
  title: "Your App Name",
  description: "Your app description",
  logo: {
    type: "image", // or "iframe" for animated logos
    src: "path/to/logo.png"
  },
  storeLinks: {
    apple: "https://apps.apple.com/...",
    google: "https://play.google.com/..."
  }
};
```

### 2. Features Section

Edit `src/config/features.ts`:

```typescript
import { FiStar } from "react-icons/fi";

export const features = [
  {
    title: "Amazing Feature",
    description: "Description of your feature",
    icon: FiStar
  }
  // Add more features...
];
```

### 3. Screenshots

1. Add screenshots to:
   - `public/screenshots/iphone/` (9:16 aspect ratio)
   - `public/screenshots/ipad/` (4:3 aspect ratio)

2. Update `src/config/screenshots.ts`:

```typescript
export const screenshots = {
  iphone: ["screenshots/iphone/1.png", "screenshots/iphone/2.png"],
  ipad: ["screenshots/ipad/1.png", "screenshots/ipad/2.png"]
};
```

### 4. Styling

The project uses Tailwind CSS. Customize the theme in `tailwind.config.cjs`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
        // Add custom colors
      }
    }
  }
};
```

## 🐛 Troubleshooting

### Common Issues

<details>
<summary><strong>Screenshots not displaying</strong></summary>

- Ensure images are in the correct folders (`public/screenshots/iphone/` or `public/screenshots/ipad/`)
- Check file paths in `src/config/screenshots.ts`
- Verify image file extensions match the configuration
</details>

<details>
<summary><strong>Build errors</strong></summary>

- Clear the cache: `rm -rf .astro node_modules`
- Reinstall dependencies: `npm install`
- Ensure Node.js version is 18 or higher
</details>

<details>
<summary><strong>Styling issues</strong></summary>

- Run `npm run dev` to ensure Tailwind CSS is processing
- Check for conflicting CSS classes
- Verify Tailwind configuration
</details>

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">
  <p>
  
  <p>Made with ❤️ by <a href="https://t.me/bohd4nx">Bohdan</a></p>
  
  <p>
    <sub>If you found this project helpful, please consider giving it a ⭐</sub>
  </p>
</div>