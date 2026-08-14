import Badge from "@/components/Badge";
import Section from "@/components/Section";

import CardService from "./CardService";

const dataServices = [
	{
		title: "UI/UX Design",
		description:
			"Nossa especialidade é criar designs de UX/UI excepcionais que proporcionam experiências memoráveis. Combinamos habilidades criativas e conhecimentos técnicos para projetar interfaces intuitivas, esteticamente agradáveis e altamente funcionais. Nosso foco está em compreender as necessidades e expectativas dos usuários, garantindo uma interação fluida e agradável em todos os pontos de contato. Conte conosco para criar designs de UX/UI que encantem seus usuários e impulsionem o sucesso do seu produto ou serviço.",
	},
	{
		title: "Desenvolvimento",
		description:
			"Construímos sites modernos e os hospedamos online, utilizando tecnologias atuais como Vue.js e React. Nossa abordagem combina design criativo e funcionalidades avançadas para entregar uma experiência única aos usuários. Com foco na usabilidade e desempenho, desenvolvemos soluções web dinâmicas e responsivas. Conte conosco para criar um site incrível que se destaque na era digital.",
	},
	{
		title: "SEO",
		description:
			"Aproveite o máximo do seu site com a otimização de SEO. Nossa equipe especializada melhora a visibilidade do seu site, atrai tráfego segmentado e aumenta sua presença online. Obtenha posições mais altas nos resultados de busca, aumentando o tráfego orgânico, o engajamento e as taxas de conversão. Alcance o sucesso online com nossos serviços de otimização de SEO.",
	},
	{
		title: "Redes Sociais",
		description:
			"Impulsionamos suas redes sociais com conteúdo excepcional e experiências incríveis. Nossa equipe especializada em gerenciamento de redes sociais combina criatividade e conhecimento técnico para criar uma presença digital única para sua marca. Cuidamos de todos os detalhes, desde a estratégia de conteúdo até a interação com seu público-alvo. Nosso objetivo é oferecer uma experiência envolvente e memorável para seus seguidores, aumentando o engajamento e fortalecendo o relacionamento com sua marca. Confie em nós para transformar suas redes sociais em plataformas poderosas que cativam e conquistam seus seguidores.",
	},
];

export default function Services() {
	return (
		<Section id="services">
			<Badge title="SERVIÇOS" icon="services" />
			<h2 className="pt-6 text-3xl md:text-5xl leading-tight text-white">
				Nossas <span className="text-meadow">especialidades</span>
			</h2>
			<div>
				{dataServices.map((service, i) => (
					<CardService key={service.title} index={i + 1} title={service.title} description={service.description} />
				))}
			</div>
		</Section>
	);
}
