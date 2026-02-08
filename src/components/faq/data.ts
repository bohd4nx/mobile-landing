import type { FAQ } from "@t/content";

/**
 * Frequently Asked Questions configuration
 *
 * Answer common user questions before they ask.
 * Each FAQ should have:
 * - question: Clear, specific question users might have
 * - answer: Concise, helpful answer (1-3 sentences)
 *
 * Recommended topics to cover:
 * - Pricing and payment methods
 * - Key features and functionality
 * - Platform compatibility (iOS, Android, web)
 * - Customer support and contact info
 * - Privacy and data security
 *
 * Tips for effective FAQs:
 * - Use simple, conversational language
 * - Address real concerns from beta testing or user feedback
 * - Keep answers brief but informative
 */
export const faqs: FAQ[] = [
	{
		question: "Question 1?",
		answer: "Answer to question 1 goes here.",
	},
	{
		question: "Question 2?",
		answer: "Answer to question 2 goes here.",
	},
	{
		question: "Question 3?",
		answer: "Answer to question 3 goes here.",
	},
	// Add more questions here...
];
