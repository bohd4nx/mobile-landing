import { AnimatePresence, motion } from "framer-motion";
import { memo, useCallback, useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = useCallback(() => {
		setIsVisible(window.scrollY > 300);
	}, []);

	const scrollToTop = useCallback(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	useEffect(() => {
		toggleVisibility();

		let timeoutId: number | null = null;

		const handleScroll = () => {
			if (timeoutId) return;

			timeoutId = window.setTimeout(() => {
				toggleVisibility();
				timeoutId = null;
			}, 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (timeoutId) window.clearTimeout(timeoutId);
		};
	}, [toggleVisibility]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
					transition={{ duration: 0.2 }}
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border-card bg-bg-dark/80 text-white shadow-lg backdrop-blur-sm transition-colors dark:bg-bg-dark/80"
					aria-label="Back to top"
				>
					<FiChevronUp size={24} />
				</motion.button>
			)}
		</AnimatePresence>
	);
};

export default memo(BackToTop);
