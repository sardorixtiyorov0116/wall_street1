export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    }
  },

  runtimeConfig: {
    public: {
      baseUrl: 'https://horizonconsult.uz'
    }
  },

  css: ["~/assets/scss/main.scss"],

  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "nuxt-aos",
  ],

  plugins: [
    '~/plugins/i18n.js',
  ],

  nitro: {
    preset: "static",
  },

  vite: {
    plugins: [require("vite-svg-loader")()],
  },

  aos: {
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 1000,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  },

  compatibilityDate: "2025-04-29",
})
