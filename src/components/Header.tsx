"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
	{ id: "home", label: "Início" },
	{ id: "about", label: "Sobre" },
	{ id: "services", label: "Serviços" },
	{ id: "portfolio", label: "Portfólio" },
	{ id: "contact", label: "Contato" },
];

export default function Header({ className }: Readonly<{ className?: string }>) {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [scrollActiveId, setScrollActiveId] = useState("home");
	let activeId = "";
	if (isHome) {
		activeId = scrollActiveId;
	} else if (pathname.startsWith("/portfolio/")) {
		activeId = "portfolio";
	}

	useEffect(() => {
		if (!isHome) {
			return;
		}

		const ids = navItems.map((item) => item.id);

		function handleScroll() {
			const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
			if (atBottom) {
				setScrollActiveId(ids.at(-1)!);
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
			setScrollActiveId(current);
		}

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, [isHome]);

	return (
		<header className="sticky top-0 z-50 backdrop-blur border-b border-neutral-800">
			<div className={`flex flex-wrap items-center justify-between gap-4 ${className ?? ""}`}>
				<a href="/" className="text-3xl md:text-4xl font-semibold text-white">
					Fabiz.
				</a>
				<nav aria-label="Principal" className="hidden md:flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em] text-neutral-400">
					{navItems.map((item) => {
						const isActive = item.id === activeId;
						return (
							<a
								key={item.id}
								href={`/#${item.id}`}
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
