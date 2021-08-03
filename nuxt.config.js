export default {
  target: 'static',
  head: {
    title: 'Rizze Dvonick',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width:device-width, initial-scale:1.0' },
      { name: 'description', content: 'There is nothing here. But if you are bored and have nothing to do, this is maybe worth try.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://dvonick.surge.sh/' },
      { name: 'og:title', content: 'Rizze Dvonick' },
      { name: 'og:description', content: 'There is nothing here. But if you are bored and have nothing to do, this is maybe worth try.' },
      { name: 'og:image', content: 'https://opengraph.githubassets.com/d0b2ed91f976ab78ac46f555f4197d64ca607c5041d8077612696baa2864b847/vt92i/dvonick.surge.sh' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://dvonick.surge.sh/' },
      { name: 'twitter:title', content: 'Rizze Dvonick' },
      { name: 'twitter:description', content: 'There is nothing here. But if you are bored and have nothing to do, this is maybe worth try.' },
      { name: 'twitter:image', content: 'https://opengraph.githubassets.com/d0b2ed91f976ab78ac46f555f4197d64ca607c5041d8077612696baa2864b847/vt92i/dvonick.surge.sh' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: [],
  build: {},
  generate: {
    fallback: true
  }
}
