import DeviceToggle from "@screenshots/DeviceToggle";
import type { Screenshots as ScreenshotsType } from "@t/screenshots";
import { areImagesEqual } from "@t/screenshots";
import { memo, useState } from "react";

const Screenshots = ({ images }: { images: ScreenshotsType }) => {
	const [activeDevice, setActiveDevice] = useState<"iphone" | "ipad">("iphone");
	const currentImages = images[activeDevice];

	return (
		<div className="mb-16">
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-2xl font-semibold text-heading">
					Screenshots
				</h2>
				<DeviceToggle activeDevice={activeDevice} onToggle={setActiveDevice} />
			</div>
			<div className="relative overflow-hidden">
				<div className="screenshots-scrollbar overflow-x-scroll pb-4" style={{ maxHeight: '500px', scrollbarGutter: 'stable' }}>
					<div className="flex gap-6">
						{currentImages.map((image: string, index: number) => (
							<button
								key={`${activeDevice}-${index}`}
								type="button"
								onClick={() => window.dispatchEvent(new CustomEvent('openLightbox', { detail: { index, device: activeDevice } }))}
								className="relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none"
							>
								<img
									src={image}
									alt={`Screenshot ${index + 1}`}
									className={`rounded-xl border border-gray-300 dark:border-white/10 object-cover shadow-lg ${activeDevice === "iphone"
										? "aspect-[9/16] w-[260px]"
										: "aspect-[4/3] w-[360px]"
										}`}
									loading="lazy"
								/>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Screenshots, areImagesEqual);
