interface BadgeProps {
	title: string;
	className?: string;
}

export default function Badge({ title, className }: Readonly<BadgeProps>) {
	return (
		<div
			className={`inline-flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400 ${className ?? ""}`}
		>
			<span className="h-1.5 w-1.5 rounded-full bg-meadow" />
			{title}
		</div>
	);
}
