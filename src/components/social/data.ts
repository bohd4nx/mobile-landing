import type { SocialLink } from "@t/content";

/**
 * Social media links configuration
 *
 * Add your social media profiles here.
 * Each link should have:
 * - url: Full URL to your profile
 * - icon: Icon name from react-icons (RiInstagramFill, RiTwitterXFill, etc.)
 * - label: Platform name (for accessibility)
 *
 * Available social icons:
 * - Instagram: RiInstagramFill
 * - Twitter/X: RiTwitterXFill
 * - Telegram: RiTelegram2Fill
 * - Facebook: RiFacebookFill
 * - LinkedIn: RiLinkedinFill
 * - YouTube: RiYoutubeFill
 * - GitHub: RiGithubFill
 * - Discord: RiDiscordFill
 *
 * More icons: https://react-icons.github.io/react-icons/
 */
export const socialLinks: SocialLink[] = [
	{
		url: "#", // Replace with your Instagram URL
		icon: "RiInstagramFill",
		label: "Instagram",
	},
	{
		url: "#", // Replace with your Telegram URL
		icon: "RiTelegram2Fill",
		label: "Telegram",
	},
	{
		url: "#", // Replace with your Twitter/X URL
		icon: "RiTwitterXFill",
		label: "X (Twitter)",
	},
	// Add more social links here...
];
