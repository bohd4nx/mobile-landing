import { motion } from "framer-motion";
import { memo } from "react";
import type { Review, ReviewsProps } from "config";
import RatingStars from "../ui/RatingStars";

const Reviews = ({ items }: ReviewsProps) => {
	return (
		<div className="mb-16">
			<motion.h2
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="mb-6 text-2xl font-semibold text-content dark:text-content-dark"
			>
				User Reviews
			</motion.h2>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				{items.map((review: Review, index: number) => (
					<motion.div
						key={`review-${review.author.replace(/\s+/g, "-")}-${index}`}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1 }}
						className="rounded-2xl border-card bg-white/[0.03] dark:bg-bg-dark/40 p-6"
					>
						<div className="mb-4 flex items-center gap-4">
							<div className="flex-shrink-0">
								{review.avatar ? (
									<img
										src={review.avatar}
										alt={`${review.author} avatar`}
										className="h-12 w-12 rounded-full object-cover border-card"
									/>
								) : (
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-light dark:bg-bg-dark/30 text-black dark:text-white/90">
										{review.author.charAt(0)}
									</div>
								)}
							</div>
							<div>
								<div className="font-medium">{review.author}</div>
								<RatingStars rating={review.rating} />
							</div>
						</div>
						<p className="text-content/80 dark:text-content-dark/80">{review.text}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default memo(Reviews);
