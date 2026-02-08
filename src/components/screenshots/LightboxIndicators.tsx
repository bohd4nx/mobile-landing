import { motion } from "framer-motion";
import { memo } from "react";

const LightboxIndicators = ({ images, currentIndex, onSelect }: {
    images: string[];
    currentIndex: number;
    onSelect: (index: number) => void;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
    >
        {images.map((image, index) => (
            <motion.button
                type="button"
                key={image}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                onClick={(e) => {
                    e.stopPropagation();
                    onSelect(index);
                }}
                className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex
                    ? "bg-gray-800 dark:bg-white"
                    : "bg-gray-500 dark:bg-white/60 hover:bg-gray-700 dark:hover:bg-white/80"
                    }`}
                aria-label={`Go to image ${index + 1}`}
            />
        ))}
    </motion.div>
);

export default memo(LightboxIndicators);
