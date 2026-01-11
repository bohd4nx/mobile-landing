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
	rating: { score: number; count: string };
	ageRating: string;
	version?: string;
	minimumOS?: string;
	releaseDate?: string;
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

export interface FloatingNavbar {
	logo: string;
	title: string;
	storeLinks: StoreLinks;
	socialLinks: SocialLink[];
}

export interface FooterProps {
	name: string;
	logo: string;
	description: string;
}
