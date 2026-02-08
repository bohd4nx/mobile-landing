import type { Screenshots } from "@t/screenshots";

/**
 * App screenshots configuration
 *
 * Showcase your app with high-quality device-specific screenshots.
 *
 * iPhone screenshots guidelines:
 * - Recommended size: 1170x2532px (iPhone 13 Pro)
 * - Aspect ratio: 9:19.5 (portrait orientation)
 * - File format: PNG or JPG
 * - Max file size: Keep under 500KB for optimal loading
 *
 * iPad screenshots guidelines:
 * - Recommended size: 2048x2732px (iPad Pro 12.9\")
 * - Aspect ratio: 3:4 (portrait orientation)
 * - File format: PNG or JPG
 * - Max file size: Keep under 500KB for optimal loading
 *
 * Best practices:
 * - Show key features and user flows
 * - Use real, meaningful content (not placeholder text)
 * - Include 4-6 screens for each device type
 * - Place images in `/public/assets/screenshots/`
 * - Order screenshots to tell a story about your app
 */
export const screenshots: Screenshots = {
	iphone: [
		"/assets/screenshots/iphone/1.png",
		"/assets/screenshots/iphone/1.png",
		"/assets/screenshots/iphone/1.png",
		"/assets/screenshots/iphone/1.png",
		"/assets/screenshots/iphone/1.png",
		// Add more iPhone screenshots...
	],
	ipad: [
		"/assets/screenshots/ipad/1.png",
		"/assets/screenshots/ipad/1.png",
		"/assets/screenshots/ipad/1.png",
		"/assets/screenshots/ipad/1.png",
		"/assets/screenshots/ipad/1.png",
		// Add more iPad screenshots...
	],
};
