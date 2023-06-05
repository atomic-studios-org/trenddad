// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "@nuxtjs/i18n",
    "@sidebase/nuxt-auth",
    "@pinia/nuxt",
  ],
  routeRules: {
    "/": {
      isr: true,
    },
  },
  components: {
    dirs: ["~/components"],
    global: true,
  },
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
  auth: {
    isEnabled: true,
    baseURL: "/api/auth",
  },
});
