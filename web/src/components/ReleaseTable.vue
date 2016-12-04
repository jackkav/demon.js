<template>
<div>
  <el-table v-loading.body="loading" element-loading-text="Loading..." :data="filtered(MyReleaseList)" border style="width: 100%; cursor: pointer;">
    <el-table-column prop="name" label="Name" align="left">
    </el-table-column>
    <el-table-column prop="quality" label="Quality" width="120">
    </el-table-column>
    <el-table-column prop="size" label="Size" width="120">
    </el-table-column>
    <el-table-column :context="_self" inline-template width="180">
      <div>
        <el-button size="small" @click="handleHide($index, row)">
          Hide
        </el-button>
        <el-button size="small" type="primary" @click="handleDelete($index, row)">
          Download
        </el-button>
      </div>
    </el-table-column>
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
      seenShows: JSON.parse(localStorage.getItem('demon.seen')) || [],
      loading: false,
      MyReleaseList: []
    }
  },
  methods: {
    fetchMyReleases() {
      if (!this.likedShows.length) return
      const query = this.likedShows.join(',')
      this.loading = true
      this.$http.get('/getShowsByTitles/' + query)
        .then((response) => {
          console.log(response.data)
          this.loading = false
          this.MyReleaseList = response.data
        })
    },
    filtered: function(releases) {
      return releases.filter(x => !this.seenShows.includes(x.title + '|' + x.episode))
    },
    handleHide(a, row) {
      event.stopPropagation()
      var vm = this
      const episode = `${row.title}|${row.episode}`
      if (vm.seenShows.includes(episode)) return

      this.$confirm('This will hide this episode. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        vm.seenShows.push(episode)
        localStorage.setItem('demon.seen', JSON.stringify(this.seenShows))
        vm.filteredShowList = vm.filteredShowList.filter(x => !vm.seenShows.includes(x.title + '|' + x.episode))

        this.$message({
          type: 'success',
          message: 'Hidden'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Hide canceled'
        })
      })
    },
  }
}
</script>
