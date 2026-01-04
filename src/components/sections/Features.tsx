import { memo } from "react";
import type { FeaturesList } from "@/types/components";
import { getIcon } from "@/utils/getIcon";

const Features = ({ items }: FeaturesList) => {
	return (
		<div className="mb-16">
			<h2 className="mb-6 text-2xl font-semibold text-heading">Features</h2>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{items.map((feature) => {
					const Icon = getIcon(feature.icon);
					return (
						<div key={feature.title} className="card-base p-3 md:p-6">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-white/[0.04]">
								{Icon && (
									<Icon className="h-6 w-6 text-gray-700 dark:text-white opacity-90" />
								)}
							</div>
							<h3 className="mb-2 text-lg font-medium text-heading">
								{feature.title}
							</h3>
							<p className="text-sm leading-relaxed text-body">
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
