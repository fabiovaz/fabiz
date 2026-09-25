import JsonLd from "@/components/JsonLd";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import { site } from "@/lib/site";

const organization = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Fabiz",
	url: site.url,
	logo: `${site.url}/logo.svg`,
	description: site.description,
	sameAs: [site.instagram],
	contactPoint: [
		{ "@type": "ContactPoint", contactType: "customer service", areaServed: "BR", email: site.emails[0] },
		{ "@type": "ContactPoint", contactType: "customer service", areaServed: "PT", email: site.emails[1] },
	],
};

export default function Home() {
	return (
		<main id="conteudo" className="container max-w-3xl px-4 md:px-0">
			<JsonLd data={organization} />
			<Hero />
			<About />
			<Services />
			<Portfolio />
			<Contact />
		</main>
	);
}
