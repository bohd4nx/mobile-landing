import { AnimatePresence, motion } from "framer-motion";
import { memo, useState } from "react";
import type { ScreenshotsProps } from "config";
import { areImagesEqual } from "config";
import DeviceToggle from "../ui/DeviceToggle";

const Screenshots = ({ images }: ScreenshotsProps) => {
	const [activeDevice, setActiveDevice] = useState<"iphone" | "ipad">("iphone");
	const currentImages = images[activeDevice];

	return (
		<div className="mb-16">
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-2xl font-semibold text-content dark:text-content-dark">Screenshots</h2>
				<DeviceToggle activeDevice={activeDevice} onToggle={setActiveDevice} />
			</div>
			<div
				className={`relative overflow-hidden ${activeDevice === "iphone" ? "min-h-[400px]" : "min-h-[300px]"}`}
			>
				<AnimatePresence mode="wait">
					<motion.div
						key={activeDevice}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -20 }}
						transition={{ duration: 0.3 }}
						className="screenshots-container scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20 dark:scrollbar-track-white/3 dark:scrollbar-thumb-white/8"
						onAnimationComplete={() => {
							const container = document.querySelector(
								".screenshots-container",
							);
							if (container) container.classList.add("overflow-x-auto");
						}}
						onAnimationStart={() => {
							const container = document.querySelector(
								".screenshots-container",
							);
							if (container) container.classList.remove("overflow-x-auto");
						}}
					>
						<div className="flex gap-6 pb-4">
							{currentImages.map((image, index) => (
								<motion.button
									key={image}
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: 1,
										y: 0,
										transition: { delay: index * 0.1 },
									}}
									exit={{ opacity: 0, y: 20 }}
									type="button"
									onClick={() => window.openLightbox?.(index, activeDevice)}
									className="relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none"
								>
									<img
										src={image}
										alt={`Screenshot ${index + 1}`}
										className={`rounded-xl border-card object-cover ${
											activeDevice === "iphone"
												? "aspect-[9/16] w-[260px]"
												: "aspect-[4/3] w-[360px]"
										}`}
										loading="lazy"
									/>
								</motion.button>
							))}
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default memo(Screenshots, areImagesEqual);
