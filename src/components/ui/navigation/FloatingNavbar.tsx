import SocialLinks from "@social/SocialLinks";
import type { FloatingNavbarProps } from "@t/layout";
import NavbarLogo from "@ui/navigation/NavbarLogo";
import NavbarStoreLinks from "@ui/navigation/NavbarStoreLinks";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
                        <div className="px-5 md:px-8 py-4 md:py-4">
                            <div className="flex md:grid md:grid-cols-3 items-center justify-between md:gap-4">
                                <NavbarLogo logo={logo} title={title} />
                                <NavbarStoreLinks storeLinks={storeLinks} />
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
