import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: site.url,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		...projects.map((project) => ({
			url: `${site.url}/portfolio/${project.slug}`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.8,
		})),
	];
}
