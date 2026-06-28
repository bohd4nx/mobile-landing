import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
	title: "Page Not Found",
	description: "This page doesn't exist or has been moved.",
};

export default function NotFound() {
	return (
		<main className="flex min-h-[calc(100vh-320px)] flex-col items-center justify-center px-4 py-16 text-center">
			<p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-500">
				404 — Page not found
			</p>
			<h1 className="mb-5 text-5xl font-black tracking-tight text-gray-900 sm:text-6xl dark:text-white">
				Oops, wrong turn.
			</h1>
			<p className="mb-10 max-w-sm text-base leading-relaxed text-gray-500 dark:text-white/45">
				This page doesn't exist or the link is broken. Double-check the URL or
				head back home.
			</p>
			<Link
				href="/"
				className="inline-flex items-center gap-2.5 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-violet-700 hover:shadow-lg active:scale-95"
			>
				<FiArrowLeft className="h-4 w-4" />
				Back to home
			</Link>
		</main>
	);
}
