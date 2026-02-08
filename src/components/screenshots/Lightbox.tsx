import LightboxControls from "@screenshots/LightboxControls";
import LightboxImage from "@screenshots/LightboxImage";
import LightboxIndicators from "@screenshots/LightboxIndicators";
import type { Screenshots } from "@t/screenshots";
import { areImagesEqual } from "@t/screenshots";
import { AnimatePresence, motion } from "framer-motion";
import { memo, useCallback, useEffect, useState } from "react";

const Lightbox = ({ images }: { images: Screenshots }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const [activeDevice, setActiveDevice] = useState<"iphone" | "ipad">("iphone");
	const currentImages = images[activeDevice];

	useEffect(() => {
		const handleOpen = (e: Event) => {
			const { index, device } = (e as CustomEvent).detail;
			setCurrentIndex(index);
			setActiveDevice(device);
			setIsOpen(true);
		};

		window.addEventListener('openLightbox', handleOpen);
		return () => window.removeEventListener('openLightbox', handleOpen);
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
		setDirection(-1);
		setCurrentIndex(
			(prev) => (prev - 1 + currentImages.length) % currentImages.length,
		);
	}, [currentImages.length]);

	const handleNext = useCallback(() => {
		setDirection(1);
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
					<LightboxControls
						onClose={() => setIsOpen(false)}
						onPrevious={handlePrevious}
						onNext={handleNext}
					/>

					<LightboxImage
						src={currentImages[currentIndex]}
						alt={`Screenshot ${currentIndex + 1}`}
						index={currentIndex}
						direction={direction}
					/>

					<LightboxIndicators
						images={currentImages}
						currentIndex={currentIndex}
						onSelect={setCurrentIndex}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default memo(Lightbox, areImagesEqual);
