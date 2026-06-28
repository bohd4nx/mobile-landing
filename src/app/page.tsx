import AppHero from "@/components/AppHero";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Screenshots from "@/components/Screenshots";
import {
	faqs,
	features,
	pricingTiers,
	reviews,
	screenshots,
	site,
} from "@/config";
import { fetchStoreData } from "@/fetchStoreData";

export default async function HomePage() {
	const storeData = await fetchStoreData();

	const app = {
		name: storeData.name ?? site.name,
		description: storeData.description ?? site.description,
		logo: storeData.logo ?? site.logo,
		storeLinks: storeData.storeLinks ?? site.storeLinks,
		rating: storeData.rating ?? site.rating,
		ageRating: storeData.ageRating ?? site.ageRating,
		version: storeData.version ?? site.version,
		minimumOS: storeData.minimumOS ?? site.minimumOS,
		releaseDate: storeData.releaseDate ?? site.releaseDate,
		screenshots: storeData.screenshots ?? screenshots,
	};

	return (
		<main className="container mx-auto px-3 md:px-6">
			<AppHero
				title={app.name}
				description={app.description}
				logo={app.logo}
				storeLinks={app.storeLinks}
				rating={app.rating}
				ageRating={app.ageRating}
				version={app.version}
				minimumOS={app.minimumOS}
				releaseDate={app.releaseDate}
			/>
			<section id="screenshots" className="mb-16 scroll-mt-8 md:mb-24">
				<Screenshots images={app.screenshots} />
			</section>
			<section id="features" className="mb-16 scroll-mt-8 md:mb-24">
				<Features items={features} />
			</section>
			<section id="pricing" className="mb-16 scroll-mt-8 md:mb-24">
				<Pricing tiers={pricingTiers} />
			</section>
			<section id="reviews" className="mb-16 scroll-mt-8 md:mb-24">
				<Reviews items={reviews} />
			</section>
			<section id="faq" className="mb-16 scroll-mt-8 md:mb-24">
				<FAQ items={faqs} />
			</section>
		</main>
	);
}
