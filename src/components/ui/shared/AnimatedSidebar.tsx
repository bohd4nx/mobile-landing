import { motion } from "framer-motion";
import { memo, type ReactNode } from "react";

const AnimatedSidebar = ({ children }: { children: ReactNode }) => (
    <motion.aside
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="w-72 flex-shrink-0 hidden xl:block"
    >
        {children}
    </motion.aside>
);

export default memo(AnimatedSidebar);
