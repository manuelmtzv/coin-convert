// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    currencyApiBase: process.env.CURRENCY_API_BASE,
  },
});
