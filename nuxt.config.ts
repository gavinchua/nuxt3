import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@pinia/nuxt',
    '@unocss/nuxt',
  ],
  typescript: {
    strict: true,
  },
  unocss: {
    // presets
    uno: true,
    icons: true,
    attributify: true,
    preflight: true,

    // core options
    shortcuts: {
      // shortcuts to multiple utilities
      // 'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
      // 'btn-green': 'text-white bg-green-500 hover:bg-green-700',
      // single utility alias
      // 'red': 'text-red-100'
    },
    rules: [],
  },
})
