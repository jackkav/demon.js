const About = {
  template: `
  <ol>
    <h1>TODO:</h1>
    <li>clear search after submit</li>
    <li>get latest release by adding latest release episode and date to getShowTitles? then set next release as a week later</li>
    <li>when nextRelease is greater than one week ago set to unknown</li>
    <li>parse show data from api</li>
    <li>add feedback form to hide button</li>
    <li>fix quality preference</li>
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
    path: '/settings',
    component: require('components/Settings.vue')
  },
  {
    path: '/*',
    redirect: '/'
  }]
