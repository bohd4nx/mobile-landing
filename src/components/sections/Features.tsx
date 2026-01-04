import { memo } from "react";
import type { FeaturesList } from "@/types/components";

const Features = ({ items }: FeaturesList) => (
	<div className="mb-16">
		<h2 className="mb-6 text-2xl font-semibold text-heading">
			Features
		</h2>
		<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
			{items.map(({ title, description, icon: Icon }) => (
				<div key={title} className="card-base p-6">
					<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-white/[0.04]">
						<Icon className="h-6 w-6 text-gray-700 dark:text-white opacity-90" />
					</div>
					<h3 className="mb-2 text-lg font-medium text-heading">
						{title}
					</h3>
					<p className="text-sm leading-relaxed text-body">
						{description}
					</p>
				</div>
			))}
		</div>
	</div>
);

export default memo(Features);
