import { memo } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const NavbarStoreLinks = ({ storeLinks }: { storeLinks: { apple: string; google: string } }) => (
    <div className="flex gap-2.5 md:gap-3 md:justify-center">
        <a href={storeLinks.apple} target="_blank" rel="noopener noreferrer" className="group store-button">
            <FaApple className="text-gray-600 dark:text-gray-300 group-hover:scale-110 group-hover:text-gray-800 dark:group-hover:text-white transition-all w-6 h-6 md:w-6 md:h-6" />
            <span className="hidden lg:block text-left min-w-0">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 leading-tight transition-colors">
                    Download on the
                </div>
                <div className="text-base font-semibold tracking-wide text-heading group-hover:text-gray-900 dark:group-hover:text-white leading-tight transition-colors">
                    App Store
                </div>
            </span>
        </a>

        <a href={storeLinks.google} target="_blank" rel="noopener noreferrer" className="group store-button">
            <FaGooglePlay className="text-gray-600 dark:text-gray-300 group-hover:scale-110 group-hover:text-gray-800 dark:group-hover:text-white transition-all w-5 h-5 md:w-5 md:h-5" />
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
);

export default memo(NavbarStoreLinks);
