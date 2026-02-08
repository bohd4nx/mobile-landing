import type { Feature } from "@t/content";
import { getIcon } from "@utils/getIcon";
import { memo } from "react";

const Features = ({ items }: { items: Feature[] }) => {
	return (
		<div className="mb-16">
			<h2 className="mb-6 text-2xl font-semibold text-heading">Features</h2>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{items.map((feature) => {
					const Icon = getIcon(feature.icon);
					return (
						<div key={feature.title} className="card-base p-5 md:p-6">
							<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 dark:bg-white/[0.04]">
								{Icon && (
									<Icon className="h-7 w-7 text-heading opacity-90" />
								)}
							</div>
							<h3 className="mb-2.5 text-xl font-semibold text-gray-800 dark:text-white">
								{feature.title}
							</h3>
							<p className="text-base leading-relaxed text-body">
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
