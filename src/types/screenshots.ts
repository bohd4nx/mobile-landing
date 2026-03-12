export interface Screenshots {
	iphone: string[];
	ipad: string[];
}

export type DeviceType = keyof Screenshots;

export const areImagesEqual = <T extends { images: Screenshots }>(
	prev: T,
	next: T,
) => prev.images === next.images;
