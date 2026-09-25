import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Badge from "@/components/Badge";
import JsonLd from "@/components/JsonLd";
import ProjectBlock from "@/components/ProjectBlock";
import ProjectImage from "@/components/ProjectImage";
import Section from "@/components/Section";
import { getProject, projects } from "@/data/projects";
import { site } from "@/lib/site";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const project = getProject((await params).slug);
	if (!project) {
		return {};
	}

	const title = `${project.title} | ${site.name}`;
	const url = `/portfolio/${project.slug}`;

	return {
		title: project.title,
		description: project.summary,
		alternates: {
			canonical: url,
		},
		openGraph: {
			title,
			description: project.summary,
			url,
			siteName: site.name,
			locale: "pt_BR",
			type: "article",
			images: [site.image],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: project.summary,
			images: [site.image.url],
		},
	};
}

export default async function ProjectPage({ params }: Readonly<PageProps>) {
	const project = getProject((await params).slug);
	if (!project) {
		notFound();
	}

	const url = `${site.url}/portfolio/${project.slug}`;
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "CreativeWork",
				name: project.title,
				headline: project.summary,
				description: project.intro[0],
				url,
				image: project.image ? `${site.url}${project.image}` : undefined,
				keywords: project.tags.join(", "),
				inLanguage: "pt-BR",
				creator: { "@type": "Organization", name: "Fabiz", url: site.url },
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{ "@type": "ListItem", position: 1, name: "Início", item: site.url },
					{ "@type": "ListItem", position: 2, name: "Portfólio", item: `${site.url}/#portfolio` },
					{ "@type": "ListItem", position: 3, name: project.title, item: url },
				],
			},
		],
	};

	return (
		<main id="conteudo" className="container max-w-3xl px-4 md:px-0">
			<JsonLd data={jsonLd} />
			<Section id="project">
				<Link href="/#portfolio" className="inline-block text-sm transition-colors hover:text-meadow">
					Voltar ao portfólio
				</Link>
				<div>
					<Badge title="PORTFÓLIO" className="mt-6" />
				</div>
				<h1 className="pt-6 text-4xl md:text-6xl leading-tight md:leading-[1.05] text-white">{project.title}</h1>
				<p className="max-w-xl text-lg md:text-xl leading-relaxed">{project.summary}</p>

				<dl className="grid gap-6 border-y border-neutral-800 py-8 mt-10 sm:grid-cols-2">
					{project.meta.map((item) => (
						<div key={item.label}>
							<dt className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-2">{item.label}</dt>
							<dd className="text-white">{item.value}</dd>
						</div>
					))}
					<div className="border-t border-neutral-800 pt-6 sm:col-span-2">
						<dt className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-2">Escopo</dt>
						<dd className="text-white leading-relaxed">{project.scope}</dd>
					</div>
				</dl>

				{project.image && (
					<ProjectImage
						src={project.image}
						alt={project.imageAlt ?? ""}
						title={project.title}
						eager
						sizes="(min-width: 768px) 48rem, 100vw"
						className="mt-10"
					/>
				)}

				<div className="pt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-neutral-300">
					{project.intro.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</div>

				{project.url && (
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-meadow transition-colors hover:text-white"
					>
						Acessar o projeto <span className="sr-only">(abre em nova aba)</span>
					</a>
				)}

				<div className="mt-14 space-y-14 md:mt-20 md:space-y-20">
					{project.blocks.map((block) => (
						<ProjectBlock key={block.id} block={block} />
					))}
				</div>
			</Section>
		</main>
	);
}
