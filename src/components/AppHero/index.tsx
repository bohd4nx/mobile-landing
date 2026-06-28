"use client";

import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import RatingStars from "@/components/RatingStars";
import type { AppHeroProps } from "@/types";

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

			<motion.div
				{...up(0.2)}
				className="mb-8 flex flex-col items-center gap-3 xs:flex-row xs:justify-center sm:mb-12"
			>
				<a
					href={storeLinks.apple}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-3 rounded-xl bg-gray-900 px-6 py-3.5 font-semibold text-white shadow-lg shadow-black/25 transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] dark:bg-white dark:text-black"
				>
					<FaApple className="h-5 w-5 shrink-0" />
					<span className="text-left">
						<span className="block text-[10px] font-normal leading-tight opacity-60">
							Download on the
						</span>
						<span className="block text-sm font-bold leading-tight">
							App Store
						</span>
					</span>
				</a>
				<a
					href={storeLinks.google}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-gray-50 active:scale-[0.98] dark:border-white/15 dark:bg-white/8 dark:text-white dark:hover:bg-white/12"
				>
					<FaGooglePlay className="h-5 w-5 shrink-0" />
					<span className="text-left">
						<span className="block text-[10px] font-normal leading-tight text-gray-500 dark:text-white/50">
							Get it on
						</span>
						<span className="block text-sm font-bold leading-tight">
							Google Play
						</span>
					</span>
				</a>
			</motion.div>

			{(version || minimumOS || releaseDate) && (
				<motion.div
					{...up(0.25)}
					className="flex flex-wrap justify-center gap-2"
				>
					{version && (
						<span className="info-badge text-xs">
							<span className="font-medium text-gray-500 dark:text-white/40">
								Version
							</span>
							<span className="font-semibold text-heading">{version}</span>
						</span>
					)}
					{minimumOS && (
						<span className="info-badge text-xs">
							<span className="font-medium text-gray-500 dark:text-white/40">
								Requires
							</span>
							<span className="font-semibold text-heading">
								iOS {minimumOS}+
							</span>
						</span>
					)}
					{releaseDate && (
						<span className="info-badge text-xs">
							<span className="font-medium text-gray-500 dark:text-white/40">
								Updated
							</span>
							<span className="font-semibold text-heading">{releaseDate}</span>
						</span>
					)}
				</motion.div>
			)}
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
