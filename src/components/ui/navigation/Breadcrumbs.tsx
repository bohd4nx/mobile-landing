import { memo } from "react";
import { FiChevronRight, FiHome } from "react-icons/fi";

const Breadcrumbs = ({ items }: { items: Array<{ label: string; href?: string }> }) => (
	<nav className="flex items-center gap-2 text-base text-body mb-8">
		<a href="/" className="hover:text-heading p-2 -ml-2 transition-colors">
			<FiHome className="w-5 h-5" />
		</a>
		{items.map(({ label, href }) => (
			<div key={label} className="flex items-center gap-2">
				<FiChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-600" />
				{href ? (
					<a href={href} className="hover:text-heading transition-colors">
						{label}
					</a>
				) : (
					<span className="text-heading font-medium">{label}</span>
				)}
			</div>
		))}
	</nav>
);

export default memo(Breadcrumbs);
