// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@vueuse/nuxt"
  ],
  googleFonts: {
    families: {
      Roboto: true
    }
  },
  css: ["~/assets/scss/index.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      SUPABASE_PROJECT_URL: process.env.SUPABASE_PROJECT_URL,
      SUPABASE_API_KEY: process.env.SUPABASE_API_KEY
    }
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" }
  }
});