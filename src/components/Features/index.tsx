"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { getIcon } from "@/getIcon";
import type { FeaturesProps } from "@/types";

const Features = ({ items }: FeaturesProps) => (
	<div>
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4 }}
			className="mb-12 flex flex-col items-center text-center"
		>
			<span className="section-label mb-4">Features</span>
			<h2 className="section-heading max-w-2xl">
				Everything you need, <span className="accent">in one app.</span>
			</h2>
		</motion.div>

		<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
			{items.map((feature, index) => {
				const Icon = getIcon(feature.icon);
				return (
					<motion.div
						key={feature.title}
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
						whileHover={{ y: -4 }}
						className="card-base group relative p-6 transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-violet-500/5"
					>
						<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-100 bg-violet-50 dark:border-violet-500/20 dark:bg-violet-500/10">
							{Icon && (
								<Icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
							)}
						</div>
						<h3 className="mb-2.5 text-lg font-bold text-gray-900 dark:text-white">
							{feature.title}
						</h3>
						<p className="text-base leading-relaxed text-body">
							{feature.description}
						</p>
					</motion.div>
				);
			})}
		</div>
	</div>
);

export default memo(Features);
