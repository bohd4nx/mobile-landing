import type { DeviceType, Screenshots } from "@t/screenshots";
import { AnimatePresence, motion } from "framer-motion";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const LightboxControls = ({
	onClose,
	onPrevious,
	onNext,
}: {
	onClose: () => void;
	onPrevious: () => void;
	onNext: () => void;
}) => (
	<>
		<motion.button
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.8 }}
			whileHover={{ scale: 1.1, rotate: 90 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.2 }}
			type="button"
			onClick={onClose}
			className="button-base absolute right-4 top-4 z-10 rounded-full border-gray-200/50 bg-white/80 p-3 text-heading shadow-lg backdrop-blur-sm transition-colors hover:bg-white/90 dark:border-white/10 dark:bg-black/60 dark:hover:bg-black/80"
			aria-label="Close lightbox"
		>
			<FiX size={20} />
		</motion.button>

		<motion.button
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -20 }}
			whileHover={{ scale: 1.15, x: -5 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.2 }}
			type="button"
			onClick={(event) => {
				event.stopPropagation();
				onPrevious();
			}}
			className="button-base absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border-gray-200/50 bg-white/80 p-3 text-heading shadow-lg backdrop-blur-sm transition-colors hover:bg-white/90 dark:border-white/10 dark:bg-black/60 dark:hover:bg-black/80"
			aria-label="Previous image"
		>
			<FiChevronLeft size={20} />
		</motion.button>

		<motion.button
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 20 }}
			whileHover={{ scale: 1.15, x: 5 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.2 }}
			type="button"
			onClick={(event) => {
				event.stopPropagation();
				onNext();
			}}
			className="button-base absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border-gray-200/50 bg-white/80 p-3 text-heading shadow-lg backdrop-blur-sm transition-colors hover:bg-white/90 dark:border-white/10 dark:bg-black/60 dark:hover:bg-black/80"
			aria-label="Next image"
		>
			<FiChevronRight size={20} />
		</motion.button>
	</>
);

const LightboxImage = ({
	src,
	alt,
	index,
	direction,
}: {
	src: string;
	alt: string;
	index: number;
	direction: number;
}) => {
	const variants = {
		enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
		center: { x: 0, opacity: 1 },
		exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
	};

	return (
		<motion.img
			key={index}
			custom={direction}
			variants={variants}
			initial="enter"
			animate="center"
			exit="exit"
			transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
			src={src}
			alt={alt}
			className="max-h-[95vh] max-w-[95vw] rounded-xl object-contain shadow-2xl md:max-h-[90vh] md:max-w-[85vw]"
			onClick={(event) => event.stopPropagation()}
		/>
	);
};

const LightboxIndicators = ({
	images,
	currentIndex,
	onSelect,
}: {
	images: string[];
	currentIndex: number;
	onSelect: (index: number) => void;
}) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: 20 }}
		transition={{ duration: 0.2 }}
		className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
	>
		{images.map((image, index) => (
			<motion.button
				type="button"
				key={`${image}-${index}`}
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				whileHover={{ scale: 1.5 }}
				whileTap={{ scale: 0.8 }}
				transition={{ duration: 0.2, ease: "easeInOut" }}
				onClick={(event) => {
					event.stopPropagation();
					onSelect(index);
				}}
				className={`h-2 w-2 rounded-full transition-colors ${
					index === currentIndex
						? "bg-gray-800 dark:bg-white"
						: "bg-gray-500 hover:bg-gray-700 dark:bg-white/60 dark:hover:bg-white/80"
				}`}
				aria-label={`Go to image ${index + 1}`}
			/>
		))}
	</motion.div>
);

const Lightbox = ({
	images,
	isOpen,
	currentIndex,
	activeDevice,
	onClose,
	onPrevious,
	onNext,
	onSelect,
}: {
	images: Screenshots;
	isOpen: boolean;
	currentIndex: number;
	activeDevice: DeviceType;
	onClose: () => void;
	onPrevious: () => void;
	onNext: () => void;
	onSelect: (index: number) => void;
}) => {
	const [direction, setDirection] = useState(0);
	const currentImages = useMemo(
		() => images[activeDevice],
		[images, activeDevice],
	);

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
		onPrevious();
	}, [onPrevious]);

	const handleNext = useCallback(() => {
		setDirection(1);
		onNext();
	}, [onNext]);

	useEffect(() => {
		if (!isOpen) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") handlePrevious();
			if (e.key === "ArrowRight") handleNext();
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [handleNext, handlePrevious, isOpen, onClose]);

	return (
		<AnimatePresence mode="wait">
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 dark:bg-black/70 backdrop-blur-md"
					onClick={onClose}
				>
					<LightboxControls
						onClose={onClose}
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
						onSelect={onSelect}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default memo(Lightbox);
