import { memo } from "react";
import type { SocialLinksList } from "@/types/components";
import { getIcon } from "@/utils/getIcon";

const SocialLinks = ({ items }: SocialLinksList) => (
	<div className="mb-8">
		<div className="relative">
			<div className="absolute inset-0 flex items-center">
				<div className="mx-auto border-t border-gray-300 dark:border-white/10" />
			</div>
			<div className="relative flex justify-center">
				<span className="bg-gray-50 dark:bg-black px-6 text-sm font-medium tracking-wider text-gray-500 dark:text-white/50 uppercase">
					Social Media
				</span>
			</div>
		</div>

		<div className="mt-6 flex justify-center gap-4">
			{items.map((item) => {
				const Icon = getIcon(item.icon);
				return (
					<a
						key={item.label}
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						className="group card-base p-2.5 md:p-3 hover:bg-gray-50 dark:hover:bg-white/[0.05]"
						aria-label={item.label}
					>
						{Icon && (
							<Icon className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white" />
						)}
					</a>
				);
			})}
		</div>
	</div>
);

export default memo(SocialLinks);
