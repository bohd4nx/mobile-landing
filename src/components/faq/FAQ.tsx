import type { FAQ as FAQType } from "@t/content";
import { motion } from "framer-motion";
import { memo } from "react";

const FAQ = ({ items }: { items: FAQType[] }) => (
	<div className="mb-0">
		<motion.h2
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4 }}
			className="mb-6 text-2xl font-semibold text-heading"
		>
			FAQ
		</motion.h2>
		<div className="space-y-4">
			{items.map((item, index) => (
				<motion.div
					key={item.question}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: index * 0.1 }}
					className="card-base"
				>
					<details className="group">
						<summary className="flex cursor-pointer items-center justify-between p-5 md:p-6 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors rounded-2xl">
							<h3 className="pr-6 font-semibold text-lg text-gray-800 dark:text-white">
								{item.question}
							</h3>
							<svg
								className="h-5 w-5 flex-shrink-0 group-open:rotate-180 text-gray-500 dark:text-gray-400 transition-transform duration-200"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-label="Toggle answer visibility"
								role="img"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</summary>
						<div className="border-t border-gray-200 dark:border-white/5 px-5 pb-5 pt-5 md:px-6 md:pb-6 md:pt-6">
							<p className="text-body leading-relaxed">{item.answer}</p>
						</div>
					</details>
				</motion.div>
			))}
		</div>
	</div>
);

export default memo(FAQ);
