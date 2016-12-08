const About = {
  template: `
  <ol>
    <h1>TODO:</h1>
    <li>add feedback form to hide button</li>
    <li>add feedback to hide fakes</li>
    <li>clear search after submit</li>
    <li>add latest release data to localStorage when releases are collected</li>
    <li>instant quality preference change</li>
  </ol>
  `
}
export default [
  {
    path: '/',
    component: require('components/HomePage.vue')
  }, {
    path: '/latest',
    component: require('components/TorrentTable.vue')
  }, {
    path: '/about',
    component: About
  }, {
    path: '/*',
    redirect: '/'
  }]
