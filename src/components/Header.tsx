"use client";

import { useEffect, useState } from "react";

const navItems = [
	{ href: "#home", label: "Início" },
	{ href: "#about", label: "Sobre" },
	{ href: "#services", label: "Serviços" },
	{ href: "#contact", label: "Contato" },
];

export default function Header({ className }: Readonly<{ className?: string }>) {
	const [activeId, setActiveId] = useState("home");

	useEffect(() => {
		const ids = navItems.map((item) => item.href.slice(1));

		function handleScroll() {
			const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
			if (atBottom) {
				setActiveId(ids.at(-1)!);
				return;
			}

			const referenceLine = window.innerHeight * 0.3;
			let current = ids[0];
			for (const id of ids) {
				const section = document.getElementById(id);
				if (section && section.getBoundingClientRect().top <= referenceLine) {
					current = id;
				}
			}
			setActiveId(current);
		}

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="sticky top-0 z-50 backdrop-blur border-b border-neutral-800">
			<div className={`flex flex-wrap items-center justify-between gap-4 ${className ?? ""}`}>
				<p className="text-3xl md:text-4xl font-semibold text-white">Fabiz.</p>
				<nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em] text-neutral-400">
					{navItems.map((item) => {
						const id = item.href.slice(1);
						const isActive = id === activeId;
						return (
							<a
								key={item.href}
								href={item.href}
								aria-current={isActive ? "location" : undefined}
								className={`transition-colors hover:text-meadow ${isActive ? "text-meadow" : ""}`}
							>
								{item.label}
							</a>
						);
					})}
				</nav>
			</div>
		</header>
	);
}
