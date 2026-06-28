"use client";

import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/config";
import type { FooterProps } from "@/types";

const NAV_LINKS = [
	{ label: "Features", href: "#features" },
	{ label: "Screenshots", href: "#screenshots" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "Reviews", href: "#reviews" },
	{ label: "FAQ", href: "#faq" },
];

const fade = (delay = 0) => ({
	initial: { opacity: 0, y: 16 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.5, delay },
});

const Footer = ({ name, logo }: FooterProps) => (
	<footer className="relative px-3 pb-8 pt-12 md:px-6 md:pt-16">
		<div className="mb-10 h-px bg-gray-200 dark:bg-white/8" />

		{/* Desktop: 3-column grid */}
		<div className="hidden md:grid md:grid-cols-3 md:gap-8 lg:gap-16">
			<motion.div {...fade(0)} className="flex flex-col gap-5">
				<a href="/" className="flex items-center gap-3">
					<img
						src={logo}
						alt={`${name} logo`}
						className="h-10 w-10 rounded-xl border border-gray-200/60 object-cover dark:border-white/10"
					/>
					<span className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
						{name}
					</span>
				</a>
				<p className="max-w-65 text-sm leading-relaxed text-body">
					{site.description}
				</p>
				<div className="flex flex-wrap gap-2">
					<a
						href={site.storeLinks.apple}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2.5 rounded-xl bg-gray-900 px-4 py-2.5 transition-all duration-200 hover:opacity-80 dark:bg-white"
					>
						<FaApple className="h-4 w-4 shrink-0 text-white dark:text-black" />
						<span className="text-left">
							<span className="block text-[9px] font-normal leading-tight text-white/60 dark:text-black/50">
								Download on the
							</span>
							<span className="block text-xs font-bold leading-tight text-white dark:text-black">
								App Store
							</span>
						</span>
					</a>
					<a
						href={site.storeLinks.google}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-4 py-2.5 transition-all duration-200 hover:bg-gray-50 dark:border-white/12 dark:bg-white/6 dark:hover:bg-white/10"
					>
						<FaGooglePlay className="h-4 w-4 shrink-0 text-gray-800 dark:text-white" />
						<span className="text-left">
							<span className="block text-[9px] font-normal leading-tight text-gray-500 dark:text-white/45">
								Get it on
							</span>
							<span className="block text-xs font-bold leading-tight text-gray-900 dark:text-white">
								Google Play
							</span>
						</span>
					</a>
				</div>
			</motion.div>

			<motion.div {...fade(0.1)} className="flex flex-col gap-5">
				<p className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-white/30">
					Product
				</p>
				<nav className="flex flex-col gap-3">
					{NAV_LINKS.map(({ label, href }) => (
						<a
							key={label}
							href={href}
							className="group flex items-center gap-2 text-sm text-body transition-colors hover:text-heading"
						>
							<span className="h-px w-0 bg-violet-500 transition-all duration-300 group-hover:w-3" />
							{label}
						</a>
					))}
				</nav>
			</motion.div>

			<motion.div {...fade(0.2)} className="flex flex-col items-end gap-5">
				<p className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-white/30">
					Follow us
				</p>
				<div className="flex flex-wrap gap-2">
					<SocialLinks items={site.social} />
				</div>
				<ThemeToggle />
			</motion.div>
		</div>

		{/* Mobile: compact stacked layout */}
		<motion.div {...fade(0)} className="flex flex-col gap-8 md:hidden">
			<div className="flex items-center justify-between">
				<a href="/" className="flex items-center gap-2.5">
					<img
						src={logo}
						alt={`${name} logo`}
						className="h-9 w-9 rounded-xl border border-gray-200/60 object-cover dark:border-white/10"
					/>
					<span className="font-bold tracking-tight text-gray-900 dark:text-white">
						{name}
					</span>
				</a>
				<ThemeToggle />
			</div>

			<nav className="grid grid-cols-2 gap-x-4 gap-y-3">
				{NAV_LINKS.map(({ label, href }) => (
					<a
						key={label}
						href={href}
						className="text-sm text-body transition-colors hover:text-heading"
					>
						{label}
					</a>
				))}
			</nav>

			<div className="flex items-center justify-between">
				<div className="flex gap-2">
					<SocialLinks items={site.social} />
				</div>
				<div className="flex gap-2">
					<a
						href={site.storeLinks.apple}
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-900 transition-opacity hover:opacity-80 dark:bg-white"
					>
						<FaApple className="h-4 w-4 text-white dark:text-black" />
					</a>
					<a
						href={site.storeLinks.google}
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-8 w-8 items-center justify-center rounded-xl border border-gray-200 bg-white transition-colors hover:bg-gray-50 dark:border-white/12 dark:bg-white/6"
					>
						<FaGooglePlay className="h-4 w-4 text-gray-800 dark:text-white" />
					</a>
				</div>
			</div>
		</motion.div>

		<motion.div
			{...fade(0.3)}
			className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-t border-gray-200/60 pt-6 text-xs text-gray-400 dark:border-white/6 dark:text-white/25"
		>
			<span>© {new Date().getFullYear()} {name}.</span>
			<span className="hidden sm:inline h-3 w-px bg-gray-200 dark:bg-white/10" />
			<a href="/privacy" className="transition-colors hover:text-heading">Privacy</a>
			<span>·</span>
			<a href="/terms" className="transition-colors hover:text-heading">Terms</a>
		</motion.div>
	</footer>
);

export default Footer;
