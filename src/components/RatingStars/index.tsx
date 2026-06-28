import { memo } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import type { RatingStarsProps } from "@/types";

const starClass = "h-3.5 w-3.5 text-yellow-500 dark:text-yellow-400";

const RatingStars = ({ rating, max = 5 }: RatingStarsProps) => (
	<div className="flex items-center gap-1">
		{Array.from({ length: max }, (_, i) => {
			const pos = i + 1;
			const full = Math.floor(rating);
			const hasHalf = rating % 1 >= 0.5;

			if (pos <= full) return <FaStar key={pos} className={starClass} />;
			if (pos === full + 1 && hasHalf)
				return <FaStarHalfAlt key={pos} className={starClass} />;
			return <FaRegStar key={pos} className={starClass} />;
		})}
	</div>
);

export default memo(RatingStars);
