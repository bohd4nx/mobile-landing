<div align="center">
  <img src="public/assets/favicon-512.svg" alt="Mobile Landing Logo" width="120" height="120" style="border-radius: 24px;">

  <h1 style="margin-top: 24px;">🚀 Mobile App Landing Page</h1>

  <p style="font-size: 18px; color: #666; margin-bottom: 24px;">
    <strong>The ultimate modern landing page template for mobile applications</strong>
  </p>

  <p style="margin-bottom: 32px;">
    Built with cutting-edge technologies: <strong>Astro</strong>, <strong>React</strong>, <strong>TypeScript</strong> & <strong>Tailwind CSS</strong>
  </p>

  <p>
    <a href="https://github.com/bohd4nx/mobile-landing/issues">Report Bug</a>
    ·
    <a href="https://github.com/bohd4nx/mobile-landing/issues">Request Feature</a>
    ·
    <a href="https://landing.bohd4n.dev">View Demo</a>
  </p>

</div>

---

## Features

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
    <td>🌗 <strong>Theme System</strong></td>
    <td>Light/Dark/System theme with persistent storage</td>
  </tr>
  <tr>
    <td>🔍 <strong>SEO Optimized</strong></td>
    <td>Built-in meta tags and semantic HTML structure</td>
  </tr>
  <tr>
    <td>📊 <strong>User Reviews</strong></td>
    <td>Beautiful review cards with star ratings</td>
  </tr>
</table>

## 🚀 Quick Start Guide

### 📋 Prerequisites

Make sure you have these installed:

- **Node.js** 20+
- **npm**, **yarn**, or **pnpm**

### ⚡ Installation

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

> 🎉 **That's it!** Your landing page will be running at `http://localhost:4321`

---

## 🎨 Customization Made Easy

<details>
<summary><strong>Site Configuration</strong> <code>src/config/site.ts</code></summary>

```typescript
export const siteConfig = {
    name: "Your App Name", // Your application name
    description: "Here you can write a brief description of your application. Tell users about its main features and benefits in 1-2 sentences.", // SEO description
    keywords: ["mobile app", "landing page", "astro", "react", "typescript"], // SEO keywords
    logo: {
        src192: "/assets/favicon-192.svg", // Logo 192x192px
        src512: "/assets/favicon-512.svg", // Logo 512x512px
    },
    storeLinks: {
        apple: "#", // App Store link
        google: "#", // Google Play link
    },
    socialLinks, // Imported from socialLinks.ts
} as const;
```

</details>

<details>
<summary><strong>Features Section</strong> <code>src/config/features.ts</code></summary>

```typescript
import { FiBox, FiStar, FiZap } from "react-icons/fi";
import type { Feature } from "@/types/app";

export const features: Feature[] = [
    {
        title: "Main Feature",
        description: "Describe your main feature here. What makes it special?",
        icon: FiStar,
    },
    {
        title: "Another Feature", 
        description: "What else can your app do? Tell users about it here.",
        icon: FiZap,
    },
    {
        title: "One More Feature",
        description: "Add another key feature of your application here.",
        icon: FiBox,
    },
];
```

</details>

<details>
<summary><strong>Screenshots Setup</strong> <code>src/config/screenshots.ts</code></summary>

#### **Adding Your Screenshots**

1. **iPhone Screenshots** → `public/assets/screenshots/iphone/`
    - Aspect ratio: `9:16`
    - Recommended width: `260px`
    - Format: PNG or WEBP

2. **iPad Screenshots** → `public/assets/screenshots/ipad/`
    - Aspect ratio: `4:3`
    - Recommended width: `360px`
    - Format: PNG or WEBP

#### **Update Configuration**

```typescript
import type { Screenshots } from "@/types/app";

export const screenshots: Screenshots = {
    iphone: [
        "/assets/screenshots/iphone/1.png",
        "/assets/screenshots/iphone/2.png",
        "/assets/screenshots/iphone/3.png",
    ],
    ipad: [
        "/assets/screenshots/ipad/1.png",
        "/assets/screenshots/ipad/2.png", 
        "/assets/screenshots/ipad/3.png",
    ],
};
```

</details>

<details>
<summary><strong>User Reviews</strong> <code>src/config/reviews.ts</code></summary>

```typescript
import type { Review } from "@/types/app";

export const reviews: Review[] = [
    {
        author: "John Doe",
        rating: 5,
        text: "Amazing app! Really helped me with my daily tasks.",
        avatar: "/assets/avatars/john.jpg", // Optional
    },
    {
        author: "Jane Smith",
        rating: 4,
        text: "Great functionality and beautiful design.",
        // No avatar - will show initials
    },
];
```

</details>

<details>
<summary><strong>FAQ Section</strong> <code>src/config/faqs.ts</code></summary>

```typescript
import type { FAQ } from "@/types/app";

export const faqs: FAQ[] = [
    {
        question: "How do I get started?",
        answer: "Simply download the app from your preferred store and follow the onboarding process.",
    },
    {
        question: "Is there a free trial?",
        answer: "Yes! We offer a 14-day free trial with full access to all features.",
    },
    {
        question: "Can I cancel anytime?",
        answer: "Absolutely. You can cancel your subscription at any time without penalties.",
    },
];
```

</details>

<details>
<summary><strong>Social Media Links</strong> <code>src/config/socialLinks.ts</code></summary>

```typescript
import {
    RiInstagramFill,
    RiTelegram2Fill,
    RiTwitterXFill,
} from "react-icons/ri";
import type { SocialLink } from "@/types/app";

export const socialLinks: SocialLink[] = [
    {
        url: "https://instagram.com/yourapp",
        icon: RiInstagramFill,
        label: "Instagram",
    },
    {
        url: "https://t.me/yourapp", 
        icon: RiTelegram2Fill,
        label: "Telegram",
    },
    {
        url: "https://twitter.com/yourapp",
        icon: RiTwitterXFill,
        label: "Twitter",
    },
];
```

</details>

---

## 📄 Content Pages

### 🔒 **Privacy Policy & Terms**

Edit these Markdown files to customize your legal pages:

- **Privacy Policy**: `src/pages/content/privacy.md`  
- **Terms of Service**: `src/pages/content/terms.md`

Both pages support full Markdown syntax and are automatically styled.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by <a href="https://t.me/bohd4nx">Bohdan</a></p>

  <p>
    <sub>If you found this project helpful, please consider giving it a ⭐</sub>
  </p>
</div>