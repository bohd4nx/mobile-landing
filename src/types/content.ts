export interface Feature {
	title: string;
	description: string;
	icon: string;
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
	icon: string;
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
