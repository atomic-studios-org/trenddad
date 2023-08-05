// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@sidebase/nuxt-auth", "@pinia/nuxt"],
  components: {
    dirs: ["~/components"],
    global: true,
  },
  auth: {
    isEnabled: true,
    baseURL: "/api/auth",
  },
});
