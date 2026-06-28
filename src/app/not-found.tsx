import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function NotFound() {
	return (
		<main className="flex min-h-[calc(100vh-250px)] items-center justify-center px-4">
			<div className="w-full max-w-lg text-center">
				<h1 className="text-8xl font-black text-heading mb-4 sm:text-9xl opacity-80 tracking-tight">
					404
				</h1>
				<h2 className="mb-4 text-2xl font-bold text-heading">Page Not Found</h2>
				<p className="mb-10 text-lg leading-relaxed text-body">
					Oops! The page you're looking for seems to have wandered off into the
					digital void.
				</p>
				<Link
					href="/"
					className="inline-flex items-center gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-7 py-4 font-medium text-heading hover:scale-105 hover:bg-gray-50 dark:hover:bg-white/10 hover:shadow-lg active:scale-95 transition-all duration-200"
				>
					<FiHome className="h-5 w-5" />
					<span>Go Home</span>
				</Link>
			</div>
		</main>
	);
}
