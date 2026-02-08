import DeviceButton from "@screenshots/DeviceButton";
import { memo } from "react";
import { FiTablet } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";

const DeviceToggle = ({
	activeDevice,
	onToggle,
}: {
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
