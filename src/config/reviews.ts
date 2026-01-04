import type { Review } from "@/types/content";

/**
 * User reviews configuration
 * 
 * Display customer testimonials and ratings.
 * Each review should include:
 * - author: Name or initials (e.g., "John D.")
 * - rating: Number from 1 to 5
 * - text: Review content (2-3 sentences recommended)
 * 
 * Tip: Mix ratings (1-5 stars) for authenticity
 */
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
	// Add more reviews here...
];
