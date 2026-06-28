import type { NextConfig } from "next";

const config: NextConfig = {
	output: "export",
	images: { unoptimized: true },
	trailingSlash: true,
	reactStrictMode: true,
	compiler: {
		removeConsole: { exclude: ["error"] },
	},
};

export default config;
