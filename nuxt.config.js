module.exports = {
  mode: 'spa',
  head: {
    title: 'nuxt-spa-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'examples of nuxt spa mode'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['~/assets/styles/index.scss', 'element-ui/lib/theme-chalk/index.css'],
  loading: { color: '#3B8070' },
  plugins: ['@/plugins/element-ui'],
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
