import { siteConfig } from "@config/site";
import type { LegalLinksProps, LogoProps, SocialIconsProps } from "@/types/ui";

const Logo = ({ className = "w-8 h-8" }: LogoProps) => (
    <div className="flex items-center gap-3">
        <img
            src={siteConfig.logo}
            alt={`${siteConfig.name} Logo`}
            className={`${className} rounded-lg shadow-sm`}
        />
        <span className="text-lg font-semibold text-neutral-800 dark:text-white">
            {siteConfig.name}
        </span>
    </div>
);

const SocialIcons = ({ className = "" }: SocialIconsProps) => (
    <div className={`flex items-center gap-3 ${className}`}>
        {siteConfig.socialLinks.map((link) => (
            <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 border border-neutral-200/50 dark:border-white/5 hover:scale-105 transition-transform"
                aria-label={link.label}
                title={link.label}
            >
                <link.icon className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
            </a>
        ))}
    </div>
);

const LegalLinks = ({ className = "" }: LegalLinksProps) => (
    <div className={`flex items-center gap-2 ${className}`}>
        <a
            href="/privacy"
            className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors font-medium"
        >
            <span>Privacy</span>
        </a>
        <span className="text-neutral-400 dark:text-neutral-600">•</span>
        <a
            href="/terms"
            className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors font-medium"
        >
            <span>Terms</span>
        </a>
    </div>
);

export { Logo, SocialIcons, LegalLinks };
