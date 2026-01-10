import { siteConfig } from "@config/site";
import { memo } from "react";
import { FaApple, FaGooglePlay, FaStar } from "react-icons/fa";
import type { AppHero as AppHeroProps } from "@/types/components";

const AppHero = ({ title, description, storeLinks, logo }: AppHeroProps) => (
	<div className="mb-16 flex flex-col md:flex-row gap-8 items-start">
		<div className="flex-shrink-0 self-center">
			<div className="group/icon rounded-2xl border border-gray-200/50 dark:border-white/10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/[0.02] dark:to-white/[0.05] p-6 w-[192px] h-[192px] flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300">
				<img
					src={logo}
					alt={`${title} Icon`}
					className="h-40 w-40 rounded-2xl object-cover group-hover/icon:scale-105 transition-transform duration-300"
				/>
			</div>
		</div>

		<div className="flex flex-1 flex-col justify-between text-center md:text-left w-full md:w-auto">
			<div>
				<h1 className="text-4xl font-bold text-heading mb-2">
					{title}
				</h1>

				<div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
					<div className="flex items-center gap-1.5">
						<FaStar className="w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400" />
						<FaStar className="w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400" />
						<FaStar className="w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400" />
						<FaStar className="w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400" />
						<FaStar className="w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400" />
						<span className="text-sm font-medium text-body ml-1">{siteConfig.rating.score} · {siteConfig.rating.count} ratings</span>
					</div>
					<div className="px-2 py-0.5 rounded-md border border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/[0.05] text-xs font-semibold text-gray-700 dark:text-gray-300">
						{siteConfig.ageRating}
					</div>
				</div>

				<p className="text-lg text-body leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0">
					{description}
				</p>
			</div>

			<div className="grid grid-cols-2 gap-3 sm:gap-4 md:flex md:flex-row">
				<a
					href={storeLinks.apple}
					target="_blank"
					rel="noopener noreferrer"
					className="group button-base flex items-center gap-3 px-5 py-4 justify-center hover:scale-[1.02] hover:shadow-md active:scale-[0.98] transition-all duration-200"
				>
					<div className="flex items-center justify-center w-7 h-7 flex-shrink-0">
						<FaApple className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white w-6 h-6 transition-colors" />
					</div>
					<span className="text-left min-w-0">
						<div className="text-xs font-medium text-muted group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
							Download on the
						</div>
						<div className="text-base font-semibold tracking-wide text-heading group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
							App Store
						</div>
					</span>
				</a>

				<a
					href={storeLinks.google}
					target="_blank"
					rel="noopener noreferrer"
					className="group button-base flex items-center gap-3 px-5 py-4 justify-center hover:scale-[1.02] hover:shadow-md active:scale-[0.98] transition-all duration-200"
				>
					<div className="flex items-center justify-center w-7 h-7 flex-shrink-0">
						<FaGooglePlay className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white w-5 h-5 transition-colors" />
					</div>
					<span className="text-left min-w-0">
						<div className="text-xs font-medium text-muted group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
							Get it on
						</div>
						<div className="text-base font-semibold tracking-wide text-heading group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
							Google Play
						</div>
					</span>
				</a>
			</div>
		</div>
	</div>
);

export default memo(AppHero);
