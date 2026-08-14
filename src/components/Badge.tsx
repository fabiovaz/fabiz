interface BadgeProps {
	title: string;
	icon?: string;
}

export default function Badge({ title }: Readonly<BadgeProps>) {
	return (
		<div className="inline-flex py-3 px-5 text-xs border border-neutral-600 rounded-full text-white">
			{title}
		</div>
	);
}
