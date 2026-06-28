import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import MarkdownLayout from "@/components/Markdown";
import { parseMarkdown } from "@/components/Markdown/parseMarkdown";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Learn how we collect, use, and protect your personal information.",
};

export default async function PrivacyPage() {
	const raw = fs.readFileSync(
		path.join(process.cwd(), "content/privacy.md"),
		"utf-8",
	);
	const body = raw.replace(/^#[^\n]+\n+\*\*[^\n]+\n+/, "");
	const html = String(await parseMarkdown(body));

	return (
		<main className="px-4 pb-8 pt-8 md:px-6 md:pt-12">
			<div className="mx-auto max-w-375">
				<Breadcrumbs items={[{ label: "Privacy Policy" }]} />
				<MarkdownLayout
					htmlContent={html}
					rawContent={body}
					title="Privacy Policy"
					lastUpdated="February 1, 2025"
				/>
			</div>
		</main>
	);
}
