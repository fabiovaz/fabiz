// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Inter': [300, 600]
      }
    }],
    ['nuxt-gtag', {
      id: 'G-SHG6DD2QW2'
    }]
  ]
})
