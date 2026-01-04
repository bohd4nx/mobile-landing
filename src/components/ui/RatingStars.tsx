import { memo } from "react";
import { FiStar } from "react-icons/fi";
import type { RatingStarsProps } from "@/types/ui";

const RatingStars = ({ rating, max = 5 }: RatingStarsProps) => (
	<div className="flex items-center gap-1">
		{Array.from({ length: max }).map((_, i) => (
			<FiStar
				key={`star-${i}-${max}`}
				className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-white/30"}`}
			/>
		))}
	</div>
);

export default memo(RatingStars);
