import type {
	FAQItem,
	Feature,
	PricingTier,
	Review,
	SocialLink,
} from "@/types";

export const storeConfig = {
	/** Set to true to pull live metadata from the App Store at build time */
	fetchRealData: false,
	/** Numeric App Store app ID (without the "id" prefix) */
	appStoreAppId: 686449807,
} as const;

export const site = {
	name: "Your App Name",
	description:
		"Here you can write a brief description of your application. Tell users about its main features and benefits in 1-2 sentences.",
	logo: "/favicon.svg",
	keywords: ["mobile app", "landing page", "nextjs", "react", "typescript"],
	storeLinks: {
		apple: "#",
		google: "#",
	},
	rating: {
		score: 4.8,
		count: "1.2K",
	},
	ageRating: "4+",
	version: "1.0.0",
	minimumOS: "13.0",
	releaseDate: "Jan 10, 2026",
	social: [
		{ url: "#", icon: "RiInstagramFill", label: "Instagram" },
		{ url: "#", icon: "RiTelegram2Fill", label: "Telegram" },
		{ url: "#", icon: "RiTwitterXFill", label: "X (Twitter)" },
	] as SocialLink[],
} as const;

export const features: Feature[] = [
	{
		title: "Main Feature",
		description: "Describe your main feature here. What makes it special?",
		icon: "FiStar",
	},
	{
		title: "Lightning Fast",
		description:
			"Optimized for speed so everything feels instant, even on older devices.",
		icon: "FiZap",
	},
	{
		title: "Offline Mode",
		description: "All your data is available offline. No internet? No problem.",
		icon: "FiBox",
	},
	{
		title: "Private & Secure",
		description:
			"End-to-end encryption keeps your data safe. We never sell your info.",
		icon: "FiShield",
	},
	{
		title: "Cloud Sync",
		description:
			"Stay in sync across all your devices. Changes appear everywhere instantly.",
		icon: "FiCloud",
	},
	{
		title: "Fully Customizable",
		description:
			"Tailor the experience to your workflow with powerful settings.",
		icon: "FiSliders",
	},
];

export const screenshots: string[] = [
	"/assets/screenshots/1.png",
	"/assets/screenshots/1.png",
	"/assets/screenshots/1.png",
	"/assets/screenshots/1.png",
	"/assets/screenshots/1.png",
	"/assets/screenshots/1.png",
	"/assets/screenshots/1.png",
	"/assets/screenshots/1.png",
];

export const pricingTiers: PricingTier[] = [
	{
		name: "Free",
		price: "$0",
		period: "/month",
		description: "Everything you need to get started. No credit card required.",
		features: [
			"Core app features",
			"Up to 3 projects",
			"Basic analytics dashboard",
			"Community support",
			"iOS & Android",
		],
		cta: "Download Free",
		ctaHref: "#",
	},
	{
		name: "Pro",
		price: "$4.99",
		period: "/month",
		description:
			"The full experience. Unlock every feature and remove all limits.",
		features: [
			"Everything in Free",
			"Unlimited projects",
			"Advanced analytics",
			"Priority support",
			"Cloud sync & backup",
			"Early access to new features",
		],
		cta: "Start Free Trial",
		ctaHref: "#",
		highlighted: true,
		badge: "Most Popular",
	},
	{
		name: "Teams",
		price: "Custom",
		description:
			"For organizations that need advanced controls, SSO, and dedicated support.",
		features: [
			"Everything in Pro",
			"Team collaboration tools",
			"Admin dashboard",
			"SSO & access controls",
			"Dedicated account manager",
			"Custom integrations & API",
		],
		cta: "Contact Sales",
		ctaHref: "mailto:hello@example.com",
	},
];

export const reviews: Review[] = [
	{
		author: "Sarah K.",
		rating: 5,
		text: "This app has completely transformed how I manage my daily tasks. The interface is intuitive and the performance is outstanding!",
	},
	{
		author: "James M.",
		rating: 5,
		text: "I've tried dozens of similar apps, but this one stands out with its unique features and reliability. Highly recommended!",
	},
	{
		author: "Elena T.",
		rating: 4,
		text: "Great app with impressive functionality. The recent update made it even better. Just a few minor UI improvements would make it perfect.",
	},
	{
		author: "Michael R.",
		rating: 5,
		text: "Customer support is exceptional. Had an issue and they resolved it within hours. The app itself is fantastic too!",
	},
];

export const faqs: FAQItem[] = [
	{
		question: "Is the app free to download?",
		answer:
			"Yes! The app is free to download on both the App Store and Google Play. A Pro plan is available for users who want access to advanced features.",
	},
	{
		question: "Which platforms are supported?",
		answer:
			"The app is available for iOS 13.0+ and Android 8.0+. A web version is coming soon.",
	},
	{
		question: "Can I use the app offline?",
		answer:
			"Core features work fully offline. Your data syncs automatically when you reconnect to the internet.",
	},
	{
		question: "How do I restore my purchases?",
		answer:
			"Open the app, go to Settings → Subscription, and tap Restore Purchases. Make sure you're signed in with the same account used for the original purchase.",
	},
	{
		question: "Is my data private and secure?",
		answer:
			"Absolutely. Your data is encrypted in transit and at rest. We never sell or share your personal information with third parties. See our Privacy Policy for full details.",
	},
	{
		question: "How do I reach support?",
		answer:
			"Tap Help in the app settings or email us at support@example.com. We respond within 24 hours on business days.",
	},
];
