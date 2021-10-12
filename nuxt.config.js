export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt + Vue3',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'keywords', name: 'keywords', content: '被程式設計的猴子, Nuxt.js, Bootstrap 4, MonkeyBinBin, blog' },
      { hid: 'description', name: 'description', content: '公版 description' },
      { hid: 'author', name: 'author', content: '中信資融股份有限公司' },

      { property: 'fb:app_id', content: '123' },
      { hid: 'og:title', property: 'og:title', content: '被程式設計的猴子' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: '網址' },
      { hid: 'og:image', property: 'og:image', content: 'img路徑' },
      { hid: 'og:description', property: 'og:description', content: '使用 Nuxt.js、 Bootstrap 4 建立的blog。分享與紀錄一些程式開發的東西。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/base.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
 