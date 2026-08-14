interface CardServiceProps {
	title: string;
	description: string;
}

export default function CardService({ title, description }: Readonly<CardServiceProps>) {
	return (
		<div className="border py-5 md:py-10 px-6 md:px-12 border-neutral-600 rounded-2xl">
			<div className="text-white text-2xl mb-2">{title}</div>
			<p>{description}</p>
		</div>
	);
}
