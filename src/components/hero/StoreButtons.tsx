import { FaApple, FaGooglePlay } from "react-icons/fa";

const StoreLinkCard = ({
	href,
	icon: Icon,
	label,
	store,
	iconClassName,
}: {
	href: string;
	icon: React.ComponentType<{ className?: string }>;
	label: string;
	store: string;
	iconClassName: string;
}) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="group button-base flex items-center justify-start gap-3 px-5 py-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] md:min-w-[200px]"
	>
		<Icon className={iconClassName} />
		<span className="min-w-0 text-left">
			<div className="text-xs font-medium text-muted transition-colors group-hover:text-gray-600 dark:group-hover:text-gray-300">
				{label}
			</div>
			<div className="text-base font-semibold tracking-wide text-heading transition-colors group-hover:text-gray-900 dark:group-hover:text-white">
				{store}
			</div>
		</span>
	</a>
);

const StoreButtons = ({
	storeLinks,
}: {
	storeLinks: { apple: string; google: string };
}) => (
	<div className="w-full max-w-md mx-auto grid grid-cols-1 xs:grid-cols-2 gap-3 md:flex md:flex-col md:mx-0 md:w-auto md:flex-shrink-0">
		{[
			{
				href: storeLinks.apple,
				icon: FaApple,
				label: "Download on the",
				store: "App Store",
				iconClassName:
					"w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors",
			},
			{
				href: storeLinks.google,
				icon: FaGooglePlay,
				label: "Get it on",
				store: "Google Play",
				iconClassName:
					"w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors",
			},
		].map(({ href, icon, label, store, iconClassName }) => (
			<StoreLinkCard
				key={store}
				href={href}
				icon={icon}
				label={label}
				store={store}
				iconClassName={iconClassName}
			/>
		))}
	</div>
);

export default StoreButtons;
