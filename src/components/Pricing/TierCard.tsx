"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import type { TierCardProps } from "@/types";

const TierCard = ({ tier, index }: TierCardProps) => (
	<motion.div
		initial={{ opacity: 0, y: 24 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.4, delay: index * 0.1 }}
		whileHover={{ y: -4 }}
		className={`relative flex flex-col rounded-2xl border p-7 transition-shadow duration-300 ${
			tier.highlighted
				? "border-violet-400/60 bg-white shadow-lg shadow-violet-500/10 dark:border-violet-500/50 dark:bg-violet-500/5"
				: "border-gray-200 bg-white shadow-sm dark:border-white/8 dark:bg-white/4"
		}`}
	>
		{tier.highlighted && (
			<div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-violet-500 dark:bg-violet-400" />
		)}

		{tier.badge && (
			<span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center whitespace-nowrap rounded-full bg-violet-600 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg shadow-violet-500/40 ring-1 ring-violet-400/50">
				{tier.badge}
			</span>
		)}

		<div className="mb-6">
			<p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40">
				{tier.name}
			</p>
			<div className="mb-3 flex items-end gap-1">
				<span className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">
					{tier.price}
				</span>
				{tier.period && (
					<span className="mb-1 text-sm text-gray-500 dark:text-white/40">
						{tier.period}
					</span>
				)}
			</div>
			<p className="text-sm leading-relaxed text-body">{tier.description}</p>
		</div>

		<ul className="mb-8 flex-1 space-y-3">
			{tier.features.map((feature) => (
				<li key={feature} className="flex items-center gap-3 text-sm">
					<span
						className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
							tier.highlighted
								? "bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400"
								: "bg-gray-100 text-gray-600 dark:bg-white/8 dark:text-white/60"
						}`}
					>
						<FiCheck className="h-3 w-3 stroke-[2.5]" />
					</span>
					<span className="text-gray-700 dark:text-white/70">{feature}</span>
				</li>
			))}
		</ul>

		<a
			href={tier.ctaHref}
			className={`w-full rounded-xl px-5 py-3 text-center text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
				tier.highlighted
					? "bg-violet-600 text-white shadow-md shadow-violet-500/20 hover:bg-violet-500"
					: "border border-gray-800 bg-gray-900 text-white hover:bg-gray-800 dark:border-white/10 dark:bg-white/8 dark:hover:bg-white/14"
			}`}
		>
			{tier.cta}
		</a>
	</motion.div>
);

export default TierCard;
