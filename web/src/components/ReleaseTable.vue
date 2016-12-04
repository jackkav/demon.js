<template>
<div>
  <el-table v-loading.body="loading" element-loading-text="Loading..." :data="MyReleaseList" border style="width: 100%; cursor: pointer;">
    <el-table-column prop="name" label="Name" align="left">
    </el-table-column>
    <el-table-column prop="quality" label="Quality" width="120">
    </el-table-column>
    <el-table-column prop="size" label="Size" width="120">
    </el-table-column>
    <!-- <el-table-column width="180" :context="_self" inline-template>
      <div>
        <el-button v-if="row.watching" size="small" type="success" @click="handleSeen($index, row)">Seen</el-button>
        <el-button v-else size="small" type="success" @click="handleWatching($index, row)">Watching</el-button>
        <el-button size="small" type="danger" @click="handleIgnore($index, row)">Ignore</el-button>
      </div>
    </el-table-column> -->
  </el-table>
</div>
</template>
<script>
export default {
  mounted() {
    this.fetchMyReleases()
  },
  data() {
    return {
      likedShows: localStorage.getItem('demon.liked') ? JSON.parse(localStorage.getItem('demon.liked')).sort() : [],
      loading: false,
      MyReleaseList: []
    }
  },
  methods: {
    fetchMyReleases() {
      const query = this.likedShows.join(',')
      this.loading = true
      this.$http.get('/getShowsByTitles/' + query)
        .then((response) => {
          console.log(response.data)
          this.loading = false
          this.MyReleaseList = response.data
        })
    }
  }
}
</script>
