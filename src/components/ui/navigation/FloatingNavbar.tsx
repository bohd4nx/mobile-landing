import SocialLinks from "@social/SocialLinks";
import type { FloatingNavbarProps } from "@t/layout";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const NavbarLogo = ({ logo, title }: { logo: string; title: string }) => (
	<a href="/" className="group flex items-center justify-start gap-3 md:gap-4">
		<div className="relative h-11 w-11">
			<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-200/50 to-gray-300/50 blur-sm transition-all group-hover:blur-md dark:from-white/5 dark:to-white/10" />
			<img
				src={logo}
				alt={`${title} Icon`}
				className="relative h-full w-full rounded-xl border border-gray-200/50 object-cover dark:border-white/10"
			/>
		</div>
		<h2 className="text-lg font-bold tracking-tight text-heading transition-colors group-hover:text-gray-900 dark:group-hover:text-white md:text-xl">
			{title}
		</h2>
	</a>
);

const NavbarStoreLinks = ({
	storeLinks,
}: {
	storeLinks: { apple: string; google: string };
}) => (
	<div className="flex gap-2.5 md:justify-center md:gap-3">
		<a
			href={storeLinks.apple}
			target="_blank"
			rel="noopener noreferrer"
			className="store-button group"
		>
			<FaApple className="h-6 w-6 text-gray-600 transition-all group-hover:scale-110 group-hover:text-gray-800 dark:text-gray-300 dark:group-hover:text-white md:h-6 md:w-6" />
			<span className="hidden min-w-0 text-left lg:block">
				<div className="text-xs font-medium leading-tight text-gray-500 transition-colors group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300">
					Download on the
				</div>
				<div className="text-base font-semibold leading-tight tracking-wide text-heading transition-colors group-hover:text-gray-900 dark:group-hover:text-white">
					App Store
				</div>
			</span>
		</a>

		<a
			href={storeLinks.google}
			target="_blank"
			rel="noopener noreferrer"
			className="store-button group"
		>
			<FaGooglePlay className="h-5 w-5 text-gray-600 transition-all group-hover:scale-110 group-hover:text-gray-800 dark:text-gray-300 dark:group-hover:text-white md:h-5 md:w-5" />
			<span className="hidden min-w-0 text-left lg:block">
				<div className="text-xs font-medium leading-tight text-gray-500 transition-colors group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300">
					Get it on
				</div>
				<div className="text-base font-semibold leading-tight tracking-wide text-heading transition-colors group-hover:text-gray-900 dark:group-hover:text-white">
					Google Play
				</div>
			</span>
		</a>
	</div>
);

const FloatingNavbar = ({
	logo,
	title,
	storeLinks,
	socialLinks,
}: FloatingNavbarProps) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsVisible(window.scrollY > 300);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-3 px-3 md:px-6">
					<motion.nav
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -100, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="w-full max-w-[600px] lg:max-w-[1500px] mx-auto bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg shadow-gray-200/20 dark:shadow-black/40 rounded-2xl"
					>
						<div className="px-5 md:px-8 py-4 md:py-4">
							<div className="flex md:grid md:grid-cols-3 items-center justify-between md:gap-4">
								<NavbarLogo logo={logo} title={title} />
								<NavbarStoreLinks storeLinks={storeLinks} />
								<div className="hidden md:flex gap-2.5 justify-end">
									<SocialLinks items={socialLinks} />
								</div>
							</div>
						</div>
					</motion.nav>
				</div>
			)}
		</AnimatePresence>
	);
};

export default FloatingNavbar;
