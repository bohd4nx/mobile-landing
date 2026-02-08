import type { StoreData } from "./content";

export interface LayoutWithAppDataProps {
	title: string;
	description?: string;
	appData?: Partial<StoreData> & {
		name: string;
		logo: string;
		description: string;
		storeLinks: { apple: string; google: string };
	};
}
