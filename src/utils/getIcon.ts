import type { IconType } from "react-icons";
import { FiBox, FiStar, FiZap } from "react-icons/fi";
import {
	RiInstagramFill,
	RiTelegram2Fill,
	RiTwitterXFill,
} from "react-icons/ri";

const iconMap: Record<string, IconType> = {
	FiStar,
	FiZap,
	FiBox,
	RiInstagramFill,
	RiTelegram2Fill,
	RiTwitterXFill,
};

export const getIcon = (iconName: string): IconType | null =>
	iconMap[iconName] || null;
