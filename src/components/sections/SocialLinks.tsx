import { memo } from "react";
import type { SocialLinksList } from "@/types/components";
import { getIcon } from "@/utils/getIcon";

const SocialLinks = ({ items }: SocialLinksList) => (
	<>
		{items.map((item) => {
			const Icon = getIcon(item.icon);
			return (
				<a
					key={item.label}
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200/50 dark:border-white/5 hover:scale-105 transition-transform"
					aria-label={item.label}
					title={item.label}
				>
					{Icon && (
						<Icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
					)}
				</a>
			);
		})}
	</>
);

export default memo(SocialLinks);
