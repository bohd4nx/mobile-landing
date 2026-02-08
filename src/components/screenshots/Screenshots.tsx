import DeviceToggle from "@screenshots/DeviceToggle";
import type { Screenshots as ScreenshotsType } from "@t/screenshots";
import { areImagesEqual } from "@t/screenshots";
import { AnimatePresence, motion } from "framer-motion";
import { memo, useState } from "react";

const Screenshots = ({ images }: { images: ScreenshotsType }) => {
	const [activeDevice, setActiveDevice] = useState<"iphone" | "ipad">("iphone");
	const currentImages = images[activeDevice];

	return (
		<div className="mb-16">
			<div className="mb-6 flex items-center justify-between">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
					className="text-2xl font-semibold text-heading"
				>
					Screenshots
				</motion.h2>
				<DeviceToggle activeDevice={activeDevice} onToggle={setActiveDevice} />
			</div>
			<div className="relative overflow-hidden">
				<div className="screenshots-scrollbar overflow-x-scroll pb-4" style={{ maxHeight: '500px', scrollbarGutter: 'stable' }}>
					<AnimatePresence mode="wait">
						<motion.div
							key={activeDevice}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.3 }}
							className="flex gap-6"
						>
							{currentImages.map((image: string, index: number) => (
								<motion.button
									key={`${activeDevice}-${index}`}
									type="button"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.3, delay: index * 0.05 }}
									whileHover={{ scale: 1.05, y: -5 }}
									onClick={() => window.dispatchEvent(new CustomEvent('openLightbox', { detail: { index, device: activeDevice } }))}
									className="relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none"
								>
									<img
										src={image}
										alt={`Screenshot ${index + 1}`}
										className={`rounded-xl border border-gray-300 dark:border-white/10 object-cover shadow-lg ${activeDevice === "iphone"
											? "aspect-[9/16] w-[260px]"
											: "aspect-[4/3] w-[360px]"
											}`}
										loading="lazy"
									/>
								</motion.button>
							))}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default memo(Screenshots, areImagesEqual);
