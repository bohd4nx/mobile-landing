export interface Screenshots {
    iphone: string[];
    ipad: string[];
}

export const areImagesEqual = <T extends { images: Screenshots }>(
    prev: T,
    next: T,
) => prev.images === next.images;
