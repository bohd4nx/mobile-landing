import { AnimatePresence, motion } from "framer-motion";
import { memo, useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import type { LightboxProps } from "config";
import { areImagesEqual } from "config";

declare global {
	interface Window {
		openLightbox: (index: number, device: "iphone" | "ipad") => void;
	}
}

const Lightbox = ({ images }: LightboxProps) => {
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
			window.openLightbox = null as unknown as (
				index: number,
				device: "iphone" | "ipad",
			) => void;
		};
	}, []);

	const handlePrevious = useCallback(() => {
		setCurrentIndex(
			(prev) => (prev - 1 + currentImages.length) % currentImages.length,
		);
	}, [currentImages.length]);

	const handleNext = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % currentImages.length);
	}, [currentImages.length]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (!isOpen) return;
			if (event.key === "ArrowLeft") handlePrevious();
			if (event.key === "ArrowRight") handleNext();
			if (event.key === "Escape") setIsOpen(false);
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [handleNext, handlePrevious, isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-bg-dark/95 backdrop-blur-xl dark:bg-bg-dark/95"
				>
					<button
						type="button"
						onClick={() => setIsOpen(false)}
						className="absolute right-4 top-4 p-2 text-black/70 dark:text-white/75 hover:text-black dark:hover:text-white"
					>
						<FiX size={24} />
					</button>

					<button
						type="button"
						onClick={handlePrevious}
						className="absolute left-4 p-2 text-black/70 dark:text-white/75 hover:text-black dark:hover:text-white"
					>
						<FiChevronLeft size={24} />
					</button>

					<img
						src={currentImages[currentIndex]}
						alt={`Screenshot ${currentIndex + 1}`}
						className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl border-card"
					/>

					<button
						type="button"
						onClick={handleNext}
						className="absolute right-4 p-2 text-black/70 dark:text-white/75 hover:text-black dark:hover:text-white"
					>
						<FiChevronRight size={24} />
					</button>

					<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
						{currentImages.map((image, index) => (
							<button
								type="button"
								key={image}
								onClick={() => setCurrentIndex(index)}
								className={`h-2 w-2 rounded-full transition-colors ${
									index === currentIndex ? "bg-primary" : "bg-black/10 dark:bg-white/30"
								}`}
							/>
						))}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default memo(Lightbox, areImagesEqual);
