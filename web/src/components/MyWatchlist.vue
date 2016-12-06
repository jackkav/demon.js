<template>
<el-row>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">
        Latest releases in your watchlist
          <div style="float: right;">
          Quality preference(TODO)
        </div>
        </span>
    </div>
    <release-table/>
  </el-card>
</el-row>
</template>
<script>
import ReleaseTable from './ReleaseTable.vue'
import ShowSelector from './ShowSelector.vue'
export default {
  components: {
    ReleaseTable,
    ShowSelector
  },
  data() {
    return {
      likedShows: localStorage.getItem('demon.liked') ? JSON.parse(localStorage.getItem('demon.liked')).sort() : [],
      loading: false
    }
  },
  methods: {
    handleLikedClose(title) {
      this.likedShows.splice(this.likedShows.indexOf(title), 1)
      localStorage.setItem('demon.liked', JSON.stringify(this.likedShows))
        // TODO: remove this show from seen list
    },
  }
}
</script>
