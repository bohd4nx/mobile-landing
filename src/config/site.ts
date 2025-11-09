import { socialLinks } from "./socialLinks";

export const siteConfig = {
	name: "Your App Name",
	description: "Here you can write a brief description of your application. Tell users about its main features and benefits in 1-2 sentences.",
	keywords: ["mobile app", "landing page", "astro", "react", "typescript"],
	logo: {
		src192: "/assets/favicon-192.svg",
		src512: "/assets/favicon-512.svg",
	},
	storeLinks: {
		apple: "#",
		google: "#",
	},
	socialLinks,
} as const;