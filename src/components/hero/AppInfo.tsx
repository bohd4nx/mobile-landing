import RatingStars from "@reviews/RatingStars";
import type { AppInfoProps } from "@t/components";
import { memo } from "react";

const AppInfo = ({ title, description, logo, rating, ageRating, version, minimumOS, releaseDate }: AppInfoProps) => (
    <div className="flex flex-1 flex-col md:flex-row gap-8 items-start text-center md:text-left">
        <div className="flex-shrink-0 self-center md:self-start">
            <div className="group/icon rounded-2xl border border-gray-200/50 dark:border-white/10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/[0.02] dark:to-white/[0.05] p-7 w-56 h-56 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300">
                <img
                    src={logo}
                    alt={`${title} Icon`}
                    className="h-48 w-48 rounded-2xl object-cover group-hover/icon:scale-105 transition-transform duration-300"
                />
            </div>
        </div>

        <div className="flex flex-1 flex-col justify-between">
            <div>
                <h1 className="text-4xl font-bold text-heading mb-2">{title}</h1>

                <div className="flex items-center gap-3 mb-3 justify-center md:justify-start flex-wrap">
                    <div className="flex items-center gap-1.5">
                        <RatingStars rating={rating.score} />
                        <span className="text-sm font-medium text-body ml-1">· {rating.count} ratings</span>
                    </div>
                    <div className="px-2 py-0.5 rounded-md border border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/[0.05] text-xs font-semibold text-gray-700 dark:text-gray-300">
                        {ageRating}
                    </div>
                </div>

                {(version || minimumOS || releaseDate) && (
                    <div className="flex items-center gap-2 mb-4 justify-center md:justify-start flex-wrap text-xs">
                        {version && (
                            <div className="info-badge">
                                <span className="font-semibold text-heading">Version</span>
                                <span className="text-body">{version}</span>
                            </div>
                        )}
                        {minimumOS && (
                            <div className="info-badge">
                                <span className="font-semibold text-heading">Requires</span>
                                <span className="text-body">iOS {minimumOS}+</span>
                            </div>
                        )}
                        {releaseDate && (
                            <div className="info-badge">
                                <span className="font-semibold text-heading">Updated</span>
                                <span className="text-body">{releaseDate}</span>
                            </div>
                        )}
                    </div>
                )}

                <p className="text-lg text-body leading-relaxed max-w-2xl mx-auto md:mx-0">{description}</p>
            </div>
        </div>
    </div>
);

export default memo(AppInfo);
