import Badge from "@/components/Badge";
import Section from "@/components/Section";

export default function Hero() {
	return (
		<Section id="home">
			<Badge title="INÍCIO" icon="home" />
			<h1 className="pt-6 text-4xl md:text-6xl leading-tight md:leading-[1.05] text-white">
				Diga olá para a{" "}
				<span className="relative inline-block text-meadow font-bold">
					Fabiz
					<svg
						className="absolute left-0 top-full -mt-1 h-3 w-full"
						viewBox="0 0 100 12"
						preserveAspectRatio="none"
						fill="none"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 8 C20 2 40 10 60 5 S90 3 98 7"
							stroke="currentColor"
							strokeWidth="4"
							strokeLinecap="round"
							className="fabiz-underline"
						/>
					</svg>
				</span>
				{". Criando experiências para o seu sucesso online"}
			</h1>
			<p className="max-w-xl leading-relaxed">
				Com paixão e criatividade, projetamos soluções personalizadas para atender aos sonhos e
				objetivos de nossos clientes. Transformamos ideias em realidade, dando vida a projetos
				incríveis. Sua visão é o nosso combustível, e nosso compromisso é entregar resultados
				excepcionais. Juntos, construímos o resultado.
			</p>
		</Section>
	);
}
