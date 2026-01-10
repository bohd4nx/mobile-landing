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

export const areImagesEqual = <T extends { images: Screenshots }>(
	prev: T,
	next: T,
) => prev.images === next.images;
