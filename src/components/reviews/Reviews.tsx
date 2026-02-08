import RatingStars from "@reviews/RatingStars";
import type { Review } from "@t/content";
import { motion } from "framer-motion";
import { memo } from "react";

const Reviews = ({ items }: { items: Review[] }) => (
	<div className="mb-16">
		<motion.h2
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4 }}
			className="mb-6 text-2xl font-semibold text-heading"
		>
			User Reviews
		</motion.h2>

		<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
			{items.map((review: Review, index) => (
				<motion.div
					key={review.author}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: index * 0.1 }}
					whileHover={{ scale: 1.02 }}
					className="card-base"
				>
					<div className="p-5 md:p-6 border-b border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02]">
						<div className="flex items-center gap-4">
							{review.avatar ? (
								<img
									src={review.avatar}
									alt={`${review.author} avatar`}
									className="h-12 w-12 rounded-full object-cover border border-gray-300 dark:border-white/10"
								/>
							) : (
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-white/[0.08] text-lg font-semibold text-gray-700 dark:text-white">
									{review.author[0]}
								</div>
							)}
							<div>
								<div className="font-semibold text-lg text-gray-800 dark:text-white">
									{review.author}
								</div>
								<RatingStars rating={review.rating} />
							</div>
						</div>
					</div>
					<div className="p-5 md:p-6">
						<p className="text-body leading-relaxed">{review.text}</p>
					</div>
				</motion.div>
			))}
		</div>
	</div>
);

export default memo(Reviews);
