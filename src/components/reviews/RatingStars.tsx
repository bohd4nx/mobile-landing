import { memo } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const RatingStars = ({ rating, max = 5 }: { rating: number; max?: number }) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.5;
	const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

	return (
		<div className="flex items-center gap-1">
			{Array.from({ length: fullStars }, (_, i) => (
				<FaStar
					key={`full-star-${i + 1}`}
					className="w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400"
				/>
			))}
			{hasHalfStar && (
				<FaStarHalfAlt
					key="half-star"
					className="w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400"
				/>
			)}
			{Array.from({ length: emptyStars }, (_, i) => (
				<FaRegStar
					key={`empty-star-${fullStars + (hasHalfStar ? 1 : 0) + i + 1}`}
					className="w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400"
				/>
			))}
		</div>
	);
};

export default memo(RatingStars);
