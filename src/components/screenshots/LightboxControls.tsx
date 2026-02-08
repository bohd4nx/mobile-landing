import { motion } from "framer-motion";
import { memo } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const LightboxControls = ({ onClose, onPrevious, onNext }: {
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
            className="button-base absolute right-4 top-4 p-3 text-heading transition-colors rounded-full bg-white/80 dark:bg-black/60 hover:bg-white/90 dark:hover:bg-black/80 backdrop-blur-sm border-gray-200/50 dark:border-white/10 shadow-lg z-10"
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
            onClick={(e) => {
                e.stopPropagation();
                onPrevious();
            }}
            className="button-base absolute left-4 top-1/2 -translate-y-1/2 p-3 text-heading transition-colors rounded-full bg-white/80 dark:bg-black/60 hover:bg-white/90 dark:hover:bg-black/80 backdrop-blur-sm border-gray-200/50 dark:border-white/10 shadow-lg z-10"
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
            onClick={(e) => {
                e.stopPropagation();
                onNext();
            }}
            className="button-base absolute right-4 top-1/2 -translate-y-1/2 p-3 text-heading transition-colors rounded-full bg-white/80 dark:bg-black/60 hover:bg-white/90 dark:hover:bg-black/80 backdrop-blur-sm border-gray-200/50 dark:border-white/10 shadow-lg z-10"
            aria-label="Next image"
        >
            <FiChevronRight size={20} />
        </motion.button>
    </>
);

export default memo(LightboxControls);
