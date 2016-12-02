const About = {
  template: '<p>test</p>'
}
export default [
  {
    path: '/',
    component: About
  }, {
    path: '/latest',
    component: require('components/TorrentTable.vue')
  }, {
    path: '/about',
    component: About
  }, {
    path: '/settings',
    component: require('components/Settings.vue')
  },
  {
    path: '/*',
    redirect: '/'
  }]
