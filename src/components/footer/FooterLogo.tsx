const FooterLogo = ({ name, logo }: { name: string; logo: string }) => (
	<a href="/" className="flex items-center gap-3 group">
		<div className="relative h-10 w-10">
			<div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gray-200/50 to-gray-300/50 blur-sm transition-all group-hover:blur-md dark:from-white/5 dark:to-white/10" />
			<img
				src={logo}
				alt={`${name} Logo`}
				className="relative h-full w-full rounded-lg border border-gray-200/50 object-cover dark:border-white/10"
			/>
		</div>
		<span className="text-xl font-bold text-heading group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
			{name}
		</span>
	</a>
);

export default FooterLogo;
