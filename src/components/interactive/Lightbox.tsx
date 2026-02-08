import { AnimatePresence, motion } from "framer-motion";
import { memo, useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import type { Screenshots } from "@/types/screenshots";
import { areImagesEqual } from "@/types/screenshots";

declare global {
	interface Window {
		openLightbox: (index: number, device: "iphone" | "ipad") => void;
	}
}

const Lightbox = ({ images }: { images: Screenshots }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [activeDevice, setActiveDevice] = useState<"iphone" | "ipad">("iphone");
	const currentImages = images[activeDevice];

	useEffect(() => {
		window.openLightbox = (index: number, device: "iphone" | "ipad") => {
			setCurrentIndex(index);
			setActiveDevice(device);
			setIsOpen(true);
		};
		return () => {
			window.openLightbox = null as unknown as typeof window.openLightbox;
		};
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.documentElement.style.overflow = "hidden";
			document.documentElement.style.paddingRight = "0px";
		} else {
			document.documentElement.style.overflow = "";
			document.documentElement.style.paddingRight = "";
		}

		return () => {
			document.documentElement.style.overflow = "";
			document.documentElement.style.paddingRight = "";
		};
	}, [isOpen]);

	const handlePrevious = useCallback(() => {
		setCurrentIndex(
			(prev) => (prev - 1 + currentImages.length) % currentImages.length,
		);
	}, [currentImages.length]);

	const handleNext = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % currentImages.length);
	}, [currentImages.length]);

	useEffect(() => {
		if (!isOpen) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") handlePrevious();
			if (e.key === "ArrowRight") handleNext();
			if (e.key === "Escape") setIsOpen(false);
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [handleNext, handlePrevious, isOpen]);

	if (!isOpen) return null;

	return (
		<AnimatePresence mode="wait">
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 dark:bg-black/70 backdrop-blur-md"
					onClick={() => setIsOpen(false)}
				>
					<motion.button
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.2 }}
						type="button"
						onClick={() => setIsOpen(false)}
						className="button-base absolute right-4 top-4 p-3 text-heading transition-colors rounded-full bg-white/80 dark:bg-black/60 hover:bg-white/90 dark:hover:bg-black/80 backdrop-blur-sm border-gray-200/50 dark:border-white/10 shadow-lg"
						aria-label="Close lightbox"
					>
						<FiX size={20} />
					</motion.button>

					<motion.button
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -20 }}
						transition={{ duration: 0.2 }}
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							handlePrevious();
						}}
						className="button-base absolute left-4 top-1/2 -translate-y-1/2 p-3 text-heading transition-colors rounded-full bg-white/80 dark:bg-black/60 hover:bg-white/90 dark:hover:bg-black/80 backdrop-blur-sm border-gray-200/50 dark:border-white/10 shadow-lg"
						aria-label="Previous image"
					>
						<FiChevronLeft size={20} />
					</motion.button>

					<motion.img
						key={currentIndex}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{ duration: 0.2 }}
						src={currentImages[currentIndex]}
						alt={`Screenshot ${currentIndex + 1}`}
						className="max-h-[95vh] max-w-[95vw] md:max-h-[90vh] md:max-w-[85vw] object-contain rounded-xl shadow-2xl"
						onClick={(e) => e.stopPropagation()}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.stopPropagation();
							}
						}}
					/>

					<motion.button
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 20 }}
						transition={{ duration: 0.2 }}
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							handleNext();
						}}
						className="button-base absolute right-4 top-1/2 -translate-y-1/2 p-3 text-heading transition-colors rounded-full bg-white/80 dark:bg-black/60 hover:bg-white/90 dark:hover:bg-black/80 backdrop-blur-sm border-gray-200/50 dark:border-white/10 shadow-lg"
						aria-label="Next image"
					>
						<FiChevronRight size={20} />
					</motion.button>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.2 }}
						className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
					>
						{currentImages.map((image, index) => (
							<button
								type="button"
								key={image}
								onClick={(e) => {
									e.stopPropagation();
									setCurrentIndex(index);
								}}
								className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex
									? "bg-gray-800 dark:bg-white"
									: "bg-gray-500 dark:bg-white/60 hover:bg-gray-700 dark:hover:bg-white/80"
									}`}
								aria-label={`Go to image ${index + 1}`}
							/>
						))}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default memo(Lightbox, areImagesEqual);
