import type { SocialLink } from "./content";

export interface AppHero {
	title: string;
	description: string;
	logo: string;
	storeLinks: { apple: string; google: string };
	rating: { score: number; count: string };
	ageRating: string;
	version?: string;
	minimumOS?: string;
	releaseDate?: string;
}

export interface FloatingNavbar {
	logo: string;
	title: string;
	storeLinks: { apple: string; google: string };
	socialLinks: SocialLink[];
}

export interface AppInfoProps {
	title: string;
	description: string;
	logo: string;
	rating: { score: number; count: string };
	ageRating: string;
	version?: string;
	minimumOS?: string;
	releaseDate?: string;
}

export interface DeviceButtonProps {
	isActive: boolean;
	onClick: () => void;
	label: string;
	icon: React.ReactNode;
}
