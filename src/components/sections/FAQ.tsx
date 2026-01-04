import { memo } from "react";
import type { FAQList } from "@/types/components";

const FAQ = ({ items }: FAQList) => (
	<div className="mb-0">
		<h2 className="mb-6 text-2xl font-semibold text-heading">
			FAQ
		</h2>
		<div className="space-y-4">
			{items.map((item) => (
				<div key={item.question} className="card-base">
					<details className="group">
						<summary className="flex cursor-pointer items-center justify-between p-6">
							<h3 className="pr-6 font-medium text-heading">
								{item.question}
							</h3>
							<svg
								className="h-5 w-5 flex-shrink-0 group-open:rotate-180 text-muted"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-label="Toggle answer visibility"
								role="img"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</summary>
						<div className="border-t border-gray-200 dark:border-white/5 px-6 pb-6 pt-6">
							<p className="text-body">{item.answer}</p>
						</div>
					</details>
				</div>
			))}
		</div>
	</div>
);

export default memo(FAQ);
