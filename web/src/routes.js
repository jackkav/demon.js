const About = {
  template: '<p>about page</p>'
}
export default [
  {
    path: '/',
    component: require('components/TorrentTable.vue')
  }, {
    path: '/about',
    component: About
  }]
