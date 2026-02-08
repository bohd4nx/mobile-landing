import AppInfo from "@hero/AppInfo";
import StoreButtons from "@hero/StoreButtons";
import type { AppHeroProps } from "@t/layout";
import { motion } from "framer-motion";
import { memo } from "react";

const AppHero = ({ title, description, storeLinks, logo, rating, ageRating, version, minimumOS, releaseDate }: AppHeroProps) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
		className="mb-16 flex flex-col md:flex-row gap-8 items-start"
	>
		<AppInfo
			title={title}
			description={description}
			logo={logo}
			rating={rating}
			ageRating={ageRating}
			version={version}
			minimumOS={minimumOS}
			releaseDate={releaseDate}
		/>
		<StoreButtons storeLinks={storeLinks} />
	</motion.div>
);

export default memo(AppHero);
