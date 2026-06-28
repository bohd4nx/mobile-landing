export const NAV_LINKS = [
	{ label: "Features", href: "#features" },
	{ label: "Screenshots", href: "#screenshots" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "Reviews", href: "#reviews" },
	{ label: "FAQ", href: "#faq" },
];

export const LEGAL_LINKS = [
	{ label: "Privacy Policy", href: "/privacy-policy" },
	{ label: "Terms of Service", href: "/terms-of-service" },
];

export const fade = (delay = 0) => ({
	initial: { opacity: 0, y: 16 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.5, delay },
});
