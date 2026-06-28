"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import RatingStars from "@/components/RatingStars";
import type { ReviewsProps } from "@/types";
import ReviewCard from "./ReviewCard";

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
					<ReviewCard key={review.author} review={review} index={index} />
				))}
			</div>
		</div>
	);
};

export default memo(Reviews);
