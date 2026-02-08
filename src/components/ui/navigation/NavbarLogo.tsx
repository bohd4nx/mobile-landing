import { memo } from "react";

const NavbarLogo = ({ logo, title }: {
    logo: string;
    title: string;
}) => (
    <a href="/" className="flex items-center gap-3 md:gap-4 justify-start group">
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50 dark:from-white/5 dark:to-white/10 rounded-xl blur-sm group-hover:blur-md transition-all" />
            <img
                src={logo}
                alt={`${title} Icon`}
                className="relative h-11 w-11 md:h-11 md:w-11 rounded-xl object-cover flex-shrink-0 border border-gray-200/50 dark:border-white/10"
            />
        </div>
        <h2 className="text-lg md:text-xl font-bold text-heading tracking-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {title}
        </h2>
    </a>
);

export default memo(NavbarLogo);
