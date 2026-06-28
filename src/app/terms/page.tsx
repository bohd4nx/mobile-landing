import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import MarkdownLayout from "@/components/Markdown";
import { parseMarkdown } from "@/components/Markdown/parseMarkdown";

export const metadata: Metadata = {
	title: "Terms of Service",
	description: "Read our terms and conditions for using this application.",
};

export default async function TermsPage() {
	const raw = fs.readFileSync(
		path.join(process.cwd(), "content/terms.md"),
		"utf-8",
	);
	const body = raw.replace(/^#[^\n]+\n+\*\*[^\n]+\n+/, "");
	const html = String(await parseMarkdown(body));

	return (
		<main className="px-4 pb-8 pt-8 md:px-6 md:pt-12">
			<div className="mx-auto max-w-375">
				<Breadcrumbs items={[{ label: "Terms of Service" }]} />
				<MarkdownLayout
					htmlContent={html}
					rawContent={body}
					title="Terms of Service"
					lastUpdated="February 1, 2025"
				/>
			</div>
		</main>
	);
}
