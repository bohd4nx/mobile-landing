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
Main configuration for your app:
```typescript
name: "Your App Name"          // Shown everywhere
description: "..."             // Hero section + SEO
keywords: [...]                // SEO optimization
logo: "/path/to/logo.png"      // App icon
storeLinks: { apple, google }  // Download buttons
rating: {                      // App Store rating display
  score: 4.8,                  // Rating score (0-5)
  count: "1.2K"                // Number of ratings
}
ageRating: "4+"                // Age rating badge (4+, 12+, 17+)
```

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
