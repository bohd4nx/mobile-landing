# Configuration Files

All your landing page content is here. Each file is focused on one specific aspect of your site.

## Quick Reference

| File | Purpose | What to edit |
|------|---------|--------------|
| **[site.ts](./site.ts)** | Main site info | App name, description, logo, store links |
| **[features.ts](./features.ts)** | Feature cards | Feature titles, descriptions, icons |
| **[reviews.ts](./reviews.ts)** | User reviews | Customer testimonials and ratings |
| **[faqs.ts](./faqs.ts)** | FAQ section | Questions and answers |
| **[screenshots.ts](./screenshots.ts)** | App screenshots | iPhone and iPad image paths |
| **[socialLinks.ts](./socialLinks.ts)** | Social media | Social profile URLs and icons |

## How to Edit

1. **Open the file** you want to modify
2. **Edit the values** (all have clear comments)
3. **Save** the file
4. Done! Changes appear on the site automatically

## Tips

### Adding Icons
- Features and social links use [React Icons](https://react-icons.github.io/react-icons/)
- Import from `react-icons/fi` (Feather) or `react-icons/ri` (Remix)
- Example: `import { FiStar } from "react-icons/fi";`

### Screenshots
- **iPhone**: 1170x2532px (9:19.5 aspect ratio)
- **iPad**: 2048x2732px (3:4 aspect ratio)
- Place images in `/public/assets/screenshots/`

### Reviews
- Mix ratings (4-5 stars) for authenticity
- Keep text 2-3 sentences
- Use real or realistic names

### Features
- Keep titles short (2-4 words)
- Descriptions should be 1-2 sentences
- Choose icons that represent the feature

## File Details

### site.ts
Main configuration for your app with two separate sections:

#### 1. Store Data Auto-Fetch (`storeDataConfig`)
```typescript
export const storeDataConfig = {
  fetchRealData: true,          // Enable auto-fetch from App Store
  appStoreAppId: 686449807,     // Numeric App Store ID (without "id" prefix)
}
```

**How it works:**
- When `fetchRealData: true`, data is automatically fetched from iTunes API at build time
- Fetches: name, description, logo, rating (score + count), age rating, version, minimum OS, release date, screenshots, store links
- Uses native `fetch()` API - no external dependencies
- Find App Store ID: Open iTunes App Store → Search your app → Copy number from URL (e.g., `https://apps.apple.com/app/id686449807` → use `686449807`)

**What gets auto-fetched:**
- ✅ App name
- ✅ Description (limited to 3 sentences)
- ✅ Logo/Icon (512x512 URL)
- ✅ Rating score and count (formatted as "1.2K" or "3.5M")
- ✅ Age rating (e.g., "4+", "12+", "17+")
- ✅ Version number (e.g., "1.0.0")
- ✅ Minimum iOS version (e.g., "13.0")
- ✅ Last update date (formatted as "Jan 7, 2026")
- ✅ Screenshots (iPhone and iPad)
- ✅ App Store link

**Manual override:**
Set `fetchRealData: false` to use manual values from `siteConfig` below.

#### 2. Manual Site Configuration (`siteConfig`)
```typescript
export const siteConfig = {
  name: "Your App Name",        // Fallback/override app name
  description: "...",           // Hero section + SEO
  keywords: [...]               // SEO optimization
  logo: "/path/to/logo.png"     // Fallback app icon
  storeLinks: { 
    apple: "...",               // App Store URL
    google: "..."               // Google Play URL (optional)
  }
  rating: {                     // Manual rating (used when fetchRealData: false)
    score: 4.8,                 // Rating score (0-5)
    count: "1.2K"               // Number of ratings
  }
  ageRating: "4+",              // Age rating badge (4+, 12+, 17+)
  version: "1.0.0",             // Current app version
  minimumOS: "13.0",            // Minimum iOS version required
  releaseDate: "Jan 10, 2026",  // Last update date
  socialLinks: [...]            // Social media links
}
```

**Merge behavior:**
- Fetched data takes precedence over `siteConfig` values
- Use `siteConfig` for: SEO keywords, Google Play link, social links, fallback values
- When `fetchRealData: false`, all values come from `siteConfig`

### features.ts
Feature showcase cards:
```typescript
{
  title: "Feature Name",       // Short and catchy
  description: "...",          // What it does
  icon: FiStar                 // React icon component
}
```

### reviews.ts
Customer testimonials:
```typescript
{
  author: "Name",              // Customer name/initials
  rating: 5,                   // 1-5 stars
  text: "Review text..."       // Their feedback
}
```

### faqs.ts
Frequently asked questions:
```typescript
{
  question: "Question?",       // User's question
  answer: "Answer..."          // Your response
}
```

### screenshots.ts
Device-specific screenshots:
```typescript
{
  iphone: ["path1", "path2"],  // iPhone images
  ipad: ["path1", "path2"]     // iPad images
}
```

### socialLinks.ts
Social media profiles:
```typescript
{
  url: "https://...",          // Profile URL
  icon: RiInstagramFill,       // Icon component
  label: "Instagram"           // Platform name
}
```

## Common Tasks

### Change app name and description
→ Edit **site.ts**

### Add/remove features
→ Edit **features.ts** (copy/paste/delete items in the array)

### Update store links
→ Edit **site.ts** → `storeLinks`

### Add social media
→ Edit **socialLinks.ts** (add new object to array)

### Replace screenshots
→ Add images to `/public/assets/screenshots/` → Edit **screenshots.ts**

### Modify reviews
→ Edit **reviews.ts** (change existing or add new ones)

### Update FAQ
→ Edit **faqs.ts** (add/remove questions)

## Need Help?

- All files have **inline comments** explaining each option
- TypeScript will **show errors** if something is wrong
- Each config has **usage tips** in comments at the top

---

**Pro tip**: Use TypeScript autocomplete (Ctrl+Space) to see available options!
