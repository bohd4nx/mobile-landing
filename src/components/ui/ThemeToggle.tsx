import { motion } from "framer-motion";
import { memo, useCallback, useEffect, useState } from "react";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import type { Theme } from "@/types/ui";

const themes: { key: Theme; icon: typeof FiSun; label: string }[] = [
	{ key: "light", icon: FiSun, label: "Light" },
	{ key: "dark", icon: FiMoon, label: "Dark" },
	{ key: "system", icon: FiMonitor, label: "System" },
];

const ThemeToggle = () => {
	const [theme, setTheme] = useState<Theme>("system");
	const [mounted, setMounted] = useState(false);

	const applyTheme = useCallback((newTheme: Theme) => {
		const root = document.documentElement;

		root.classList.add("theme-switching");
		root.classList.remove("light", "dark");

		if (newTheme === "system") {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			root.classList.add(prefersDark ? "dark" : "light");
		} else {
			root.classList.add(newTheme);
		}

		setTimeout(() => {
			root.classList.remove("theme-switching");
		}, 150);
	}, []);

	useEffect(() => {
		setMounted(true);
		const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
		setTheme(savedTheme);
		applyTheme(savedTheme);
	}, [applyTheme]);

	useEffect(() => {
		if (!mounted || theme !== "system") return;
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = () => theme === "system" && applyTheme("system");
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [theme, applyTheme, mounted]);

	if (!mounted)
		return (
			<div className="flex items-center gap-0.5 rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/[0.04] p-1 shadow-lg">
				<div className="w-8 h-8" />
				<div className="w-8 h-8" />
				<div className="w-8 h-8" />
			</div>
		);

	return (
		<div className="flex items-center gap-0.5 rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/[0.04] p-1 shadow-lg">
			{themes.map(({ key, icon: Icon, label }) => (
				<motion.button
					key={key}
					onClick={() => {
						setTheme(key);
						localStorage.setItem("theme", key);
						applyTheme(key);
					}}
					className={`relative rounded-lg p-2 text-sm font-medium transition-colors ${theme === key
						? "text-heading"
						: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.06]"
						}`}
					whileTap={{ scale: 0.9 }}
					title={label}
					aria-label={`Switch to ${label.toLowerCase()} theme`}
				>
					{theme === key && (
						<motion.div
							layoutId="activeTheme"
							className="absolute inset-0 rounded-lg bg-gray-100 dark:bg-white/10 shadow-md border border-gray-300/80 dark:border-white/10"
							transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
						/>
					)}
					<Icon className="relative z-10 h-4 w-4" />
				</motion.button>
			))}
		</div>
	);
};

export default memo(ThemeToggle);
