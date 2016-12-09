const About = {
  template: `
  <ol>
    <h1>TODO:</h1>
    <li>latest with search</li>
    <li>post to api array of show titles instead of commas seperated list</li>
    <li>get from api object rather than list of title, containing magnet hash to use as key</li>
    <li>try to get imdbID add scrape time, to provide better show list keys and lookup ids</li>
    <li>add usage guide</li>
    <li>add feedback form to hide button</li>
    <li>add feedback to hide fakes</li>
    <li>add latest release data to localStorage when releases are collected</li>
    <li>instant quality preference change</li>
  </ol>
  `
}
export default [
  {
    path: '/',
    component: require('components/Releases/MyWatchlist.vue')
  }, {
    path: '/latest',
    component: require('components/TorrentTable.vue')
  }, {
    path: '/watchlist',
    component: require('components/WatchList/Manage.vue')
  }, {
    path: '/about',
    component: About
  }, {
    path: '/*',
    redirect: '/'
  }]
