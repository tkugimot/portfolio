import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  head: {
    title: "Toshimitsu Kugimoto's portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt TS project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#3B8070' },
  css: [
    '~/assets/scss/mystyles.scss'
  ],
  modules: [
    '@nuxtjs/bulma',
    'nuxt-fontawesome'
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  }
}

export default config;
