import FooterLegal from "@footer/FooterLegal";
import FooterLogo from "@footer/FooterLogo";
import SocialLinks from "@social/SocialLinks";
import ThemeToggle from "@ui/shared/ThemeToggle";
import { motion } from "framer-motion";
import { memo } from "react";
import { appData } from "../../data";

const Footer = ({
	name,
	logo,
	description
}: {
	name: string;
	logo: string;
	description: string;
}) => {
	const currentYear = new Date().getFullYear();
	const startYear = 2025;
	const copyrightText = currentYear > startYear
		? `© ${startYear}-${currentYear} All rights reserved.`
		: `© All rights reserved.`;

	return (
		<motion.footer
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="py-10 bg-gray-50 dark:bg-black"
		>
			<div className="container mx-auto px-3 md:px-6">
				<div className="mb-8 h-px w-full bg-gray-200 dark:bg-gray-800" />

				{/* Mobile Layout */}
				<div className="flex flex-col gap-6 md:hidden">
					<div className="flex items-center justify-between">
						<FooterLogo name={name} logo={logo} />
						<ThemeToggle />
					</div>

					<p className="text-lg text-body leading-relaxed">{description}</p>

					<div className="flex items-center justify-between">
						<div className="flex gap-3">
							<SocialLinks items={appData.socialLinks} />
						</div>
						<FooterLegal />
					</div>

					<div className="text-center">
						<div className="text-base text-body">{copyrightText}</div>
					</div>
				</div>

				{/* Desktop Layout */}
				<div className="hidden md:flex flex-col gap-4">
					<div className="flex items-start justify-between">
						<div className="flex flex-col gap-3 max-w-3xl">
							<FooterLogo name={name} logo={logo} />
							<p className="text-lg text-body leading-relaxed">{description}</p>
						</div>
						<ThemeToggle />
					</div>

					<div className="flex items-center justify-between pt-6 border-t border-gray-200/30 dark:border-gray-700/30">
						<div className="flex items-center gap-6">
							<div className="flex gap-3">
								<SocialLinks items={appData.socialLinks} />
							</div>
							<div className="text-base text-body">{copyrightText}</div>
						</div>
						<FooterLegal />
					</div>
				</div>
			</div>
		</motion.footer>
	);
};

export default memo(Footer);
