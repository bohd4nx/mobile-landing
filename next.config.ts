import type { NextConfig } from "next";

const config: NextConfig = {
	output: "export",
	images: { unoptimized: true },
	trailingSlash: true,
	// allowedDevOrigins: [""],
};

export default config;
