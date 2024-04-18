// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "floating-vue/nuxt",
  ],
  plugins: [{ src: "~/plugins/VueDebounce.js" }],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    currencyApiBase: process.env.CURRENCY_API_BASE,
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
    display: "swap",
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
