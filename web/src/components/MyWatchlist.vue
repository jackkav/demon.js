<template>
<el-row>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">
        <el-tooltip placement="right">
          <div v-for="title in likedShows"  slot="content">
              {{title}}
            </div>
          <el-button>My watch list</el-button>
        </el-tooltip>
          <el-button style="float: right;" type="primary" icon="search">Find more shows</el-button>
        </span>
    </div>
    This component should list releases in my watchlist, allow me to hide watched, and suggest shows to watch when empty For example: Nothing out yet, go find more shows!
    <release-table/>
  </el-card>
</el-row>
</template>
<script>
import ReleaseTable from './ReleaseTable.vue'
export default {
  components: {
    ReleaseTable
  },
  data() {
    return {
      likedShows: localStorage.getItem('demon.liked') ? JSON.parse(localStorage.getItem('demon.liked')).sort() : [],
      loading: false
    }
  },
}
</script>
