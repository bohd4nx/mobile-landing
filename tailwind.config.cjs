/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'media',
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: '#A54F31',
				secondary: {
					light: '#41476E',
					dark: '#626894',
				},
				bg: {
					light: '#F4F2F1',
					dark: '#191015',
				},
				// main content/text colors
				'content': '#191015',
				'content-dark': '#F4F2F1',
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
