import { socialLinks } from "@social/data";

export const storeDataConfig = {
	// Enable App Store fetch for production app metadata.
	fetchRealData: false,
	// Numeric Apple App ID without the "id" prefix from App Store URL.
	appStoreAppId: 686449807,
} as const;

export const appData = {
	// Brand basics.
	name: "Your App Name",
	description:
		"Here you can write a brief description of your application. Tell users about its main features and benefits in 1-2 sentences.",
	logo: "/assets/favicon.png",
	// SEO base keywords for meta tags.
	keywords: ["mobile app", "landing page", "astro", "react", "typescript"],
	// Store links displayed in hero and navigation.
	storeLinks: {
		apple: "#",
		google: "#",
	},
	// Public rating summary.
	rating: {
		score: 4.8,
		count: "1.2K",
	},
	// Release metadata.
	ageRating: "4+",
	version: "1.0.0",
	minimumOS: "13.0",
	releaseDate: "Jan 10, 2026",
	// Footer and social section links.
	socialLinks,
} as const;
