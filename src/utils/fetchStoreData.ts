import { storeDataConfig } from "../data";
import type { StoreData } from "@t/store";

async function getAppleApp(appId: number, country = "us") {
    const res = await fetch(
        `https://itunes.apple.com/lookup?id=${appId}&country=${country}&entity=software`,
    );
    const json = await res.json();
    return json.results?.[0];
}

function shortenDescription(description: string, maxSentences = 3): string {
    if (!description) return description;

    const sentences = description.match(/[^.!?]+[.!?]+/g) || [];

    return sentences.length <= maxSentences
        ? description
        : sentences.slice(0, maxSentences).join(' ').trim();
}

function formatRatingCount(count: number): string {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
}

function formatReleaseDate(dateString?: string): string | undefined {
    return dateString
        ? new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
        : undefined;
}

export async function fetchStoreData(): Promise<Partial<StoreData>> {
    if (!storeDataConfig.fetchRealData) return {};

    try {
        const data = await getAppleApp(storeDataConfig.appStoreAppId);

        if (!data) {
            console.error("No app data found for ID:", storeDataConfig.appStoreAppId);
            return {};
        }

        return {
            name: data.trackName || data.trackCensoredName,
            description: shortenDescription(data.description, 2),
            logo: data.artworkUrl512 || data.artworkUrl100,
            rating: {
                score: Math.round(data.averageUserRating * 10) / 10 || 0,
                count: formatRatingCount(data.userRatingCount || 0),
            },
            ageRating: data.contentAdvisoryRating || "4+",
            version: data.version,
            minimumOS: data.minimumOsVersion,
            releaseDate: formatReleaseDate(data.currentVersionReleaseDate),
            screenshots: {
                iphone: (data.screenshotUrls || []).slice(0, 5),
                ipad: (data.ipadScreenshotUrls || []).slice(0, 5),
            },
            storeLinks: {
                apple: data.trackViewUrl,
                google: "#",
            },
        };
    } catch (error) {
        console.error("Failed to fetch store data:", error);
        return {};
    }
}

export async function getAppData() {
    return await fetchStoreData();
}
