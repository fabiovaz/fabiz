import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
	return (
		<main className="container max-w-3xl px-4 md:px-0">
			<Hero />
			<About />
			<Services />
			<Contact />
		</main>
	);
}
