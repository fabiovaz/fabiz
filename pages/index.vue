<script setup>
const dataServices = [
  {
    title: 'UI/UX Design',
    description: 'Nossa especialidade é criar designs de UX/UI excepcionais que proporcionam experiências memoráveis. Combinamos habilidades criativas e conhecimentos técnicos para projetar interfaces intuitivas, esteticamente agradáveis e altamente funcionais. Nosso foco está em compreender as necessidades e expectativas dos usuários, garantindo uma interação fluida e agradável em todos os pontos de contato. Conte conosco para criar designs de UX/UI que encantem seus usuários e impulsionem o sucesso do seu produto ou serviço.',
  },
  {
    title: 'Desenvolvimento',
    description: 'Construímos sites modernos e os hospedamos online, utilizando tecnologias atuais como Vue.js e React. Nossa abordagem combina design criativo e funcionalidades avançadas para entregar uma experiência única aos usuários. Com foco na usabilidade e desempenho, desenvolvemos soluções web dinâmicas e responsivas. Conte conosco para criar um site incrível que se destaque na era digital.',
  },
  {
    title: 'SEO',
    description: 'Aproveite o máximo do seu site com a otimização de SEO. Nossa equipe especializada melhora a visibilidade do seu site, atrai tráfego segmentado e aumenta sua presença online. Obtenha posições mais altas nos resultados de busca, aumentando o tráfego orgânico, o engajamento e as taxas de conversão. Alcance o sucesso online com nossos serviços de otimização de SEO.',
  },
  {
    title: 'Redes Sociais',
    description: 'Impulsionamos suas redes sociais com conteúdo excepcional e experiências incríveis. Nossa equipe especializada em gerenciamento de redes sociais combina criatividade e conhecimento técnico para criar uma presença digital única para sua marca. Cuidamos de todos os detalhes, desde a estratégia de conteúdo até a interação com seu público-alvo. Nosso objetivo é oferecer uma experiência envolvente e memorável para seus seguidores, aumentando o engajamento e fortalecendo o relacionamento com sua marca. Confie em nós para transformar suas redes sociais em plataformas poderosas que cativam e conquistam seus seguidores.',
  }
]
</script>

<template>
  <Header class="container max-w-3xl px-4 md:px-0 py-16" />

  <main class="container max-w-3xl px-4 md:px-0">

    <section id="home" class="mt-28 space-y-4">
      <Badge title="INÍCIO" icon="home" />
      <h1 class="pt-6 text-4xl md:text-6xl leading-normal md:leading-relaxed text-white">Diga olá para a <span class="text-meadow">Fabiz</span>. Criando experiências para o seu sucesso online</h1>
      <p class="leading-loose">Com paixão e criatividade, projetamos soluções personalizadas para atender aos sonhos e objetivos de nossos clientes. Transformamos ideias em realidade, dando vida a projetos incríveis. Sua visão é o nosso combustível, e nosso compromisso é entregar resultados excepcionais. Juntos, construímos o resultado.</p>
    </section>

    <section id="about" class="mt-28 space-y-4">
      <Badge title="SOBRE" icon="about" />
      <h1 class="pt-6 text-3xl md:text-5xl leading-normal md:leading-normal text-white">Cada projeto começa com uma <span class="text-meadow">história</span> ainda melhor</h1>
      <p class="leading-loose">Desde o início de nossa jornada como uma empresa de soluções digitais, temos trabalhado em estreita colaboração com nossos clientes, fornecendo consultoria especializada e reunindo equipes talentosas para criar produtos digitais inovadores. Nossa ampla expertise abrange áreas como desenvolvimento de aplicativos e websites, estratégias de marketing digital e automação de processos. Nosso combustível é a paixão pela tecnologia, e estamos em constante busca por soluções que impulsionem o sucesso de nossos clientes. Ao combinar criatividade, conhecimento técnico e visão estratégica, enfrentamos cada desafio com determinação, transformando ideias em resultados tangíveis e impactantes.</p>
    </section>

    <section id="services" class="mt-28 space-y-4">
      <Badge title="SERVIÇOS" icon="services" />
      <h1 class="pt-6 text-3xl md:text-5xl leading-normal md:leading-normal text-white">Nossas <span class="text-meadow">especialidades</span></h1>
      <div v-for="(service, index) in dataServices" :key="index">
        <CardService
          :title="service.title"
          :description="service.description"
        />
      </div>
    </section>

    <!-- <section id="porfolio">
      <div class="container">
        <div class="row">
          <div class="col">
            <Badge title="PORTFÓLIO" class="mt-10 mb-5" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h1 class="display-5 lh-base"><span class="text-primary">Projetos</span> em destaque</h1>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section id="testmonials">
      <div class="container">
        <div class="row">
          <div class="col">
            <Badge title="DEPOIMENTOS" class="mt-10 mb-5" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h1 class="display-5 lh-base">Confiança dos <span class="text-primary">Clientes</span></h1>
          </div>
        </div>
      </div>
    </section> -->

    <section id="contact" class="mt-28 space-y-4">
      <Badge title="CONTATO" icon="contact" />
      <h1 class="pt-6 text-3xl md:text-5xl leading-normal md:leading-normal text-white">Vamos trabalhar <span class="text-meadow">juntos!</span></h1>

      <!-- <form>
        <div class="row">
          <div class="col-md-6 mb-5">
            <label for="name" class="form-label">NOME</label>
            <input type="text" class="form-control" id="name" placeholder="Seu nome completo">
          </div>
          <div class="col-md-6 mb-5">
            <label for="email" class="form-label">EMAIL</label>
            <input type="email" class="form-control" id="email" placeholder="Seu endereço de email">
          </div>
          <div class="col-md-6 mb-5">
            <label for="name" class="form-label">TELEFONE (OPCIONAL)</label>
            <input type="text" class="form-control" id="name" placeholder="Seu número de telefone">
          </div>
          <div class="col-md-6 mb-5">
            <label for="email" class="form-label">ASSUNTO</label>
            <input type="email" class="form-control" id="email" placeholder="Digite o assunto">
          </div>
          <div class="col-md-6 mb-5">
            <label for="name" class="form-label">MENSAGEM</label>
            <textarea class="form-control" id="mensagem" rows="4" placeholder="Escreva aqui a sua menasgem..." />
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">ENVIAR MENSAGEM</button>
          </div>
        </div>
      </form> -->
    </section>
  </main>

  <Footer class="container max-w-3xl px-4 md:px-0 py-16" />
</template>
