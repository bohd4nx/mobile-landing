/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: ["selector", '[class~="dark"]'],
	theme: {
		extend: {
			screens: {
				xs: "410px",
				light: { raw: "(prefers-color-scheme: light)" },
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwind-scrollbar-hide"),
		({ addVariant, addComponents }) => {
			addVariant("light", ".light &");
			addComponents({
				".card-base": {
					"@apply rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-sm":
						{},
				},
				".button-base": {
					"@apply rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/[0.04] shadow-sm":
						{},
				},
				".store-button": {
					"@apply relative overflow-hidden rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/[0.04] hover:bg-gray-50 dark:hover:bg-white/[0.08] transition-all duration-200 flex items-center gap-2 md:gap-2.5 px-2.5 md:px-4 py-2 md:py-3 h-10 md:h-12":
						{},
				},
				".text-heading": {
					"@apply text-gray-900 dark:text-white": {},
				},
				".text-body": {
					"@apply text-gray-600 dark:text-gray-400": {},
				},
				".text-muted": {
					"@apply text-gray-500 dark:text-gray-400": {},
				},
				".info-badge": {
					"@apply flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/[0.05] border border-gray-200 dark:border-white/10": {},
				},
			});
		},
	],
};
