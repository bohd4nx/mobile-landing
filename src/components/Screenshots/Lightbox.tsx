"use client";

import { AnimatePresence, motion } from "framer-motion";
import { memo, useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

interface ControlsProps {
	onClose: () => void;
	onPrevious: () => void;
	onNext: () => void;
}

interface DotsProps {
	count: number;
	currentIndex: number;
	onSelect: (index: number) => void;
}

interface LightboxProps {
	images: string[];
	isOpen: boolean;
	currentIndex: number;
	onClose: () => void;
	onPrevious: () => void;
	onNext: () => void;
	onSelect: (index: number) => void;
}

const navButtonClass =
	"button-base absolute z-10 rounded-full border-gray-200/50 bg-white/80 p-3 text-heading shadow-lg backdrop-blur-sm transition-colors hover:bg-white/90 dark:border-white/10 dark:bg-black/60 dark:hover:bg-black/80";

const Controls = ({ onClose, onPrevious, onNext }: ControlsProps) => (
	<>
		<motion.button
			type="button"
			aria-label="Close lightbox"
			onClick={onClose}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.8 }}
			whileHover={{ scale: 1.1, rotate: 90 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.2 }}
			className={`${navButtonClass} right-4 top-4`}
		>
			<FiX size={20} />
		</motion.button>

		<motion.button
			type="button"
			aria-label="Previous image"
			onClick={(e) => {
				e.stopPropagation();
				onPrevious();
			}}
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -20 }}
			whileHover={{ scale: 1.15, x: -5 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.2 }}
			className={`${navButtonClass} left-4 top-1/2 -translate-y-1/2`}
		>
			<FiChevronLeft size={20} />
		</motion.button>

		<motion.button
			type="button"
			aria-label="Next image"
			onClick={(e) => {
				e.stopPropagation();
				onNext();
			}}
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 20 }}
			whileHover={{ scale: 1.15, x: 5 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.2 }}
			className={`${navButtonClass} right-4 top-1/2 -translate-y-1/2`}
		>
			<FiChevronRight size={20} />
		</motion.button>
	</>
);

const Dots = ({ count, currentIndex, onSelect }: DotsProps) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: 20 }}
		transition={{ duration: 0.2 }}
		className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
	>
		{Array.from({ length: count }, (_, index) => (
			<motion.button
				// biome-ignore lint/suspicious/noArrayIndexKey: dot nav has no stable id
				key={index}
				type="button"
				aria-label={`Go to image ${index + 1}`}
				onClick={(e) => {
					e.stopPropagation();
					onSelect(index);
				}}
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				whileHover={{ scale: 1.5 }}
				whileTap={{ scale: 0.8 }}
				transition={{ duration: 0.2, ease: "easeInOut" }}
				className={`h-2 w-2 rounded-full transition-colors ${
					index === currentIndex
						? "bg-gray-800 dark:bg-white"
						: "bg-gray-500 hover:bg-gray-700 dark:bg-white/60 dark:hover:bg-white/80"
				}`}
			/>
		))}
	</motion.div>
);

const slideVariants = {
	enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
	center: { x: 0, opacity: 1, scale: 1 },
	exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.97 }),
};

const Lightbox = ({
	images,
	isOpen,
	currentIndex,
	onClose,
	onPrevious,
	onNext,
	onSelect,
}: LightboxProps) => {
	const [direction, setDirection] = useState(0);

	// Prevent body scroll while lightbox is open
	useEffect(() => {
		document.documentElement.style.overflow = isOpen ? "hidden" : "";
		return () => {
			document.documentElement.style.overflow = "";
		};
	}, [isOpen]);

	const handlePrevious = useCallback(() => {
		setDirection(-1);
		onPrevious();
	}, [onPrevious]);

	const handleNext = useCallback(() => {
		setDirection(1);
		onNext();
	}, [onNext]);

	useEffect(() => {
		if (!isOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") handlePrevious();
			else if (e.key === "ArrowRight") handleNext();
			else if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [handleNext, handlePrevious, isOpen, onClose]);

	return (
		<AnimatePresence mode="wait">
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					onClick={onClose}
					className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-md dark:bg-black/70"
				>
					<Controls
						onClose={onClose}
						onPrevious={handlePrevious}
						onNext={handleNext}
					/>

					<AnimatePresence mode="popLayout" custom={direction} initial={false}>
						<motion.img
							key={currentIndex}
							custom={direction}
							variants={slideVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
							src={images[currentIndex]}
							alt={`Screenshot ${currentIndex + 1}`}
							onClick={(e) => e.stopPropagation()}
							className="max-h-[95vh] max-w-[95vw] rounded-xl object-contain shadow-2xl md:max-h-[90vh] md:max-w-[85vw]"
						/>
					</AnimatePresence>

					<Dots
						count={images.length}
						currentIndex={currentIndex}
						onSelect={onSelect}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default memo(Lightbox);
