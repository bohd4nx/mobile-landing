import { siteConfig } from "@config/site";
import ThemeToggle from "@/ui/ThemeToggle";
import { LegalLinks, Logo, SocialIcons } from "./FooterComponents";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const copyrightText = `© 2025-${currentYear} All rights reserved.`;

	return (
		<footer className="py-10 bg-gray-50 dark:bg-black">
			<div className="container mx-auto px-3 md:px-6">
				<div className="mb-8 h-px w-full bg-gray-200 dark:bg-gray-800" />

				{/* Mobile Layout */}
				<div className="flex flex-col gap-6 md:hidden">
					<div className="flex items-center justify-between">
						<Logo />
						<ThemeToggle />
					</div>

					<p className="text-base text-body leading-relaxed">
						{siteConfig.description}
					</p>

					<div className="flex items-center justify-between">
						<SocialIcons />
						<LegalLinks className="text-sm" />
					</div>

					<div className="text-center">
						<div className="text-base text-neutral-500 dark:text-neutral-400">
							{copyrightText}
						</div>
					</div>
				</div>

				{/* Desktop Layout */}
				<div className="hidden md:flex flex-col gap-4">
					<div className="flex items-start justify-between">
						<div className="flex flex-col gap-3 max-w-lg">
							<Logo />
							<p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
								{siteConfig.description}
							</p>
						</div>
						<ThemeToggle />
					</div>

					<div className="flex items-center justify-between pt-6 border-t border-gray-200/30 dark:border-gray-700/30">
						<div className="flex items-center gap-6">
							<SocialIcons />
							<div className="text-base text-neutral-500 dark:text-neutral-400">
								{copyrightText}
							</div>
						</div>
						<LegalLinks />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default (Footer);