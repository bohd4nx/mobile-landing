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
}

export interface DeviceButtonProps {
	isActive: boolean;
	onClick: () => void;
	label: string;
	icon: React.ReactNode;
}

export type Theme = "light" | "dark" | "system";
