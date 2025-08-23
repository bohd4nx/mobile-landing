import { memo } from "react";
import type { FeaturesProps } from "config";

const Features = ({ items }: FeaturesProps) => {
	return (
		<div className="mb-16">
			<h2 className="mb-6 text-2xl font-semibold text-content dark:text-content-dark">Features</h2>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{items.map((feature) => {
					const Icon = feature.icon;
					return (
						<div key={feature.title} className="rounded-2xl border-card bg-white/[0.03] dark:bg-bg-dark/40 p-6">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bg-light dark:bg-bg-dark/30">
								<Icon className="h-6 w-6 text-black dark:text-white opacity-90" />
							</div>
							<h3 className="mb-2 text-lg font-medium text-content dark:text-content-dark">{feature.title}</h3>
							<p className="text-sm leading-relaxed text-content/80 dark:text-content-dark/80">
								{feature.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default memo(Features);
