"use client";

import { memo, useCallback, useState } from "react";
import type { ScreenshotsProps } from "@/types";
import Gallery from "./Gallery";
import Lightbox from "./Lightbox";

const wrap = (index: number, delta: number, length: number) =>
	length <= 0 ? 0 : (index + delta + length) % length;

const Screenshots = ({ images }: ScreenshotsProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleOpen = useCallback((index: number) => {
		setCurrentIndex(index);
		setIsOpen(true);
	}, []);

	const handleClose = useCallback(() => setIsOpen(false), []);
	const handleSelect = useCallback(
		(index: number) => setCurrentIndex(index),
		[],
	);
	const handlePrevious = useCallback(
		() => setCurrentIndex((prev) => wrap(prev, -1, images.length)),
		[images.length],
	);
	const handleNext = useCallback(
		() => setCurrentIndex((prev) => wrap(prev, 1, images.length)),
		[images.length],
	);

	return (
		<>
			<Gallery images={images} onOpen={handleOpen} />
			<Lightbox
				images={images}
				isOpen={isOpen}
				currentIndex={currentIndex}
				onClose={handleClose}
				onPrevious={handlePrevious}
				onNext={handleNext}
				onSelect={handleSelect}
			/>
		</>
	);
};

export default memo(Screenshots);
