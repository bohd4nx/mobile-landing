import { socialLinks } from "@social/data";

export const storeDataConfig = {
	fetchRealData: false, // Set to true to fetch real data from App Store
	appStoreAppId: 686449807, // Numeric App ID (without "id" prefix)
};

export const siteConfig = {
	/** Your app name (displayed in header, footer, page title) */
	name: "Your App Name",

	/** Brief description of your app (shown in hero section and meta tags) */
	description:
		"Here you can write a brief description of your application. Tell users about its main features and benefits in 1-2 sentences.",

	/** SEO keywords for better search engine visibility */
	keywords: ["mobile app", "landing page", "astro", "react", "typescript"],

	/** Path to your app logo/icon */
	logo: "/assets/favicon.png",

	/** App store download links */
	storeLinks: {
		apple: "#",
		google: "#",
	},

	/** App rating and reviews */
	rating: {
		score: 4.8,
		count: "1.2K",
	},

	/** Age rating (e.g., 4+, 12+, 17+) */
	ageRating: "4+",

	/** App version */
	version: "1.0.0",

	/** Minimum iOS version required */
	minimumOS: "13.0",

	/** Last update date */
	releaseDate: "Jan 10, 2026",

	/** Social media links (edit in socialLinks.ts) */
	socialLinks,
} as const;