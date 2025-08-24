import { AnimatePresence, motion } from "framer-motion";
import { memo, type PropsWithChildren } from "react";

const variants = {
	pageInitial: { opacity: 0, y: 10 },
	pageAnimate: { opacity: 1, y: 0 },
	pageExit: { opacity: 0, y: 10 },
};

const PageAnimation = ({ children }: PropsWithChildren) => (
	<AnimatePresence mode="wait">
		<motion.div
			initial="pageInitial"
			animate="pageAnimate"
			exit="pageExit"
			transition={{ type: "linear" }}
			className="px-5"
			variants={variants}
		>
			{children}
		</motion.div>
	</AnimatePresence>
);

export default memo(PageAnimation);
