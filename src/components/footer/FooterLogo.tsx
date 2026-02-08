import { memo } from "react";

const FooterLogo = ({ name, logo }: { name: string; logo: string }) => (
    <a href="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50 dark:from-white/5 dark:to-white/10 rounded-lg blur-sm group-hover:blur-md transition-all" />
            <img
                src={logo}
                alt={`${name} Logo`}
                className="relative w-full h-full rounded-lg object-cover border border-gray-200/50 dark:border-white/10"
            />
        </div>
        <span className="text-xl font-bold text-heading group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {name}
        </span>
    </a>
);

export default memo(FooterLogo);
