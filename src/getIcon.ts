import type { IconType } from "react-icons";
import {
	FiBox,
	FiCloud,
	FiHeart,
	FiShield,
	FiSliders,
	FiStar,
	FiTrendingUp,
	FiZap,
} from "react-icons/fi";
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
	FiShield,
	FiCloud,
	FiSliders,
	RiInstagramFill,
	RiTelegram2Fill,
	RiTwitterXFill,
	RiFacebookFill,
	RiLinkedinFill,
	RiYoutubeFill,
	RiGithubFill,
	RiDiscordFill,
};

export const getIcon = (name: string): IconType | null => iconMap[name] ?? null;
