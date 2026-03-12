import { fileURLToPath } from "node:url";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const resolveSrcPath = (path) =>
	fileURLToPath(new URL(`./src/${path}`, import.meta.url));

export default defineConfig({
	site: "https://landing.bohd4n.dev",
	integrations: [react()],
	output: "static",
	devToolbar: {
		enabled: false,
	},
	vite: {
		resolve: {
			alias: {
				"@layouts": resolveSrcPath("layouts"),
				"@styles": resolveSrcPath("styles"),
				"@t": resolveSrcPath("types"),
				"@shared": resolveSrcPath("components/ui/shared"),
				"@ui": resolveSrcPath("components/ui"),
				"@screenshots": resolveSrcPath("components/screenshots"),
				"@reviews": resolveSrcPath("components/reviews"),
				"@features": resolveSrcPath("components/features"),
				"@faq": resolveSrcPath("components/faq"),
				"@hero": resolveSrcPath("components/hero"),
				"@footer": resolveSrcPath("components/footer"),
				"@social": resolveSrcPath("components/social"),
				"@utils": resolveSrcPath("utils"),
			},
		},
		plugins: [tailwindcss()],
	},
});
