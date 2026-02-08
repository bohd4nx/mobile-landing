import type { SocialLink } from "@t/content";
import { getIcon } from "@utils/getIcon";
import { motion } from "framer-motion";
import { memo } from "react";

const SocialLinks = ({ items }: { items: SocialLink[] }) => (
	<>
		{items.map((item, index) => {
			const Icon = getIcon(item.icon);
			return (
				<motion.a
					key={item.label}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.3, delay: index * 0.1 }}
					whileHover={{ scale: 1.1, rotate: 5 }}
					whileTap={{ scale: 0.95 }}
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200/50 dark:border-white/5 transition-colors"
					aria-label={item.label}
					title={item.label}
				>
					{Icon && (
						<Icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
					)}
				</motion.a>
			);
		})}
	</>
);

export default memo(SocialLinks);
