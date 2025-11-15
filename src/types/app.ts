import type { IconType } from "react-icons";

export type AppLogo = string;

export interface StoreLinks {
	apple: string;
	google: string;
}

export interface Feature {
	title: string;
	description: string;
	icon: IconType;
}

export interface FAQ {
	question: string;
	answer: string;
}

export interface Review {
	author: string;
	rating: number;
	text: string;
	avatar?: string;
}

export interface SocialLink {
	url: string;
	icon: IconType;
	label: string;
}

export interface Screenshots {
	iphone: string[];
	ipad: string[];
}

export interface AppHeroProps {
	title: string;
	description: string;
	logo: AppLogo;
	storeLinks: StoreLinks;
}

export interface FeaturesProps {
	items: Feature[];
}

export interface FAQProps {
	items: FAQ[];
}

export interface ReviewsProps {
	items: Review[];
}

export interface SocialLinksProps {
	items: SocialLink[];
}

export interface ScreenshotsProps {
	images: Screenshots;
}

export interface LightboxProps {
	images: Screenshots;
}

export function areImagesEqual<T extends { images: Screenshots }>(
	prevProps: T,
	nextProps: T,
): boolean {
	return JSON.stringify(prevProps.images) === JSON.stringify(nextProps.images);
}