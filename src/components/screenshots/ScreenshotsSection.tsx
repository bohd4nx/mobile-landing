import Lightbox from "@screenshots/Lightbox";
import Screenshots from "@screenshots/Screenshots";
import type {
	DeviceType,
	Screenshots as ScreenshotsType,
} from "@t/screenshots";
import { areImagesEqual } from "@t/screenshots";
import { memo, useCallback, useMemo, useState } from "react";

const getNextIndex = (index: number, delta: number, length: number) => {
	if (length <= 0) return 0;
	return (index + delta + length) % length;
};

const ScreenshotsSection = ({ images }: { images: ScreenshotsType }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeDevice, setActiveDevice] = useState<DeviceType>("iphone");
	const [currentIndex, setCurrentIndex] = useState(0);

	const currentImages = useMemo(
		() => images[activeDevice],
		[images, activeDevice],
	);

	const handleOpen = useCallback((index: number, device: DeviceType) => {
		setActiveDevice(device);
		setCurrentIndex(index);
		setIsOpen(true);
	}, []);

	const handleClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	const handlePrevious = useCallback(() => {
		setCurrentIndex((prev) => getNextIndex(prev, -1, currentImages.length));
	}, [currentImages.length]);

	const handleNext = useCallback(() => {
		setCurrentIndex((prev) => getNextIndex(prev, 1, currentImages.length));
	}, [currentImages.length]);

	const handleSelect = useCallback((index: number) => {
		setCurrentIndex(index);
	}, []);

	return (
		<>
			<Screenshots images={images} onOpen={handleOpen} />
			<Lightbox
				images={images}
				isOpen={isOpen}
				activeDevice={activeDevice}
				currentIndex={currentIndex}
				onClose={handleClose}
				onPrevious={handlePrevious}
				onNext={handleNext}
				onSelect={handleSelect}
			/>
		</>
	);
};

export default memo(ScreenshotsSection, areImagesEqual);
