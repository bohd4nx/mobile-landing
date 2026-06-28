"use client";

import { memo, useCallback, useEffect, useState } from "react";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import type { ThemeMode } from "@/types";

const THEMES: {
	key: ThemeMode;
	Icon: React.ComponentType<{ className?: string }>;
	label: string;
}[] = [
	{ key: "light", Icon: FiSun, label: "Light" },
	{ key: "system", Icon: FiMonitor, label: "System" },
	{ key: "dark", Icon: FiMoon, label: "Dark" },
];

const isTheme = (v: string | null): v is ThemeMode =>
	v === "light" || v === "dark" || v === "system";

const resolveTheme = (t: ThemeMode): "light" | "dark" =>
	t !== "system"
		? t
		: window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";

const applyTheme = (t: ThemeMode) => {
	const root = document.documentElement;
	root.classList.add("theme-switching");
	root.classList.remove("light", "dark");
	root.classList.add(resolveTheme(t));
	setTimeout(() => root.classList.remove("theme-switching"), 150);
};

const ThemeToggle = () => {
	const [theme, setTheme] = useState<ThemeMode>("system");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const saved = localStorage.getItem("theme");
		const initial = isTheme(saved) ? saved : "system";
		setTheme(initial);
		applyTheme(initial);
	}, []);

	useEffect(() => {
		if (!mounted || theme !== "system") return;
		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyTheme("system");
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, [theme, mounted]);

	const select = useCallback((t: ThemeMode) => {
		setTheme(t);
		localStorage.setItem("theme", t);
		applyTheme(t);
	}, []);

	return (
		<fieldset className="inline-flex items-center gap-0.5 rounded-xl border border-gray-200 bg-gray-100/60 p-1 dark:border-white/10 dark:bg-white/4">
			<legend className="sr-only">Color theme</legend>
			{THEMES.map(({ key, Icon, label }) => (
				<label
					key={key}
					className={`relative flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-200 ${
						mounted && theme === key
							? "bg-white text-gray-900 shadow-sm shadow-black/8 dark:bg-white/10 dark:text-white"
							: "text-gray-500 hover:text-gray-700 dark:text-white/40 dark:hover:text-white/70"
					}`}
				>
					<input
						type="radio"
						name="color-theme"
						value={key}
						checked={mounted ? theme === key : key === "system"}
						onChange={() => select(key)}
						className="sr-only"
					/>
					<Icon className="h-3.5 w-3.5 shrink-0" />
					<span className="hidden sm:inline">{label}</span>
				</label>
			))}
		</fieldset>
	);
};

export default memo(ThemeToggle);
