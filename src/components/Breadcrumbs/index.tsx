import { FiChevronRight, FiHome } from "react-icons/fi";
import type { BreadcrumbsProps } from "@/types";

const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
	<nav className="mb-8 flex items-center gap-2 text-sm text-body">
		<a href="/" className="-ml-2 p-2 transition-colors hover:text-heading">
			<FiHome className="h-4 w-4" />
		</a>
		{items.map(({ label, href }) => (
			<div key={label} className="flex items-center gap-2">
				<FiChevronRight className="h-4 w-4 text-gray-400 dark:text-white/20" />
				{href ? (
					<a
						href={href}
						className="font-medium transition-colors hover:text-heading"
					>
						{label}
					</a>
				) : (
					<span className="font-semibold text-heading">{label}</span>
				)}
			</div>
		))}
	</nav>
);

export default Breadcrumbs;
