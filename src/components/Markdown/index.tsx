"use client";

import { motion } from "framer-motion";
import type { MarkdownLayoutProps } from "@/types";
import TableOfContents from "./TableOfContents";

const MarkdownLayout = ({
	htmlContent,
	rawContent,
	title,
	lastUpdated,
}: MarkdownLayoutProps) => (
	<div>
		{title && (
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="relative mb-12 overflow-hidden rounded-2xl border border-gray-200/60 bg-white px-8 py-10 dark:border-white/8 dark:bg-white/4 md:px-12 md:py-12"
			>
				<span className="section-label mb-4 inline-flex">Legal</span>
				<h1 className="mb-3 text-3xl font-black tracking-tight text-gray-900 dark:text-white md:text-4xl">
					{title}
				</h1>
				{lastUpdated && (
					<p className="text-sm text-gray-500 dark:text-white/35">
						Last updated: {lastUpdated}
					</p>
				)}
			</motion.div>
		)}

		<div className="flex gap-16">
			<motion.article
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.1 }}
				className="min-w-0 flex-1"
			>
				<div
					className="prose"
					dangerouslySetInnerHTML={{ __html: htmlContent }}
				/>
			</motion.article>

			<motion.aside
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="hidden w-64 shrink-0 xl:block"
			>
				<TableOfContents content={rawContent} />
			</motion.aside>
		</div>
	</div>
);

export default MarkdownLayout;
