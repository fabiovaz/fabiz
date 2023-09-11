/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'shark': '#1f1f21',
        'meadow': '#2ae98d',
      }
    }
  },
  plugins: [],
}

