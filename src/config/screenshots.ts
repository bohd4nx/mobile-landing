import type { Screenshots } from "@/types/screenshots";

/**
 * App screenshots configuration
 * 
 * Showcase your app with device-specific screenshots.
 * 
 * iPhone screenshots:
 * - Recommended size: 1170x2532px (iPhone 13 Pro)
 * - Aspect ratio: 9:19.5 (portrait)
 * 
 * iPad screenshots:
 * - Recommended size: 2048x2732px (iPad Pro 12.9")
 * - Aspect ratio: 3:4 (portrait)
 * 
 * Tip: Use high-quality images, show key features
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
