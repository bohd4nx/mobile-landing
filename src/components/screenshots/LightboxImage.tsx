import { motion } from "framer-motion";
import { memo } from "react";


const LightboxImage = ({ src, alt, index, direction }: {
    src: string;
    alt: string;
    index: number;
    direction: number;
}) => {
    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -100 : 100,
            opacity: 0,
        }),
    };

    return (
        <motion.img
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                duration: 0.4,
                ease: [0.4, 0.0, 0.2, 1]
            }}
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
};

export default memo(LightboxImage);
