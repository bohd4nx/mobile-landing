import type { MarkdownLayoutProps } from "@t/content";
import TableOfContents from "@ui/navigation/TableOfContents";
import { motion } from "framer-motion";

const MarkdownLayout = ({ htmlContent, rawContent }: MarkdownLayoutProps) => {
	return (
		<div className="flex gap-16">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="min-w-0 flex-1"
			>
				<article>
					<div
						className="prose"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: trusted server-rendered HTML
						dangerouslySetInnerHTML={{ __html: htmlContent }}
					/>
				</article>
			</motion.div>
			<motion.aside
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
				className="hidden w-72 shrink-0 xl:block"
			>
				<TableOfContents content={rawContent} />
			</motion.aside>
		</div>
	);
};

export default MarkdownLayout;
