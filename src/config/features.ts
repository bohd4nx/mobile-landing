import type { Feature } from "@/types/content";

/**
 * App features configuration
 *
 * Add or remove features to showcase your app's capabilities.
 * Each feature should have:
 * - title: Short, catchy name (2-4 words)
 * - description: Brief explanation (1-2 sentences)
 * - icon: Icon name from react-icons/fi (FiStar, FiZap, FiBox, etc.)
 *
 * Available icons: https://react-icons.github.io/react-icons/
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
