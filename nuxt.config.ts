// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  // compatibility: { nuxt: "3.9.0" },
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  modules: ["@nuxt/ui"],
  vite: {
    plugins: [require("vite-svg-loader")()],
  },
})