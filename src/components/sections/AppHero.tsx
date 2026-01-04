import { memo } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import type { AppHero as AppHeroProps } from "@/types/components";

const AppHero = ({ title, description, storeLinks, logo }: AppHeroProps) => (
	<div className="mb-16 flex flex-col items-center md:items-start md:flex-row gap-8">
		<div className="flex-shrink-0 md:self-center">
			<div className="rounded-2xl border border-gray-200/50 dark:border-white/10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/[0.02] dark:to-white/[0.05] p-6 w-[192px] h-[192px] flex items-center justify-center shadow-sm">
				<img
					src={logo}
					alt={`${title} Icon`}
					className="h-40 w-40 rounded-2xl object-cover"
				/>
			</div>
		</div>

		<div className="flex flex-1 flex-col justify-between text-center md:text-left">
			<div>
				<h1 className="text-4xl font-bold text-heading mb-3">
					{title}
				</h1>
				<p className="text-lg text-body leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0">
					{description}
				</p>
			</div>

			<div className="flex gap-3 justify-center md:justify-start">
				<a
					href={storeLinks.apple}
					target="_blank"
					rel="noopener noreferrer"
					className="group button-base flex items-center gap-2 px-4 py-3 flex-1 min-w-0 md:flex-initial"
				>
					<div className="flex items-center justify-center w-6 h-6 flex-shrink-0">
						<FaApple className="text-gray-600 dark:text-gray-300 group-hover:scale-110 group-hover:text-gray-800 dark:group-hover:text-white w-5 h-5" />
					</div>
					<span className="text-left min-w-0">
						<div className="text-[10px] font-medium text-muted group-hover:text-gray-600 dark:group-hover:text-gray-300">
							Download on the
						</div>
						<div className="text-xs font-semibold tracking-wide text-heading group-hover:text-gray-900 dark:group-hover:text-white">
							App Store
						</div>
					</span>
				</a>

				<a
					href={storeLinks.google}
					target="_blank"
					rel="noopener noreferrer"
					className="group button-base flex items-center gap-2 px-4 py-3 flex-1 min-w-0 md:flex-initial"
				>
					<div className="flex items-center justify-center w-6 h-6 flex-shrink-0">
						<FaGooglePlay className="text-gray-600 dark:text-gray-300 group-hover:scale-110 group-hover:text-gray-800 dark:group-hover:text-white w-4 h-4" />
					</div>
					<span className="text-left min-w-0">
						<div className="text-[10px] font-medium text-muted group-hover:text-gray-600 dark:group-hover:text-gray-300">
							GET IT ON
						</div>
						<div className="text-xs font-semibold tracking-wide text-heading group-hover:text-gray-900 dark:group-hover:text-white">
							Google Play
						</div>
					</span>
				</a>
			</div>
		</div>
	</div>
);

export default memo(AppHero);
