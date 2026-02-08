import { AnimatePresence, motion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		let timeoutId: number;

		const handleScroll = () => {
			if (timeoutId) return;

			timeoutId = window.setTimeout(() => {
				setIsVisible(window.scrollY > 300);
				timeoutId = 0;
			}, 100);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (timeoutId) window.clearTimeout(timeoutId);
		};
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
					transition={{ duration: 0.2 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					onClick={scrollToTop}
					className="button-base fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center text-heading shadow-lg hover:shadow-xl transition-shadow duration-200 p-0"
					aria-label="Back to top"
				>
					<FiChevronUp size={28} />
				</motion.button>
			)}
		</AnimatePresence>
	);
};

export default memo(BackToTop);
