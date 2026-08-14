import Badge from "@/components/Badge";
import Section from "@/components/Section";

export default function About() {
	return (
		<Section id="about">
			<Badge title="SOBRE" icon="about" />
			<h2 className="pt-6 text-3xl md:text-5xl leading-tight text-white">
				Cada projeto começa com uma <span className="text-meadow">história</span> ainda melhor
			</h2>
			<p className="max-w-xl leading-relaxed">
				Desde o início de nossa jornada como uma empresa de soluções digitais, temos trabalhado em
				estreita colaboração com nossos clientes, fornecendo consultoria especializada e reunindo
				equipes talentosas para criar produtos digitais inovadores. Nossa ampla expertise abrange
				áreas como desenvolvimento de aplicativos e websites, estratégias de marketing digital e
				automação de processos. Nosso combustível é a paixão pela tecnologia, e estamos em
				constante busca por soluções que impulsionem o sucesso de nossos clientes. Ao combinar
				criatividade, conhecimento técnico e visão estratégica, enfrentamos cada desafio com
				determinação, transformando ideias em resultados tangíveis e impactantes.
			</p>
		</Section>
	);
}
