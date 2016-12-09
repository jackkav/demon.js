<template>
<div>
  <el-table v-loading.body="loading" element-loading-text="Loading..." :data="filteredShowList" border @current-change="downloading" style="width: 100%; cursor: pointer;" :row-class-name="likedRowHighlight">
    <el-table-column prop="name" label="Name" align="left" @click="downloading">
    </el-table-column>
    <!-- <el-table-column prop="quality" label="Quality" width="120">
    </el-table-column> -->
    <el-table-column prop="size" label="Size" width="120">
    </el-table-column>
    <el-table-column prop="released" label="Released" width="160">
    </el-table-column>
    <!-- <el-table-column prop="clicks" label="Clicks" width="90">
    </el-table-column> -->
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
import moment from 'moment'
import qualityFilter from '../lib/filter'
// TODO pagination?
export default {
  mounted() {
    this.fetchShows()
  },
  methods: {
    fetchShows() {
      var vm = this
      vm.loading = true
      this.$http.get('/shows')
        .then((response) => {
          vm.loading = false
          for (var d of response.data) {
            if (!this.dislikedShows.includes(d.title) && !this.seenShows.includes(`${d.title}|${d.episode}`)) {
              d.released = moment(d.addedOn).fromNow()
              if (vm.likedShows && vm.likedShows.indexOf(d.title) !== -1) d.watching = true
              vm.showList.push(d)
              vm.filteredShowList.push(d)
            }
          }
          vm.filteredShowList = qualityFilter(vm.filteredShowList, localStorage.getItem('demon.quality'))
          if (vm.filteredShowList && vm.filteredShowList.filter(x => x.watching)) {
            const percentageOfShowsInListInWatchedState = vm.filteredShowList.filter(x => x.watching).length / vm.filteredShowList.length * 100
            vm.trainingLevel = Number(percentageOfShowsInListInWatchedState.toFixed())
          }
        })
        .catch(function(response) {
          vm.loading = false
          console.log(response)
        })
    },
    downloading(val, i) {
      val.clicks = val.clicks || 0
      val.clicks += 1
      let notifyContent = {
        title: 'Downloading...',
        message: val.name,
        duration: 3000
      }
      this.$notify.success(notifyContent)

      let toUpdate = {
        clicks: val.clicks
      }
      this.$http.put('/shows/' + val.hash, toUpdate)
        .catch(function(response) {
          console.log(response)
        })

      location.href = val.magnet
    },
    handleIgnore(a, row) {
      event.stopPropagation()
        // add to dislike list
      if (this.dislikedShows.includes(row.title)) return
      this.dislikedShows.push(row.title)
      localStorage.setItem('demon.disliked', JSON.stringify(this.dislikedShows))
        // remove from main list
      this.filteredShowList = this.filteredShowList.filter(x => !this.dislikedShows.includes(x.title))
        // remove from liked list
      this.likedShows = this.likedShows.filter(x => x !== row.title)
      localStorage.setItem('demon.liked', JSON.stringify(this.likedShows))
      const msg = {
        message: `You're don't care about ${row.title} huh...`,
        type: 'warning'
      }
      this.$message(msg)
      if (this.filteredShowList && this.filteredShowList.filter(x => x.watching)) {
        const percentageOfShowsInListInWatchedState = this.filteredShowList.filter(x => x.watching).length / this.filteredShowList.length * 100
        this.trainingLevel = Number(percentageOfShowsInListInWatchedState.toFixed())
      }
    },
    handleWatching(a, row) {
      event.stopPropagation()
      if (this.likedShows.includes(row.title)) return
      row.watching = true
      this.likedShows.push(row.title)
      localStorage.setItem('demon.liked', JSON.stringify(this.likedShows))
      const msg = {
        message: `You're watching ${row.title} huh...`,
        type: 'success'
      }
      this.$message(msg)
      if (this.filteredShowList && this.filteredShowList.filter(x => x.watching)) {
        const percentageOfShowsInListInWatchedState = this.filteredShowList.filter(x => x.watching).length / this.filteredShowList.length * 100
        this.trainingLevel = Number(percentageOfShowsInListInWatchedState.toFixed())
      }
    },
    handleSeen(a, row) {
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
    likedRowHighlight(row, index) {
      if (this.likedShows.includes(row.title)) {
        return 'info-row'
      }
      return ''
    },
    qualitySwitch(prefer720p) {
      // if two exist with same time and episode then filter out quality of those
      if (prefer720p) {
        this.filteredShowList = qualityFilter(this.showList, '720p')
        localStorage.setItem('demon.prefer720p', true)
      } else {
        this.filteredShowList = qualityFilter(this.showList, 'HDTV')
        localStorage.setItem('demon.prefer720p', false)
      }
    }
  },
  data() {
    return {
      loading: false,
      showList: [],
      filteredShowList: [],
      dislikedShows: JSON.parse(localStorage.getItem('demon.disliked')) || [],
      likedShows: JSON.parse(localStorage.getItem('demon.liked')) || [],
      seenShows: JSON.parse(localStorage.getItem('demon.seen')) || [],
      prefer720p: JSON.parse(localStorage.getItem('demon.prefer720p')) || false,
      trainingLevel: 0 // TODO: total in view / total watching * 100
    }
  }
}
</script>
<style>
.el-table .info-row {
  background: #c9e5f5;
}

.el-table .positive-row {
  background: #e2f0e4;
}
</style>
