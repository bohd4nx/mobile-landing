import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import type { ThemeMode } from "@/types";

export const THEMES: {
	key: ThemeMode;
	Icon: React.ComponentType<{ className?: string }>;
	label: string;
}[] = [
	{ key: "light", Icon: FiSun, label: "Light" },
	{ key: "system", Icon: FiMonitor, label: "System" },
	{ key: "dark", Icon: FiMoon, label: "Dark" },
];

export const isTheme = (v: string | null): v is ThemeMode =>
	v === "light" || v === "dark" || v === "system";

export const resolveTheme = (t: ThemeMode): "light" | "dark" =>
	t !== "system"
		? t
		: window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";

export const applyTheme = (t: ThemeMode) => {
	const root = document.documentElement;
	root.classList.add("theme-switching");
	root.classList.remove("light", "dark");
	root.classList.add(resolveTheme(t));
	setTimeout(() => root.classList.remove("theme-switching"), 150);
};
