export type ProjectBlock = { id: string } & (
	| { type: "text"; title?: string; paragraphs: string[] }
	| { type: "list"; title: string; intro?: string; items: (string | { term: string; text: string })[]; outro?: string }
	| { type: "flow"; title?: string; steps: string[]; paragraphs?: string[] }
	| { type: "timeline"; title: string; items: { period: string; title: string; text: string }[] }
	| { type: "stats"; title: string; items: { value: string; label: string }[] }
	| { type: "group"; title: string; blocks: ProjectBlock[] }
);

export interface Project {
	slug: string;
	title: string;
	summary: string;
	tags: string[];
	// Imagem em public/portfolio/ (ex.: "/portfolio/projeto.jpg"), proporção 16:10.
	image?: string;
	// Descrição da foto para leitores de tela.
	imageAlt?: string;
	url?: string;
	// Informações curtas (cliente, período...). O escopo, mais longo, fica em linha própria.
	meta: { label: string; value: string }[];
	scope: string;
	intro: string[];
	blocks: ProjectBlock[];
}

export const projects: Project[] = [
	{
		slug: "selecao-caixa-cultural",
		title: "Seleção CAIXA Cultural",
		summary:
			"Uma plataforma digital para transformar milhares de propostas culturais em programação para todo o Brasil.",
		tags: ["Plataforma web", "Sistema de avaliação", "Cultura"],
		image: "/portfolio/selecao-caixa-cultural.jpg",
		imageAlt: "Mulher sorridente segurando uma paleta de tintas e um pincel, da campanha Culture com a CAIXA",
		meta: [
			{ label: "Cliente", value: "Caixa Econômica Federal / CAIXA Cultural" },
			{ label: "Edições", value: "2023-2024 · 2025 · 2026-2027" },
		],
		scope: "Plataforma pública de inscrição, plataforma de avaliação e organização da programação",
		intro: [
			"Ao longo de três edições, a Fabiz foi responsável pelo desenvolvimento e pela evolução da plataforma digital da Seleção CAIXA Cultural, a iniciativa nacional da CAIXA para receber, avaliar e selecionar os projetos que compõem a programação de suas unidades culturais.",
		],
		blocks: [
			{
				id: "desafio",
				type: "text",
				title: "O desafio",
				paragraphs: [
					"O desafio ia muito além de disponibilizar um formulário de inscrição. Era preciso estruturar digitalmente todo o ciclo de seleção, do cadastro de produtores à organização da programação, para milhares de propostas de música, teatro, dança, artes visuais, cinema e vivências vindas de todas as regiões do país.",
				],
			},
			{
				id: "dois-ambientes",
				type: "group",
				title: "Uma plataforma. Dois ambientes. Um processo completo.",
				blocks: [
					{
						id: "area-publica",
						type: "list",
						title: "Área pública",
						intro: "Um ambiente pensado para produtores e agentes culturais de todo o Brasil, com:",
						items: [
							"Cadastro de proponentes e gerenciamento de seus projetos",
							"Preenchimento e envio das propostas, com upload de documentos, materiais e planilhas",
							"Escolha das unidades e espaços culturais desejados",
							"Acompanhamento do status das inscrições",
							"Consulta às regras e informações do processo seletivo",
						],
						outro:
							"A experiência precisava ser simples e confiável, mesmo diante de um processo com grande volume de informações e requisitos.",
					},
					{
						id: "avaliacao",
						type: "text",
						title: "Plataforma de avaliação",
						paragraphs: [
							"Nos bastidores, um ambiente privado organizava todo o fluxo de avaliação: distribuição das propostas entre avaliadores, registro das análises, validação de requisitos e consolidação dos resultados. Avaliações individuais se transformavam em uma visão estruturada da seleção, até chegar à lista final de projetos classificados, com rastreabilidade em cada etapa.",
						],
					},
				],
			},
			{
				id: "programacao",
				type: "text",
				title: "Da seleção à programação",
				paragraphs: [
					"O grande diferencial do projeto é que o sistema não terminava na escolha dos projetos. A própria plataforma gerava as agendas de distribuição das atrações entre as unidades da CAIXA Cultural, cruzando espaços, cidades, períodos e diferentes configurações de programação.",
				],
			},
			{
				id: "fluxo",
				type: "flow",
				steps: ["Inscrição", "Avaliação", "Seleção", "Programação"],
				paragraphs: [
					"Etapas que normalmente seriam tratadas separadamente passaram a formar um único fluxo digital, que acompanha o projeto desde a submissão até sua realização em uma das unidades da CAIXA Cultural.",
				],
			},
			{
				id: "edicoes",
				type: "timeline",
				title: "Três edições, uma evolução contínua",
				items: [
					{
						period: "2023-2024",
						title: "A retomada",
						text: "O edital voltou após cinco anos, e a plataforma estreou com recorde de inscrições.",
					},
					{
						period: "2025",
						title: "Consolidação",
						text: "Um ciclo mais maduro, com foco na circulação de projetos entre as unidades.",
					},
					{
						period: "2026-2027",
						title: "Expansão",
						text: "A maior edição em investimento, a primeira com a nova unidade de Belém e uma programação de dois anos em oito capitais.",
					},
				],
			},
			{
				id: "numeros",
				type: "stats",
				title: "Em números",
				items: [
					{ value: "~19.700", label: "projetos inscritos em três edições" },
					{ value: "560+", label: "projetos selecionados" },
					{ value: "8", label: "unidades da CAIXA Cultural atendidas" },
					{ value: "R$ 120 mi", label: "em investimento previsto só na edição 2026-2027" },
				],
			},
			{
				id: "resultado",
				type: "text",
				title: "O resultado",
				paragraphs: [
					"Uma plataforma que digitalizou e centralizou o ciclo de seleção de projetos culturais da CAIXA. Ela conecta produtores, avaliadores e equipes de programação em um único ecossistema, com mais organização, rastreabilidade e eficiência, e ajuda a transformar propostas de todo o país em programação nos palcos e galerias da CAIXA Cultural.",
				],
			},
		],
	},
	{
		slug: "galeria-visit-brasil",
		title: "Galeria Visit Brasil",
		summary:
			"Uma experiência digital que acompanhou o Brasil por nove cidades, em três continentes e seis idiomas.",
		tags: ["Site multilíngue", "Quiz interativo", "Totens", "Turismo"],
		image: "/portfolio/galeria-visit-brasil.jpg",
		imageAlt: "Bondinho do Pão de Açúcar com a paisagem do Rio de Janeiro ao fundo",
		meta: [
			{ label: "Cliente", value: "Embratur (Visit Brasil), em parceria com o Sebrae" },
			{ label: "Período", value: "2023-2024" },
		],
		scope:
			"Site multilíngue, quiz de perfil de viajante, aplicação para totens, agendas, playlists e materiais para download",
		intro: [
			"Em 2023, a Embratur lançou a Galeria Visit Brasil, uma ação inédita e itinerante que levou a cultura, a gastronomia, a música e as paisagens brasileiras para galerias de arte em algumas das principais cidades do mundo. A Fabiz desenvolveu a camada digital da experiência: um site e uma aplicação interativa que transformavam a curiosidade de cada visitante num roteiro de viagem pelo Brasil.",
		],
		blocks: [
			{
				id: "desafio",
				type: "text",
				title: "O desafio",
				paragraphs: [
					"A Galeria apresentava o Brasil como uma obra de arte, com uma experiência imersiva e sensorial. O desafio era levar esse encantamento para além das paredes da galeria. Era preciso dar ao visitante algo pessoal, útil e que continuasse com ele depois do evento, com uma única solução capaz de funcionar na web e presencialmente, em nove cidades e para públicos de línguas e culturas diferentes.",
				],
			},
			{
				id: "quiz",
				type: "list",
				title: "Um quiz que vira roteiro",
				intro:
					"O coração do projeto era um quiz interativo que identificava o perfil de cada visitante: que tipo de viajante ele é e que tipo de viagem combina com ele. O resultado indicava um de cinco perfis:",
				items: [
					{
						term: "Foodie",
						text: "para quem viaja pela gastronomia, das origens dos ingredientes às feiras, mercados, aulas de culinária e festivais",
					},
					{
						term: "Cultural Enthusiast",
						text: "para quem busca experiências transformadoras através das artes e de outras formas de ver o mundo",
					},
					{
						term: "Authenticity Seeker",
						text: "para quem quer se conectar com o legado diverso do Brasil, valorizando a cultura popular e o protagonismo dos povos negros e indígenas",
					},
					{
						term: "Nature Trailblazer",
						text: "para os apaixonados pela natureza e pela aventura no país com a maior biodiversidade do planeta",
					},
					{
						term: "Tropical Lifestyle",
						text: "para quem busca sol, praia e descanso, sem abrir mão da cultura, da gastronomia e das tradições locais",
					},
				],
				outro:
					"Com o perfil definido, o usuário recebia um guia completo e personalizado, com destinos e pontos turísticos no Brasil selecionados para ele. Em poucos minutos, uma experiência lúdica se transformava num convite concreto para conhecer o país.",
			},
			{
				id: "totens",
				type: "list",
				title: "Do site aos totens",
				intro: "O quiz estava disponível em dois canais:",
				items: [
					"No site, acessível para qualquer pessoa, em qualquer lugar do mundo",
					"Em totens instalados nas galerias, integrados ao percurso da exposição",
				],
				outro:
					"A mesma experiência conectava o público presencial ao digital e prolongava o contato do visitante com o Brasil para além do evento.",
			},
			{
				id: "idiomas",
				type: "text",
				title: "Falando a língua de cada visitante",
				paragraphs: [
					"Para uma ação que atravessou Europa e Américas, o idioma era parte essencial da experiência. Toda a plataforma, incluindo o site, o quiz, os perfis e os guias, foi desenvolvida em seis idiomas: português, inglês, espanhol, francês, italiano e alemão.",
					"Assim, cada visitante, em Paris, Roma, Nova York ou Bogotá, vivia a experiência na sua própria língua.",
				],
			},
			{
				id: "hub",
				type: "list",
				title: "Um hub para toda a jornada",
				intro: "Além do quiz, o site reunia tudo o que o público precisava para acompanhar a Galeria:",
				items: [
					"Calendário do circuito, com as datas e cidades por onde a Galeria passaria",
					"Agenda de cada edição, com a programação de atividades em cada cidade",
					"Três playlists exclusivas, criadas especialmente para viajantes, para ouvir o Brasil antes, durante e depois da viagem",
					"Cartazes para download, para levar a identidade visual da campanha para casa",
				],
			},
			{
				id: "cidades",
				type: "list",
				title: "Nove cidades, três continentes",
				items: [
					{ term: "Europa", text: "Paris, Roma e Londres" },
					{ term: "América do Norte", text: "Nova York, Los Angeles e Miami" },
					{ term: "América do Sul", text: "Buenos Aires, Santiago e Bogotá" },
				],
			},
			{
				id: "numeros",
				type: "stats",
				title: "Em números",
				items: [
					{ value: "9", label: "cidades" },
					{ value: "3", label: "continentes" },
					{ value: "6", label: "idiomas" },
					{ value: "5", label: "perfis de viajante" },
					{ value: "2", label: "canais de experiência: web e totens presenciais" },
					{ value: "3", label: "playlists exclusivas" },
				],
			},
			{
				id: "resultado",
				type: "text",
				title: "O resultado",
				paragraphs: [
					"Uma plataforma que deu à Galeria Visit Brasil uma extensão digital à altura da experiência presencial. Ela falou a língua de cada visitante, transformou curiosidade num roteiro feito à sua medida e manteve o Brasil presente muito depois do fim de cada exposição.",
				],
			},
		],
	},
	{
		slug: "grupo-com-atitude",
		title: "Grupo Com Atitude",
		summary: "Um ecossistema digital para três marcas unidas pelo mesmo propósito.",
		tags: ["Sites institucionais", "ESG", "Sustentabilidade"],
		image: "/portfolio/grupo-com-atitude.jpg",
		imageAlt: "Close no olho de uma mulher negra, imagem do site do Grupo Com Atitude",
		meta: [
			{ label: "Cliente", value: "Grupo Com Atitude" },
			{ label: "Entregas", value: "Grupo Com Atitude · Malala Filmes · ACESSE Liderança ESG" },
		],
		scope: "Desenvolvimento de três sites institucionais integrados",
		intro: [
			"O Grupo Com Atitude atua há mais de duas décadas com sustentabilidade, ajudando empresas a incorporar a cultura ESG nas suas práticas através de consultorias, programas, treinamentos e conteúdos. O grupo reúne marcas com públicos e linguagens próprias, mas com um mesmo compromisso: gerar impacto social e ambiental real.",
			"A Fabiz desenvolveu a presença digital deste ecossistema: três sites, cada um com a sua identidade, conectados por um propósito comum.",
		],
		blocks: [
			{
				id: "desafio",
				type: "text",
				title: "O desafio",
				paragraphs: [
					"Cada marca falava com um público diferente. Havia empresas à procura de consultoria ESG, marcas à procura de uma produtora audiovisual e organizações interessadas em desenvolver as suas lideranças. O desafio era dar a cada uma um site com voz e personalidade próprias, sem perder a ligação com o grupo e a coerência de uma narrativa construída em torno da sustentabilidade.",
				],
			},
			{
				id: "grupo-com-atitude",
				type: "text",
				title: "Grupo Com Atitude: o ponto de partida",
				paragraphs: [
					"O site institucional apresenta o grupo, a sua atuação e a sua visão de ESG, organizada em grandes eixos de impacto: combate à fome e à desigualdade; educação, trabalho e inovação; cidades sustentáveis; água, energia e saúde; e igualdade de gênero.",
					"É também a porta de entrada do ecossistema. A partir dele, o visitante conhece as empresas do grupo, os clientes e os parceiros, e chega a cada uma das marcas.",
				],
			},
			{
				id: "malala-filmes",
				type: "text",
				title: "Malala Filmes: audiovisual com impacto",
				paragraphs: [
					"Uma produtora criada e liderada por mulheres, premiada em Cannes com dois Leões, e cujas produções geram contrapartidas sociais e ambientais. O site apresenta a produtora, o seu time e o seu portfólio em vídeo, e dá destaque aos compromissos que a diferenciam: fornecedores responsáveis, gestão de resíduos lixo zero, compensação de carbono e revitalização de escolas públicas.",
					"Ganha também espaço a Escola de Audiovisual Adélia Sampaio, iniciativa da Malala que forma mulheres negras e da periferia, pessoas LGBTQIAPN+ e PCDs para o mercado audiovisual.",
				],
			},
			{
				id: "acesse",
				type: "text",
				title: "ACESSE: liderança e saúde emocional",
				paragraphs: [
					"A ACESSE Liderança é a academia de liderança ESG do grupo, focada em saúde emocional e mental nas empresas. O site foi pensado para comunicar uma proposta de valor clara a gestores e organizações: o desafio, a abordagem, a metodologia e o time multidisciplinar de especialistas que conduz a jornada.",
				],
			},
			{
				id: "narrativa",
				type: "text",
				title: "Três marcas, uma mesma narrativa",
				paragraphs: [
					"Cada site tem identidade visual e tom próprios, adequados ao seu público. Todos partilham, no entanto, a mesma base: um propósito ligado à sustentabilidade, uma comunicação clara e uma experiência cuidada em qualquer dispositivo. Juntos, formam um ecossistema em que o visitante pode entrar por qualquer marca e descobrir tudo o que o grupo faz.",
				],
			},
			{
				id: "numeros",
				type: "stats",
				title: "Em números",
				items: [
					{ value: "3", label: "sites" },
					{ value: "3", label: "marcas" },
					{ value: "1", label: "propósito comum" },
				],
			},
			{
				id: "resultado",
				type: "text",
				title: "O resultado",
				paragraphs: [
					"Uma presença digital coerente para um grupo com múltiplas frentes. Cada marca tem espaço para contar a sua própria história, e todas reforçam, em conjunto, o posicionamento do Grupo Com Atitude como referência em sustentabilidade e impacto.",
				],
			},
		],
	},
];

export function getProject(slug: string) {
	return projects.find((project) => project.slug === slug);
}
