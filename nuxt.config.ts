// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
  routeRules: {
    "/": { isr: true },
  },
});
