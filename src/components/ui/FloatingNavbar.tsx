import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import SocialLinks from "@/sections/SocialLinks";
import type { FloatingNavbar as FloatingNavbarProps } from "@/types/components";

const FloatingNavbar = ({ logo, title, storeLinks, socialLinks }: FloatingNavbarProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 300);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-3 px-3 md:px-6">
                    <motion.nav
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="w-full max-w-[600px] lg:max-w-[1500px] mx-auto bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg shadow-gray-200/20 dark:shadow-black/40 rounded-2xl"
                    >
                        <div className="px-4 md:px-8 py-3 md:py-4">
                            <div className="flex md:grid md:grid-cols-3 items-center justify-between md:gap-4">
                                <div className="flex items-center gap-2.5 md:gap-4 justify-start">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50 dark:from-white/5 dark:to-white/10 rounded-xl blur-sm group-hover:blur-md transition-all" />
                                        <img
                                            src={logo}
                                            alt={`${title} Icon`}
                                            className="relative h-9 w-9 md:h-11 md:w-11 rounded-xl object-cover flex-shrink-0 border border-gray-200/50 dark:border-white/10"
                                        />
                                    </div>
                                    <h2 className="text-lg md:text-xl font-bold text-heading tracking-tight">{title}</h2>
                                </div>

                                <div className="flex gap-2 md:gap-3 md:justify-center">
                                    <a
                                        href={storeLinks.apple}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative overflow-hidden rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/[0.04] hover:bg-gray-50 dark:hover:bg-white/[0.08] transition-all duration-200 flex items-center gap-2 md:gap-2.5 px-2.5 md:px-4 py-2 md:py-3 h-10 md:h-12"
                                    >
                                        <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
                                            <FaApple className="text-gray-600 dark:text-gray-300 group-hover:scale-110 group-hover:text-gray-800 dark:group-hover:text-white transition-all w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <span className="hidden lg:block text-left min-w-0">
                                            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 leading-tight transition-colors">
                                                Download on the
                                            </div>
                                            <div className="text-base font-semibold tracking-wide text-heading group-hover:text-gray-900 dark:group-hover:text-white leading-tight transition-colors">
                                                App Store
                                            </div>
                                        </span>
                                    </a>

                                    <a
                                        href={storeLinks.google}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative overflow-hidden rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/[0.04] hover:bg-gray-50 dark:hover:bg-white/[0.08] transition-all duration-200 flex items-center gap-2 md:gap-2.5 px-2.5 md:px-4 py-2 md:py-3 h-10 md:h-12"
                                    >
                                        <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
                                            <FaGooglePlay className="text-gray-600 dark:text-gray-300 group-hover:scale-110 group-hover:text-gray-800 dark:group-hover:text-white transition-all w-4 h-4 md:w-5 md:h-5" />
                                        </div>
                                        <span className="hidden lg:block text-left min-w-0">
                                            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 leading-tight transition-colors">
                                                Get it on
                                            </div>
                                            <div className="text-base font-semibold tracking-wide text-heading group-hover:text-gray-900 dark:group-hover:text-white leading-tight transition-colors">
                                                Google Play
                                            </div>
                                        </span>
                                    </a>
                                </div>

                                <div className="hidden md:flex gap-2.5 justify-end">
                                    <SocialLinks items={socialLinks} />
                                </div>
                            </div>
                        </div>
                    </motion.nav>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FloatingNavbar;
