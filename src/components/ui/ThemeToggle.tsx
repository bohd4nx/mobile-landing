import { motion } from "framer-motion";
import { memo, useCallback, useEffect, useState } from "react";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";

type Theme = "light" | "dark" | "system";

const THEMES = [
	{ key: "light", icon: FiSun, label: "Light" },
	{ key: "dark", icon: FiMoon, label: "Dark" },
	{ key: "system", icon: FiMonitor, label: "System" },
] as const;

const ThemeToggle = () => {
	const [theme, setTheme] = useState<Theme>("system");
	const [mounted, setMounted] = useState(false);

	const applyTheme = useCallback((newTheme: Theme) => {
		const root = document.documentElement;
		const isDark = newTheme === "system"
			? window.matchMedia("(prefers-color-scheme: dark)").matches
			: newTheme === "dark";

		root.classList.add("theme-switching");
		root.classList.remove("light", "dark");
		root.classList.add(isDark ? "dark" : "light");
		setTimeout(() => root.classList.remove("theme-switching"), 150);
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
		const handleChange = () => applyTheme("system");

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [theme, applyTheme, mounted]);

	const handleThemeChange = (key: Theme) => {
		setTheme(key);
		localStorage.setItem("theme", key);
		applyTheme(key);
	};

	return (
		<div className="flex items-center gap-1 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/5 p-1">
			{!mounted ? (
				THEMES.map((t) => <div key={t.key} className="w-8 h-8" />)
			) : (
				THEMES.map(({ key, icon: Icon, label }) => {
					const isActive = theme === key;

					return (
						<motion.button
							type="button"
							key={key}
							onClick={() => handleThemeChange(key)}
							className={`relative rounded-lg p-2 transition-colors ${isActive
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
				})
			)}
		</div>
	);
};

export default memo(ThemeToggle);
