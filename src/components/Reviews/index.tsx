"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import RatingStars from "@/components/RatingStars";
import type { ReviewsProps } from "@/types";

const Reviews = ({ items }: ReviewsProps) => {
	const [featured, ...rest] = items;

	return (
		<div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.4 }}
				className="mb-12 flex flex-col items-center text-center"
			>
				<span className="section-label mb-4">Reviews</span>
				<h2 className="section-heading max-w-2xl">
					Loved by <span className="accent">thousands of users.</span>
				</h2>
			</motion.div>

			{featured && (
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
					className="card-base relative mb-5 p-8 md:p-10"
				>
					<div className="mb-4 select-none font-serif text-5xl leading-none text-violet-400/40 dark:text-violet-500/30 md:text-6xl">
						"
					</div>
					<p className="mb-6 max-w-3xl text-xl font-medium leading-relaxed text-gray-800 dark:text-white/90 md:text-2xl">
						{featured.text}
					</p>
					<div className="flex items-center gap-4">
						<div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-600 dark:bg-violet-500/15 dark:text-violet-400">
							{featured.author[0]}
						</div>
						<div>
							<p className="font-semibold text-gray-900 dark:text-white">
								{featured.author}
							</p>
							<RatingStars rating={featured.rating} />
						</div>
					</div>
				</motion.div>
			)}

			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				{rest.map((review, index) => (
					<motion.div
						key={review.author}
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: index * 0.08 }}
						whileHover={{ y: -4 }}
						className="card-base group relative p-6 transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-violet-500/5"
					>
						<div className="mb-4">
							<RatingStars rating={review.rating} />
						</div>
						<p className="mb-5 text-base leading-relaxed text-body">
							{review.text}
						</p>
						<div className="flex items-center gap-3">
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-700 dark:bg-white/8 dark:text-white/70">
								{review.author[0]}
							</div>
							<p className="text-sm font-semibold text-gray-900 dark:text-white">
								{review.author}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default memo(Reviews);
