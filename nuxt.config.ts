// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Fabiz.',
      meta: [
        { 
          name: 'description', 
          content: 'Impulsionando o seu sucesso digital com soluções criativas e estratégicas. Transforme ideias em resultados surpreendentes. Descubra o poder da nossa abordagem!'
        }
      ],
      htmlAttrs: {
        lang: 'pt-br'
      }
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [['@nuxtjs/google-fonts', {
    families: {
      'Inter': [300, 600]
    }
  }], ['nuxt-gtag', {
    id: 'G-SHG6DD2QW2'
  }], '@nuxtjs/google-fonts', 'nuxt-gtag']
})