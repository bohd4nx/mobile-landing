import type {
	DeviceType,
	Screenshots as ScreenshotsType,
} from "@t/screenshots";
import { AnimatePresence, motion } from "framer-motion";
import { memo, useCallback, useState } from "react";
import { FiTablet } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";

const DeviceToggle = ({
	activeDevice,
	onToggle,
}: {
	activeDevice: DeviceType;
	onToggle: (device: DeviceType) => void;
}) => {
	const handleIphoneToggle = useCallback(() => onToggle("iphone"), [onToggle]);
	const handleIpadToggle = useCallback(() => onToggle("ipad"), [onToggle]);

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3 }}
			className="flex items-center justify-center gap-1 rounded-xl border border-gray-300 bg-white p-1 shadow-lg dark:border-white/10 dark:bg-white/[0.04]"
		>
			<motion.button
				type="button"
				onClick={handleIphoneToggle}
				className={`relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
					activeDevice === "iphone"
						? "text-heading"
						: "text-muted hover:bg-gray-100 hover:text-heading dark:hover:bg-white/[0.06]"
				}`}
				whileTap={{ scale: 0.9 }}
			>
				{activeDevice === "iphone" && (
					<motion.div
						layoutId="activeDevice"
						className="absolute inset-0 rounded-lg border border-gray-300/80 bg-gray-100 shadow-md dark:border-white/10 dark:bg-white/10"
						transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
					/>
				)}
				<span className="relative z-10 hidden sm:inline">
					<IoPhonePortraitOutline className="h-4 w-4" />
				</span>
				<span className="relative z-10">iPhone</span>
			</motion.button>

			<motion.button
				type="button"
				onClick={handleIpadToggle}
				className={`relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
					activeDevice === "ipad"
						? "text-heading"
						: "text-muted hover:bg-gray-100 hover:text-heading dark:hover:bg-white/[0.06]"
				}`}
				whileTap={{ scale: 0.9 }}
			>
				{activeDevice === "ipad" && (
					<motion.div
						layoutId="activeDevice"
						className="absolute inset-0 rounded-lg border border-gray-300/80 bg-gray-100 shadow-md dark:border-white/10 dark:bg-white/10"
						transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
					/>
				)}
				<span className="relative z-10 hidden sm:inline">
					<FiTablet className="h-4 w-4" />
				</span>
				<span className="relative z-10">iPad</span>
			</motion.button>
		</motion.div>
	);
};

const Screenshots = ({
	images,
	onOpen,
}: {
	images: ScreenshotsType;
	onOpen: (index: number, device: DeviceType) => void;
}) => {
	const [activeDevice, setActiveDevice] = useState<DeviceType>("iphone");
	const currentImages = images[activeDevice];

	const handleOpen = useCallback(
		(index: number) => {
			onOpen(index, activeDevice);
		},
		[activeDevice, onOpen],
	);

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
				<div
					className="screenshots-scrollbar overflow-x-scroll pb-4"
					style={{ maxHeight: "500px", scrollbarGutter: "stable" }}
				>
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
									onClick={() => handleOpen(index)}
									className="relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none"
								>
									<img
										src={image}
										alt={`Screenshot ${index + 1}`}
										className={`rounded-xl border border-gray-300 dark:border-white/10 object-cover shadow-lg ${
											activeDevice === "iphone"
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

export default memo(Screenshots);
