import type { ProjectBlock as Block } from "@/data/projects";

interface ProjectBlockProps {
	block: Block;
	nested?: boolean;
}

// Listas com múltiplo de 3 itens ficam em 3 colunas; as demais em 4.
function mdColumns(count: number) {
	return count % 3 === 0 ? "md:grid-cols-3" : "md:grid-cols-4";
}

function Heading({ nested, children }: Readonly<{ nested?: boolean; children: React.ReactNode }>) {
	if (nested) {
		return <h3 className="text-white text-xl md:text-2xl">{children}</h3>;
	}
	return <h2 className="text-white text-2xl md:text-3xl leading-tight">{children}</h2>;
}

export default function ProjectBlock({ block, nested }: Readonly<ProjectBlockProps>) {
	switch (block.type) {
		case "text":
			return (
				<div className="space-y-4">
					{block.title && <Heading nested={nested}>{block.title}</Heading>}
					{block.paragraphs.map((paragraph) => (
						<p key={paragraph} className="leading-relaxed">
							{paragraph}
						</p>
					))}
				</div>
			);

		case "list":
			return (
				<div className="space-y-4">
					<Heading nested={nested}>{block.title}</Heading>
					{block.intro && <p className="leading-relaxed">{block.intro}</p>}
					<ul className="space-y-2">
						{block.items.map((item) => (
							<li key={typeof item === "string" ? item : item.term} className="flex gap-3 leading-relaxed">
								<span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-meadow" />
								{typeof item === "string" ? (
									item
								) : (
									<span>
										<strong className="font-semibold text-white">{item.term}:</strong> {item.text}
									</span>
								)}
							</li>
						))}
					</ul>
					{block.outro && <p className="leading-relaxed">{block.outro}</p>}
				</div>
			);

		case "flow":
			return (
				<div className="space-y-4">
					{block.title && <Heading nested={nested}>{block.title}</Heading>}
					<ol className={`grid grid-cols-2 gap-x-4 gap-y-6 ${mdColumns(block.steps.length)}`}>
						{block.steps.map((step, i) => (
							<li key={step} className="border-t-2 border-meadow pt-3">
								<span aria-hidden="true" className="block text-xs text-neutral-400 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
								<span className="text-lg md:text-xl text-white">{step}</span>
							</li>
						))}
					</ol>
					{block.paragraphs?.map((paragraph) => (
						<p key={paragraph} className="leading-relaxed">
							{paragraph}
						</p>
					))}
				</div>
			);

		case "timeline":
			return (
				<div className="space-y-4">
					<Heading nested={nested}>{block.title}</Heading>
					<ol>
						{block.items.map((item) => (
							<li
								key={item.period}
								className="grid gap-2 border-t border-neutral-800 py-6 md:grid-cols-[8rem_1fr] md:gap-8"
							>
								<span className="text-sm text-meadow tabular-nums">{item.period}</span>
								<div>
									<div className="text-white text-lg mb-1">{item.title}</div>
									<p className="leading-relaxed">{item.text}</p>
								</div>
							</li>
						))}
					</ol>
				</div>
			);

		case "stats":
			return (
				<div className="space-y-6">
					<Heading nested={nested}>{block.title}</Heading>
					<dl
						className={`grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-neutral-800 bg-neutral-800 ${mdColumns(block.items.length)}`}
					>
						{block.items.map((item) => (
							<div
								key={item.label}
								className="flex flex-col-reverse justify-end gap-1 bg-shark p-4 md:p-5 odd:last:col-span-2 md:odd:last:col-span-1"
							>
								<dt className="text-xs leading-snug text-neutral-400">{item.label}</dt>
								<dd className="text-2xl md:text-3xl font-semibold text-meadow tabular-nums whitespace-nowrap">
									{item.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			);

		case "group":
			return (
				<div className="space-y-8">
					<Heading nested={nested}>{block.title}</Heading>
					{block.blocks.map((child) => (
						<ProjectBlock key={child.id} block={child} nested />
					))}
				</div>
			);
	}
}
