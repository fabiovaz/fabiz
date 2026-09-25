import Badge from "@/components/Badge";
import Section from "@/components/Section";
import { projects } from "@/data/projects";

import CardProject from "./CardProject";

export default function Portfolio() {
	return (
		<Section id="portfolio">
			<Badge title="PORTFÓLIO" />
			<h2 className="pt-6 text-3xl md:text-5xl leading-tight text-white">
				Ideias que viraram <span className="text-meadow">realidade</span>
			</h2>
			<div>
				{projects.map((project) => (
					<CardProject key={project.slug} {...project} />
				))}
			</div>
		</Section>
	);
}
