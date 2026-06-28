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

const LEGAL_LINKS = [
	{ label: "Privacy", href: "/privacy" },
	{ label: "Terms", href: "/terms" },
];

const fade = (delay = 0) => ({
	initial: { opacity: 0, y: 16 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.5, delay },
});

const navLink = (label: string, href: string) => (
	<a
		key={label}
		href={href}
		className="group flex items-center gap-2 text-sm text-body transition-colors hover:text-heading"
	>
		<span className="h-px w-0 bg-violet-500 transition-all duration-300 group-hover:w-3" />
		{label}
	</a>
);

const colHeader = (title: string) => (
	<p className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-white/30">
		{title}
	</p>
);

const Footer = ({ name, logo }: FooterProps) => (
	<footer className="relative px-3 pb-8 pt-12 md:px-6 md:pt-16">
		<div className="mb-10 h-px bg-gray-200 dark:bg-white/8" />

		{/* Desktop: 4-column grid */}
		<div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-8 lg:gap-12">
			{/* Col 1: Brand */}
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
				<p className="max-w-60 text-sm leading-relaxed text-body">
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
				<p className="mt-auto text-xs text-gray-400 dark:text-white/25">
					© {new Date().getFullYear()} {name}. All rights reserved.
				</p>
			</motion.div>

			{/* Col 2: Product */}
			<motion.div {...fade(0.1)} className="flex flex-col gap-4">
				{colHeader("Product")}
				<nav className="flex flex-col gap-3">
					{NAV_LINKS.map(({ label, href }) => navLink(label, href))}
				</nav>
			</motion.div>

			{/* Col 3: Legal */}
			<motion.div {...fade(0.15)} className="flex flex-col gap-4">
				{colHeader("Legal")}
				<nav className="flex flex-col gap-3">
					{LEGAL_LINKS.map(({ label, href }) => navLink(label, href))}
				</nav>
			</motion.div>

			{/* Col 4: Follow us */}
			<motion.div {...fade(0.2)} className="flex flex-col items-end gap-4">
				{colHeader("Follow us")}
				<div className="flex flex-wrap justify-end gap-2">
					<SocialLinks items={site.social} />
				</div>
				<ThemeToggle />
			</motion.div>
		</div>

		{/* Mobile: compact stacked layout */}
		<motion.div {...fade(0)} className="flex flex-col gap-6 md:hidden">
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

			<div className="flex gap-8">
				{/* Product nav: 2 columns */}
				<nav className="flex flex-1 gap-8">
					<div className="flex flex-col gap-3">
						{NAV_LINKS.slice(0, 3).map(({ label, href }) => (
							<a key={label} href={href} className="text-sm text-body transition-colors hover:text-heading">{label}</a>
						))}
					</div>
					<div className="flex flex-col gap-3">
						{NAV_LINKS.slice(3).map(({ label, href }) => (
							<a key={label} href={href} className="text-sm text-body transition-colors hover:text-heading">{label}</a>
						))}
					</div>
				</nav>
				{/* Legal: stacked */}
				<div className="flex flex-col gap-3">
					{LEGAL_LINKS.map(({ label, href }) => (
						<a key={label} href={href} className="text-sm text-body transition-colors hover:text-heading">{label}</a>
					))}
				</div>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex gap-2">
					<SocialLinks items={site.social} />
				</div>
				<p className="text-xs text-gray-400 dark:text-white/25">
					© {new Date().getFullYear()} {name}.
				</p>
			</div>
		</motion.div>
	</footer>
);

export default Footer;
