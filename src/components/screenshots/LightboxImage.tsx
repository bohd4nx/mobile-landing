import { motion } from "framer-motion";
import { memo } from "react";


const LightboxImage = ({ src, alt, index }: {
    src: string;
    alt: string;
    index: number;
}) => (
    <motion.img
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        src={src}
        alt={alt}
        className="max-h-[95vh] max-w-[95vw] md:max-h-[90vh] md:max-w-[85vw] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
            }
        }}
    />
);

export default memo(LightboxImage);
