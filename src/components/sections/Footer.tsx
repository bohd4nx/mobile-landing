import { siteConfig } from "config";
import type React from "react";
import { memo } from "react";

const Footer: React.FC = () => {
	return (
		<footer className="py-8 text-center space-y-4 border-t border-white/5 dark:border-white/6">
			<div className="flex justify-center space-x-6 text-sm text-gray-400 dark:text-gray-300">
				<a href="/privacy" className="transition-colors hover:text-black dark:hover:text-white">
					Privacy Policy
				</a>
				<a href="/terms" className="transition-colors hover:text-black dark:hover:text-white">
					Terms of Service
				</a>
			</div>

			<div className="text-sm text-gray-500">
				<p>
					&copy; {new Date().getFullYear()}{" "}
					<span className="text-gray-400">{siteConfig.title}</span>
					<br />
					All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default memo(Footer);
