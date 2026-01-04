import type { IconType } from "react-icons";

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

export const areImagesEqual = <T extends { images: Screenshots }>(
	prev: T,
	next: T,
) => prev.images === next.images;
