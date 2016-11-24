<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
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
      msg: 'Use Vue 2.0 Today!'
    }
  },
  methods: {
    startHacking() {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
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
