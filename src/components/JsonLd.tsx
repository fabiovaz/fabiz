// Dados estruturados (schema.org). O "<" é escapado para evitar injeção de HTML.
export default function JsonLd({ data }: Readonly<{ data: Record<string, unknown> }>) {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll('<', String.raw`\u003c`) }}
		/>
	);
}
