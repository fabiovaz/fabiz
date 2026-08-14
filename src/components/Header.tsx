const navItems = [
	{ href: "#home", label: "Início" },
	{ href: "#about", label: "Sobre" },
	{ href: "#services", label: "Serviços" },
	{ href: "#contact", label: "Contato" },
];

export default function Header({ className }: Readonly<{ className?: string }>) {
	return (
		<header className="sticky top-0 z-50 backdrop-blur">
			<div className={`flex flex-wrap items-center justify-between gap-4 ${className ?? ""}`}>
				<h1 className="text-3xl md:text-4xl font-semibold text-white">Fabiz.</h1>
				<nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em] text-neutral-400">
					{navItems.map((item) => (
						<a key={item.href} href={item.href} className="transition-colors hover:text-meadow">
							{item.label}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}
