import type { IconType } from "react-icons";
import { FiBox, FiHeart, FiStar, FiTrendingUp, FiZap } from "react-icons/fi";
import {
	RiDiscordFill,
	RiFacebookFill,
	RiGithubFill,
	RiInstagramFill,
	RiLinkedinFill,
	RiTelegram2Fill,
	RiTwitterXFill,
	RiYoutubeFill,
} from "react-icons/ri";

const iconMap: Record<string, IconType> = {
	FiStar,
	FiZap,
	FiBox,
	FiHeart,
	FiTrendingUp,
	RiInstagramFill,
	RiTelegram2Fill,
	RiTwitterXFill,
	RiFacebookFill,
	RiLinkedinFill,
	RiYoutubeFill,
	RiGithubFill,
	RiDiscordFill,
};

export const getIcon = (iconName: string): IconType | null =>
	iconMap[iconName] || null;
