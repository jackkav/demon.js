<template>
<div id="app">
  <top-bar/>
  <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1> -->
  <torrent-table/>


</div>
</template>

<script>
import TorrentTable from './components/TorrentTable'
import TopBar from './components/TopBar'

export default {
  name: 'app',
  components: {
    TorrentTable,
    TopBar,
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

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
}
</style>
