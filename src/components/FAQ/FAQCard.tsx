"use client";

import { motion } from "framer-motion";
import type { FAQCardProps } from "@/types";

const FAQCard = ({ item, index }: FAQCardProps) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
		className="card-base flex flex-col gap-3 p-6"
	>
		<div className="flex items-center gap-3">
			<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-violet-100 bg-violet-50 text-[11px] font-bold tabular-nums text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400">
				{String(index + 1).padStart(2, "0")}
			</span>
			<h3 className="text-sm font-semibold text-gray-900 dark:text-white md:text-base">
				{item.question}
			</h3>
		</div>
		<p className="text-body text-sm leading-relaxed md:text-base">
			{item.answer}
		</p>
	</motion.div>
);

export default FAQCard;
