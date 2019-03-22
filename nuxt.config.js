import webpack from 'webpack'

const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/common.css',
    '~/assets/test01',
    '~/assets/test02'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/antd-ui', ssr: false },
    { src: '@/plugins/axios', ssr: false },
    { src: '@/plugins/axiosService', ssr: false },
    { src: '@/plugins/do-storage', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/axios'],

  /**
   * Axios Module config
   */
  axios: {
    proxy: true,
    credentials: true
  },

  /**
   * Proxy Config
   */
  proxy: {
    '/huashang/bi/': {
      target: 'http://10.0.1.51:9909',
      changeOrigin: false,
      logLevel: 'debug'
    }
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
        $: 'jquery'
      })
    ],
    extend(config, ctx) {
      config.devtool = 'eval-source-map'
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
