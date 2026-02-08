export interface StoreData {
    name: string;
    description: string;
    logo: string;
    rating: {
        score: number;
        count: string;
    };
    ageRating: string;
    version?: string;
    minimumOS?: string;
    releaseDate?: string;
    screenshots: {
        iphone: string[];
        ipad: string[];
    };
    storeLinks: {
        apple: string;
        google: string;
    };
}
