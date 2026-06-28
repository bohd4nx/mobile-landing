import type { NextConfig } from "next";

const config: NextConfig = {
	output: "export",
	images: { unoptimized: true },
	trailingSlash: true,
};

export default config;
