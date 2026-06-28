"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import type { FeaturesProps } from "@/types";
import FeatureCard from "./FeatureCard";

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
			{items.map((feature, index) => (
				<FeatureCard key={feature.title} feature={feature} index={index} />
			))}
		</div>
	</div>
);

export default memo(Features);
