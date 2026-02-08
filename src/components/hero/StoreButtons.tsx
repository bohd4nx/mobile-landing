import { memo } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const StoreButtons = ({ storeLinks }: { storeLinks: { apple: string; google: string } }) => (
    <div className="w-full max-w-md mx-auto grid grid-cols-1 xs:grid-cols-2 gap-3 md:flex md:flex-col md:mx-0 md:w-auto md:flex-shrink-0">
        {[
            { href: storeLinks.apple, icon: FaApple, label: "Download on the", store: "App Store", iconSize: "w-6 h-6" },
            { href: storeLinks.google, icon: FaGooglePlay, label: "Get it on", store: "Google Play", iconSize: "w-5 h-5" }
        ].map(({ href, icon: Icon, label, store, iconSize }) => (
            <a
                key={store}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group button-base flex items-center gap-3 px-5 py-4 justify-start hover:scale-[1.02] hover:shadow-md active:scale-[0.98] transition-all duration-200 md:min-w-[200px]"
            >
                <div className="flex items-center justify-center w-7 h-7 flex-shrink-0">
                    <Icon className={`text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white ${iconSize} transition-colors`} />
                </div>
                <span className="text-left min-w-0">
                    <div className="text-xs font-medium text-muted group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                        {label}
                    </div>
                    <div className="text-base font-semibold tracking-wide text-heading group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {store}
                    </div>
                </span>
            </a>
        ))}
    </div>
);

export default memo(StoreButtons);
