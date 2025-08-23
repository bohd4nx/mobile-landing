import { memo } from "react";
import { FiStar } from "react-icons/fi";

interface RatingStarsProps {
	rating: number;
	max?: number;
	size?: "sm" | "md" | "lg";
}

const RatingStars = ({ rating, max = 5, size = "md" }: RatingStarsProps) => {
	const sizeClasses = {
		sm: "h-3 w-3",
		md: "h-4 w-4",
		lg: "h-5 w-5",
	};

	return (
		<div className="flex items-center gap-1">
			{Array.from({ length: max }).map((_, i) => (
				<FiStar
					key={`star-${i}-${rating}-${max}`}
					className={`${sizeClasses[size]} ${
						i < rating ? "fill-primary text-primary" : "text-black/30 dark:text-white/30"
					}`}
				/>
			))}
		</div>
	);
};

export default memo(RatingStars);
