import { memo } from "react";
import type { ReviewsList } from "@/types/components";
import type { Review } from "@/types/content";
import RatingStars from "@/ui/RatingStars";

const Reviews = ({ items }: ReviewsList) => (
	<div className="mb-16">
		<h2 className="mb-6 text-2xl font-semibold text-heading">
			User Reviews
		</h2>

		<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
			{items.map((review: Review) => (
				<div key={review.author} className="card-base p-3 md:p-6">
					<div className="mb-4 flex items-center gap-4">
						{review.avatar ? (
							<img
								src={review.avatar}
								alt={`${review.author} avatar`}
								className="h-12 w-12 rounded-full object-cover border border-gray-300 dark:border-white/10"
							/>
						) : (
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-white/[0.08] text-gray-800 dark:text-white/90">
								{review.author[0]}
							</div>
						)}
						<div>
							<div className="font-medium text-heading">
								{review.author}
							</div>
							<RatingStars rating={review.rating} />
						</div>
					</div>
					<p className="text-body">{review.text}</p>
				</div>
			))}
		</div>
	</div>
);

export default memo(Reviews);
