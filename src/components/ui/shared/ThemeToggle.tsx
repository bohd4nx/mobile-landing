import type { ThemeMode } from "@t/layout";
import { motion } from "framer-motion";
import { memo, useCallback, useEffect, useState } from "react";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";

const THEMES = [
	{ key: "light", icon: FiSun, label: "Light" },
	{ key: "dark", icon: FiMoon, label: "Dark" },
	{ key: "system", icon: FiMonitor, label: "System" },
] as const;

const isTheme = (value: string | null): value is ThemeMode =>
	value === "light" || value === "dark" || value === "system";

const resolveTheme = (theme: ThemeMode): "light" | "dark" => {
	if (theme !== "system") return theme;
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
};

const applyThemeClass = (theme: ThemeMode) => {
	const root = document.documentElement;
	const resolvedTheme = resolveTheme(theme);

	root.classList.add("theme-switching");
	root.classList.remove("light", "dark");
	root.classList.add(resolvedTheme);
	window.setTimeout(() => root.classList.remove("theme-switching"), 150);
};

const ThemeToggle = () => {
	const [theme, setTheme] = useState<ThemeMode>("system");
	const [mounted, setMounted] = useState(false);

	const applyTheme = useCallback((newTheme: ThemeMode) => {
		applyThemeClass(newTheme);
	}, []);

	useEffect(() => {
		setMounted(true);
		const savedValue = localStorage.getItem("theme");
		const savedTheme = isTheme(savedValue) ? savedValue : "system";
		setTheme(savedTheme);
		applyTheme(savedTheme);
	}, [applyTheme]);

	useEffect(() => {
		if (!mounted || theme !== "system") return;

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = () => applyTheme("system");

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [theme, applyTheme, mounted]);

	const handleThemeChange = useCallback(
		(key: ThemeMode) => {
			setTheme(key);
			localStorage.setItem("theme", key);
			applyTheme(key);
		},
		[applyTheme],
	);

	return (
		<div className="flex items-center gap-1 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/5 p-1">
			{!mounted
				? THEMES.map((t) => <div key={t.key} className="w-8 h-8" />)
				: THEMES.map(({ key, icon: Icon, label }) => {
						const isActive = theme === key;

						return (
							<motion.button
								type="button"
								key={key}
								onClick={() => handleThemeChange(key)}
								className={`relative rounded-lg p-2 transition-colors ${
									isActive
										? "text-heading"
										: "text-muted hover:text-body hover:bg-gray-200 dark:hover:bg-white/10"
								}`}
								whileTap={{ scale: 0.9 }}
								title={label}
								aria-label={`Switch to ${label.toLowerCase()} theme`}
							>
								{isActive && (
									<motion.div
										layoutId="activeTheme"
										className="absolute inset-0 rounded-lg bg-white dark:bg-white/10 shadow-sm border border-gray-200 dark:border-white/10"
										transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
									/>
								)}
								<Icon className="relative z-10 h-5 w-5" />
							</motion.button>
						);
					})}
		</div>
	);
};

export default memo(ThemeToggle);
