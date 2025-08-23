import { memo } from "react";
import type { SocialLink, SocialLinksProps } from "config";

const SocialLinks = ({ items }: SocialLinksProps) => {
	return (
		<div className="mb-8">
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="mx-auto border-t border-white/10" />
				</div>
				<div className="relative flex justify-center">
					<span className="bg-bg-light px-6 text-sm font-medium tracking-wider text-black/60 dark:bg-bg-dark dark:text-white/60 uppercase">
						Social Media
					</span>
				</div>
			</div>

			<div className="mt-6 flex justify-center gap-4">
				{items.map((link: SocialLink) => {
					const Icon = link.icon;
					return (
						<a
							key={link.label}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group rounded-xl border border-white/10 bg-white/[0.03] dark:bg-bg-dark/30 p-3 transition-all duration-200 hover:bg-bg-light dark:hover:bg-bg-dark/40"
							aria-label={link.label}
						>
							<Icon className="h-5 w-5 text-gray-500 dark:text-gray-400 transition-colors group-hover:text-black dark:group-hover:text-white" />
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default memo(SocialLinks);
