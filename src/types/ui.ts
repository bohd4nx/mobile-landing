export interface LayoutProps {
	title: string;
	description?: string;
}

export interface BreadcrumbsProps {
	items: Array<{
		label: string;
		href?: string;
	}>;
}

export interface DeviceToggleProps {
	activeDevice: "iphone" | "ipad";
	onToggle: (device: "iphone" | "ipad") => void;
}

export interface RatingStarsProps {
	rating: number;
	max?: number;
	size?: "sm" | "md" | "lg";
}

export type Theme = "light" | "dark" | "system";