/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: ["selector", '[class~="dark"]'],
	theme: {
		extend: {
			screens: {
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
				".text-heading": {
					"@apply text-gray-900 dark:text-white": {},
				},
				".text-body": {
					"@apply text-gray-600 dark:text-gray-400": {},
				},
				".text-muted": {
					"@apply text-gray-500 dark:text-gray-400": {},
				},
			});
		},
	],
};
