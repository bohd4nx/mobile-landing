"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import type { GalleryProps } from "@/types";

const Gallery = ({ images, onOpen }: GalleryProps) => (
	<div>
		<div className="mb-10 flex flex-col items-center gap-4 text-center">
			<motion.span
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.4 }}
				className="section-label"
			>
				Screenshots
			</motion.span>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.4, delay: 0.05 }}
				className="section-heading"
			>
				See it <span className="accent">in action.</span>
			</motion.h2>
		</div>

		<div className="screenshots-scrollbar overflow-x-scroll overflow-y-visible py-6 scrollbar-gutter-stable">
			<div className="flex gap-4">
				{images.map((src, index) => (
					<motion.button
						// biome-ignore lint/suspicious/noArrayIndexKey: screenshot list has no stable id
						key={index}
						type="button"
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.35, delay: index * 0.06 }}
						whileHover={{ scale: 1.03, y: -6 }}
						whileTap={{ scale: 0.97 }}
						onClick={() => onOpen(index)}
						className="group relative shrink-0 focus:outline-none"
					>
						<img
							src={src}
							alt={`Screenshot ${index + 1}`}
							loading="lazy"
							className="aspect-9/16 w-52 rounded-2xl border border-gray-200 object-cover shadow-xl transition-shadow duration-300 group-hover:shadow-2xl dark:border-white/10 md:w-64"
						/>
					</motion.button>
				))}
			</div>
		</div>
	</div>
);

export default memo(Gallery);
