interface CardServiceProps {
	index: number;
	title: string;
	description: string;
}

export default function CardService({ index, title, description }: Readonly<CardServiceProps>) {
	return (
		<div className="grid gap-3 border-t border-neutral-800 py-8 md:grid-cols-[3rem_1fr] md:gap-8 md:py-10">
			<span aria-hidden="true" className="text-sm text-neutral-400 tabular-nums">{String(index).padStart(2, "0")}</span>
			<div>
				<h3 className="text-white text-xl md:text-2xl mb-2">{title}</h3>
				<p className="max-w-2xl">{description}</p>
			</div>
		</div>
	);
}
