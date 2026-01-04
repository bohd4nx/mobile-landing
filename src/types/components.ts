import type { FAQ, Feature, Review, Screenshots, SocialLink } from "./content";
export interface StoreLinks {
	apple: string;
	google: string;
}

export interface AppHero {
	title: string;
	description: string;
	logo: string;
	storeLinks: StoreLinks;
}

export interface Lightbox {
	images: Screenshots;
}

export interface ScreenshotsGallery {
	images: Screenshots;
}

export interface ReviewsList {
	items: Review[];
}

export interface FeaturesList {
	items: Feature[];
}

export interface FAQList {
	items: FAQ[];
}

export interface SocialLinksList {
	items: SocialLink[];
}
