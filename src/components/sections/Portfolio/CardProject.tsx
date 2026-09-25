import Link from "next/link";

import ProjectImage from "@/components/ProjectImage";
import type { Project } from "@/data/projects";

type CardProjectProps = Pick<Project, "slug" | "title" | "summary" | "tags" | "image">;

export default function CardProject({ slug, title, summary, tags, image }: Readonly<CardProjectProps>) {
	return (
		<article className="border-t border-neutral-800 py-8 md:py-10">
			<Link href={`/portfolio/${slug}`} className="group grid gap-5 md:grid-cols-[18rem_1fr] md:items-center md:gap-8">
				<ProjectImage src={image} alt="" title={title} sizes="(min-width: 768px) 18rem, 100vw" />
				<div className="space-y-2">
					<h3 className="text-white text-xl md:text-2xl transition-colors group-hover:text-meadow">{title}</h3>
					<p className="leading-relaxed">{summary}</p>
					<ul className="flex flex-wrap gap-2 pt-1">
						{tags.map((tag) => (
							<li
								key={tag}
								className="rounded-full border border-neutral-800 px-3 py-1 text-xs tracking-wide text-neutral-400"
							>
								{tag}
							</li>
						))}
					</ul>
				</div>
			</Link>
		</article>
	);
}
