import { socialLinks } from "@social/data";

/**
 * Main app configuration
 * 
 * All core app settings in one place:
 * - Basic info: name, description, logo
 * - Store links: App Store and Google Play
 * - Version info: rating, age rating, version, OS requirements
 * - SEO: keywords for search optimization
 * - Social media: imported from components/social/data.ts
 */


export const storeDataConfig = {
	/** Set to true to fetch real data from App Store */
	fetchRealData: false,
	
	/** Numeric App ID (without "id" prefix) - find in App Store URL */
	appStoreAppId: 686449807,
} as const;


export const appData = {
	/** Your app name (displayed everywhere) */
	name: "Your App Name",

	/** Brief app description (hero section + SEO) */
	description:
		"Here you can write a brief description of your application. Tell users about its main features and benefits in 1-2 sentences.",

	/** Path to your app logo/icon */
	logo: "/assets/favicon.png",

	/** SEO keywords for search visibility */
	keywords: ["mobile app", "landing page", "astro", "react", "typescript"],

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

	/** Social media links */
	socialLinks,
} as const;
