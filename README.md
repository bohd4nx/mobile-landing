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
      <img src="https://img.shields.io/badge/demo-live-blue" alt="Live Demo">
    </a>
    <a href="https://github.com/bohd4nx/mobile-landing">
      <img src="https://img.shields.io/github/stars/bohd4nx/mobile-landing" alt="GitHub Stars">
    </a>
    <a href="https://github.com/bohd4nx/mobile-landing/issues">
      <img src="https://img.shields.io/github/issues/bohd4nx/mobile-landing" alt="GitHub Issues">
    </a>
    <a href="https://github.com/bohd4nx/mobile-landing/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/bohd4nx/mobile-landing" alt="License">
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
    <td>Interactive toggle between iPhone and iPad screenshots with lightbox</td>
  </tr>
  <tr>
    <td>🎨 <strong>Modern UI/UX</strong></td>
    <td>Clean design with smooth Framer Motion animations</td>
  </tr>
  <tr>
    <td>🌗 <strong>Smart Theme System</strong></td>
    <td>Light/Dark/System theme with persistent storage</td>
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
    <td>♿ <strong>Accessible</strong></td>
    <td>WCAG compliant with proper ARIA labels and keyboard navigation</td>
  </tr>
  <tr>
    <td>📊 <strong>User Reviews</strong></td>
    <td>Beautiful review cards with star ratings</td>
  </tr>
  <tr>
    <td>🔧 <strong>TypeScript</strong></td>
    <td>Full TypeScript support for better development experience</td>
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
  description: "Your app description here. Keep it engaging and concise.",
  logo: {
    type: "image", // or "iframe" for animated logos
    src: "favicon.webp" // Path to your app icon
  },
  storeLinks: {
    apple: "https://apps.apple.com/app/your-app",
    google: "https://play.google.com/store/apps/details?id=your.app"
  }
};
```

### 2. Features Section

Edit `src/config/features.ts`:

```typescript
import { FiStar, FiZap, FiShield } from "react-icons/fi";

export const features = [
  {
    title: "Amazing Feature",
    description: "Detailed description of what makes this feature special",
    icon: FiStar
  },
  {
    title: "Fast Performance",
    description: "Lightning-fast experience for all users",
    icon: FiZap
  },
  {
    title: "Secure & Private",
    description: "Your data is protected with industry-standard security",
    icon: FiShield
  }
  // Add more features...
];
```

### 3. Screenshots Configuration

1. **Add your screenshots:**
   - iPhone screenshots: `public/screenshots/iphone/` (9:16 aspect ratio, ~260px width recommended)
   - iPad screenshots: `public/screenshots/ipad/` (4:3 aspect ratio, ~360px width recommended)

2. **Update screenshot paths in `src/config/screenshots.ts`:**

```typescript
export const screenshots = {
  iphone: [
    "screenshots/iphone/1.png",
    "screenshots/iphone/2.png",
    "screenshots/iphone/3.png"
  ],
  ipad: [
    "screenshots/ipad/1.png",
    "screenshots/ipad/2.png",
    "screenshots/ipad/3.png"
  ]
};
```

### 4. User Reviews

Edit `src/config/reviews.ts`:

```typescript
export const reviews = [
  {
    author: "John Smith",
    rating: 5, // 1-5 stars
    text: "This app changed my daily workflow completely!",
    avatar: "path/to/avatar.jpg" // Optional
  }
  // Add more reviews...
];
```

### 5. FAQ Section

Edit `src/config/faq.ts`:

```typescript
export const faq = [
  {
    question: "Is the app free to use?",
    answer: "Yes, the app is free with optional premium features."
  },
  {
    question: "Which devices are supported?",
    answer: "The app supports iOS 14+ and Android 8+."
  }
  // Add more questions...
];
```

### 6. Social Media Links

Edit `src/config/socialLinks.ts`:

```typescript
import { RiInstagramFill, RiTwitterXFill, RiTelegram2Fill } from "react-icons/ri";

export const socialLinks = [
  {
    url: "https://instagram.com/yourapp",
    icon: RiInstagramFill,
    label: "Instagram"
  },
  {
    url: "https://twitter.com/yourapp",
    icon: RiTwitterXFill,
    label: "Twitter"
  }
  // Add more social links...
];
```

### 7. Privacy Policy & Terms

1. **Edit markdown files:**
   - Privacy Policy: `src/pages/content/privacy.md`
   - Terms of Service: `src/pages/content/terms.md`

2. **The pages will automatically:**
   - Render markdown content with proper styling
   - Include breadcrumb navigation
   - Add back-to-top functionality
   - Support both light and dark themes

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
# Set base in astro.config.mjs
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repository-name',
});
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Astro](https://astro.build)** - The web framework for content-driven websites
- **[React](https://react.dev)** - JavaScript library for building user interfaces
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library for React
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon library
- **[Marked](https://marked.js.org/)** - Markdown parser and compiler


---

<div align="center">
  <p>Made with ❤️ by <a href="https://t.me/bohd4nx">Bohdan</a></p>
  
  <p>
    <sub>If you found this project helpful, please consider giving it a ⭐</sub>
  </p>
  
  <p>
    <a href="https://github.com/bohd4nx/mobile-landing/issues">Report Bug</a>
    ·
    <a href="https://github.com/bohd4nx/mobile-landing/issues">Request Feature</a>
  </p>
</div>