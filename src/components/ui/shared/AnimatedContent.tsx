import { motion } from "framer-motion";
import { memo, type ReactNode } from "react";

const AnimatedContent = ({ children }: { children: ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex-1 min-w-0"
    >
        {children}
    </motion.div>
);

export default memo(AnimatedContent);
