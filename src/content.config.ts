import { defineCollection } from "astro:content";

// Keep collections explicit to silence Astro content loader warning.
const pages = defineCollection({});

export const collections = {
	pages,
};
