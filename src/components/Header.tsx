export default function Header({ className }: Readonly<{ className?: string }>) {
	return (
		<header className={className}>
			<h1 className="text-3xl md:text-4xl font-semibold text-white">Fabiz.</h1>
		</header>
	);
}
