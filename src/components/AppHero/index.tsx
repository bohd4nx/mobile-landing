"use client";

import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import RatingStars from "@/components/RatingStars";
import type { AppHeroProps } from "@/types";
import AppInfo from "./AppInfo";
import StoreButtons from "./StoreButtons";

const up = (delay = 0) => ({
	initial: { opacity: 0, y: 28 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.65, delay, ease: [0.22, 0.61, 0.36, 1] as const },
});

const AppHero = ({
	title,
	description,
	storeLinks,
	logo,
	rating,
	ageRating,
	version,
	minimumOS,
	releaseDate,
}: AppHeroProps) => (
	<section className="relative flex min-h-svh flex-col items-center overflow-hidden px-4 text-center">
		<div className="relative z-10 flex w-full max-w-4xl flex-1 flex-col items-center justify-center py-14 sm:py-20">
			<motion.div {...up(0)} className="relative mx-auto mb-5 w-fit sm:mb-8">
				<img
					src={logo}
					alt={`${title} icon`}
					fetchPriority="high"
					loading="eager"
					className="relative h-24 w-24 rounded-3xl border border-gray-200/50 object-cover shadow-2xl dark:border-white/10 sm:h-28 sm:w-28 md:h-32 md:w-32"
				/>
			</motion.div>

			<motion.div
				{...up(0.05)}
				className="mb-3 flex flex-wrap items-center justify-center gap-2.5 sm:mb-6"
			>
				<RatingStars rating={rating.score} />
				<span className="text-sm text-gray-500 dark:text-white/45">
					{rating.score} · {rating.count} ratings
				</span>
				<span className="rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500 dark:border-white/10 dark:bg-white/5 dark:text-white/50">
					{ageRating}
				</span>
			</motion.div>

			<motion.h1
				{...up(0.1)}
				className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem] dark:text-white"
			>
				{title}
			</motion.h1>

			<motion.p
				{...up(0.15)}
				className="mx-auto mb-7 max-w-xl text-base leading-relaxed text-gray-600 sm:mb-10 sm:text-lg dark:text-white/55"
			>
				{description}
			</motion.p>

			<motion.div {...up(0.2)}>
				<StoreButtons storeLinks={storeLinks} />
			</motion.div>

			<motion.div {...up(0.25)}>
				<AppInfo
					version={version}
					minimumOS={minimumOS}
					releaseDate={releaseDate}
				/>
			</motion.div>
		</div>

		<motion.div
			animate={{ y: [0, 8, 0] }}
			transition={{
				repeat: Number.POSITIVE_INFINITY,
				duration: 2.2,
				ease: "easeInOut",
			}}
			className="relative z-10 mb-8 text-gray-400 dark:text-white/20"
			aria-hidden="true"
		>
			<FiChevronDown size={22} />
		</motion.div>
	</section>
);

export default AppHero;
