"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import type { PricingProps } from "@/types";
import TierCard from "./TierCard";

const Pricing = ({ tiers }: PricingProps) => (
	<div>
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4 }}
			className="mb-12 flex flex-col items-center text-center"
		>
			<span className="section-label mb-4">Pricing</span>
			<h2 className="section-heading max-w-2xl">
				Simple pricing, <span className="accent">no surprises.</span>
			</h2>
		</motion.div>

		<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
			{tiers.map((tier, index) => (
				<TierCard key={tier.name} tier={tier} index={index} />
			))}
		</div>
	</div>
);

export default memo(Pricing);
