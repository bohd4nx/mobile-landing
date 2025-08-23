import { motion } from "framer-motion";
import { memo } from "react";
import type { FAQProps } from "config";

const FAQ = ({ items }: FAQProps) => {
	return (
		<div className="mb-16">
			<motion.h2
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="mb-6 text-2xl font-semibold text-content dark:text-content-dark"
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
						transition={{ delay: index * 0.1 }}
						className="overflow-hidden rounded-xl border-card bg-white/[0.03] dark:bg-bg-dark/40"
					>
						<details className="group">
							<summary className="flex cursor-pointer items-center justify-between p-6">
								<h3 className="pr-6 font-medium text-content dark:text-content-dark">{item.question}</h3>
								<svg
									className="h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-180"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-label="Toggle answer"
								>
									<title>Toggle answer</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</summary>
							<div className="px-6 pb-6">
								<div className="border-t-card pt-6">
									<p className="text-content/80 dark:text-content-dark/80">{item.answer}</p>
								</div>
							</div>
						</details>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default memo(FAQ);
