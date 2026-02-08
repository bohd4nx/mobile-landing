import type { Review } from "@t/content";

/**
 * User reviews configuration
 *
 * Display customer testimonials and ratings to build trust.
 * Each review should include:
 * - author: Name or initials (e.g., "John D.", "Sarah K.")
 * - rating: Numeric rating from 1 to 5 stars
 * - text: Review content (2-3 sentences recommended)
 * - avatar: (Optional) URL to reviewer's profile picture
 *
 * Tips for authentic reviews:
 * - Mix ratings between 4-5 stars for authenticity
 * - Keep testimonials genuine and specific
 * - Highlight different app features across reviews
 * - Use realistic names and scenarios
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
