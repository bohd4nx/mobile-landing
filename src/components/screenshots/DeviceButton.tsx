import type { DeviceButtonProps } from "@t/components";
import { motion } from "framer-motion";
import { memo } from "react";

const DeviceButton = ({ isActive, onClick, label, icon }: DeviceButtonProps) => (
    <motion.button
        type="button"
        onClick={onClick}
        className={`relative rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors ${isActive
                ? "text-heading"
                : "text-muted hover:text-heading hover:bg-gray-100 dark:hover:bg-white/[0.06]"
            }`}
        whileTap={{ scale: 0.9 }}
    >
        {isActive && (
            <motion.div
                layoutId="activeDevice"
                className="absolute inset-0 rounded-lg bg-gray-100 dark:bg-white/10 shadow-md border border-gray-300/80 dark:border-white/10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
        )}
        <span className="relative z-10 hidden sm:inline">{icon}</span>
        <span className="relative z-10">{label}</span>
    </motion.button>
);

export default memo(DeviceButton);
