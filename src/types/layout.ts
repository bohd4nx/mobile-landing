import type { StoreData } from "./content";

export interface LayoutProps {
	title: string;
	description?: string;
}

export interface LayoutWithAppDataProps extends LayoutProps {
	appData?: Partial<StoreData> & {
		name: string;
		logo: string;
		description: string;
		storeLinks: { apple: string; google: string };
	};
}

export interface MarkdownContentProps {
	breadcrumbLabel: string;
	content: string;
}
