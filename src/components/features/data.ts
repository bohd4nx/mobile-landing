import type { Feature } from "@t/content";

/**
 * App features configuration
 *
 * Showcase your app's key capabilities and benefits.
 * Each feature should have:
 * - title: Short, catchy name (2-4 words)
 * - description: Brief explanation of the feature (1-2 sentences)
 * - icon: Icon name from react-icons (FiStar, FiZap, FiBox, etc.)
 *
 * Available icon sets:
 * - Feather Icons (Fi): FiStar, FiZap, FiBox, FiHeart, FiTrendingUp
 * - More at: https://react-icons.github.io/react-icons/icons/fi/
 *
 * Tips for great features:
 * - Focus on user benefits, not technical specs
 * - Use action-oriented language
 * - Choose icons that visually represent each feature
 */
export const features: Feature[] = [
	{
		title: "Main Feature",
		description: "Describe your main feature here. What makes it special?",
		icon: "FiStar",
	},
	{
		title: "Another Feature",
		description: "What else can your app do? Tell users about it here.",
		icon: "FiZap",
	},
	{
		title: "One More Feature",
		description: "Add another key feature of your application here.",
		icon: "FiBox",
	},
	// Add more features here...
];
