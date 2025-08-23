import { motion } from "framer-motion";
import { memo, useCallback } from "react";
import type { DeviceToggleProps } from "config";

const DeviceToggle = ({ activeDevice, onToggle }: DeviceToggleProps) => {
	const handleIphoneToggle = useCallback(() => onToggle("iphone"), [onToggle]);
	const handleIpadToggle = useCallback(() => onToggle("ipad"), [onToggle]);

	return (
		<div className="flex items-center justify-center gap-1.5 rounded-lg border-card bg-white/[0.03] dark:bg-bg-dark/30 p-1">
			<DeviceButton
				isActive={activeDevice === "iphone"}
				onClick={handleIphoneToggle}
				label="iPhone"
			/>
			<DeviceButton
				isActive={activeDevice === "ipad"}
				onClick={handleIpadToggle}
				label="iPad"
			/>
		</div>
	);
};

interface DeviceButtonProps {
	isActive: boolean;
	onClick: () => void;
	label: string;
}

const DeviceButton = memo(({ isActive, onClick, label }: DeviceButtonProps) => (
	<motion.button
		type="button"
		onClick={onClick}
		className={`relative rounded-md px-3.5 py-1.5 text-sm transition-colors ${
			isActive ? "text-black dark:text-white" : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
		}`}
		whileTap={{ scale: 0.95 }}
	>
		{isActive && (
			<motion.div
				layoutId="activeDevice"
				className="absolute inset-0 rounded-md bg-bg-light/40 dark:bg-bg-dark/20"
				transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
			/>
		)}
		<span className="relative z-10">{label}</span>
	</motion.button>
));

DeviceButton.displayName = "DeviceButton";

export default memo(DeviceToggle);
