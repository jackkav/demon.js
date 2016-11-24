<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <torrent-table></torrent-table>
  </div>
</template>

<script>
import TorrentTable from './components/TorrentTable'

export default {
  name: 'app',
  components: {
    TorrentTable,
  },
  data() {
    return {
      msg: 'Just playing with vue.js and element-ui!'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
