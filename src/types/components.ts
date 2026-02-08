import type { SocialLink } from "./content";

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
