import { motion } from "framer-motion";
import { memo } from "react";
import { FiTablet } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";

const DeviceButton = ({ isActive, onClick, label, icon }: {
	isActive: boolean;
	onClick: () => void;
	label: string;
	icon: React.ReactNode;
}) => (
	<motion.button
		type="button"
		onClick={onClick}
		className={`relative rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors ${isActive
			? "text-heading"
			: "text-muted hover:text-heading hover:bg-gray-100 dark:hover:bg-white/[0.06]"
			}`}
		whileTap={{ scale: 0.9 }}
	>
		{isActive && (
			<motion.div
				layoutId="activeDevice"
				className="absolute inset-0 rounded-lg bg-gray-100 dark:bg-white/10 shadow-md border border-gray-300/80 dark:border-white/10"
				transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
			/>
		)}
		<span className="relative z-10 hidden sm:inline">{icon}</span>
		<span className="relative z-10">{label}</span>
	</motion.button>
);

const DeviceToggle = ({ activeDevice, onToggle }: {
	activeDevice: "iphone" | "ipad";
	onToggle: (device: "iphone" | "ipad") => void;
}) => {
	return (
		<div className="flex items-center justify-center gap-1 rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/[0.04] p-1 shadow-lg">
			<DeviceButton
				key="iphone"
				isActive={activeDevice === "iphone"}
				onClick={() => onToggle("iphone")}
				label="iPhone"
				icon={<IoPhonePortraitOutline className="w-4 h-4" />}
			/>
			<DeviceButton
				key="ipad"
				isActive={activeDevice === "ipad"}
				onClick={() => onToggle("ipad")}
				label="iPad"
				icon={<FiTablet className="w-4 h-4" />}
			/>
		</div>
	);
};

export default memo(DeviceToggle);
