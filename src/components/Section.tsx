interface SectionProps {
	id: string;
	className?: string;
	children: React.ReactNode;
}

export default function Section({ id, className, children }: Readonly<SectionProps>) {
	return (
		<section id={id} className={`mt-14 scroll-mt-24 space-y-4 md:mt-28 ${className ?? ""}`}>
			{children}
		</section>
	);
}
