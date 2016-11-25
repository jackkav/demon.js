<template>
<div id="app">
  <top-bar/>
  <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1> -->
  <el-row>
    <torrent-table/>
  </el-row>
</div>
</template>

<script>
import TorrentTable from './components/TorrentTable'
import TopBar from './components/TopBar'
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    TorrentTable,
    TopBar,
    Hello,
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
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
