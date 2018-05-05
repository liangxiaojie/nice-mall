const pkg = require('./package')
const path = require('path')
const vuxLoader = require('vux-loader')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '安徽和恒服务平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    API_SERVICE_URL: process.env.API_SERVICE_URL || 'http://localhost:7001'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#23c31f' },

  /*
  ** Global CSS
  */
  css: [
    'vux/src/styles/reset.less',
    'vux/src/styles/1px.less',
    'assets/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/rem', ssr: false }, {
      src: '~/plugins/vux-plugins',
      ssr: false
    }, {
      src: '~/plugins/vux-components',
      ssr: true
    },
    '@/plugins/font-awesome-icon',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/apollo'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // swiper
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/(dom7|swiper)\/.*/,
        loader: 'babel-loader',
        options: this.getBabelOptions({ isServer: !ctx.isClient })
      })

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.devtool = 'eval'

      const configs = vuxLoader.merge(config, {
        options: {
          ssr: true
        },
        plugins: ['vux-ui', {
          name: 'less-theme',
          path: path.join(__dirname, './assets/theme.less')
        }]
      })
      return configs
    }
  }
}
