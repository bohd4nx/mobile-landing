"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

const BackToTop = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout> | undefined;
		const onScroll = () => {
			if (timer) return;
			timer = setTimeout(() => {
				setVisible(window.scrollY > 300);
				timer = undefined;
			}, 100);
		};
		window.addEventListener("scroll", onScroll);
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<AnimatePresence>
			{visible && (
				<motion.button
					type="button"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
					transition={{ duration: 0.2 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					className="button-base fixed bottom-4 right-4 z-40 flex h-9 w-9 items-center justify-center shadow-lg transition-shadow duration-200 hover:shadow-xl md:bottom-8 md:right-8 md:h-12 md:w-12"
					aria-label="Back to top"
				>
					<FiChevronUp size={22} />
				</motion.button>
			)}
		</AnimatePresence>
	);
};

export default BackToTop;
