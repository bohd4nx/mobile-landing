"use client";

import type { AppInfoProps } from "@/types";

const AppInfo = ({ version, minimumOS, releaseDate }: AppInfoProps) => {
	if (!version && !minimumOS && !releaseDate) return null;
	return (
		<div className="flex flex-wrap justify-center gap-2">
			{version && (
				<span className="info-badge text-xs">
					<span className="font-medium text-gray-500 dark:text-white/40">
						Version
					</span>
					<span className="font-semibold text-heading">{version}</span>
				</span>
			)}
			{minimumOS && (
				<span className="info-badge text-xs">
					<span className="font-medium text-gray-500 dark:text-white/40">
						Requires
					</span>
					<span className="font-semibold text-heading">iOS {minimumOS}+</span>
				</span>
			)}
			{releaseDate && (
				<span className="info-badge text-xs">
					<span className="font-medium text-gray-500 dark:text-white/40">
						Updated
					</span>
					<span className="font-semibold text-heading">{releaseDate}</span>
				</span>
			)}
		</div>
	);
};

export default AppInfo;
