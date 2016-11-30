<template>
<div>
  <div>
    <el-switch v-model="show720p" on-text="720p" off-text="HDTV" :width="70" @change="qualitySwitch">
    </el-switch>
    <el-table v-loading.body="loading" element-loading-text="Loading..." :data="filteredShowList" border @current-change="downloading" style="width: 100%; cursor: pointer;" :row-class-name="likedRowHighlight">
      <el-table-column prop="name" label="Name" align="left" @click="downloading">
      </el-table-column>
      <el-table-column prop="quality" label="Quality" width="120">
      </el-table-column>
      <el-table-column prop="size" label="Size" width="120">
      </el-table-column>
      <el-table-column prop="released" label="Released" width="160">
      </el-table-column>
      <el-table-column prop="downloadCount" label="Downloaded" width="125">
      </el-table-column>
      <el-table-column width="160" :context="_self" inline-template>
        <div>
          <el-button size="small" type="success" @click="handleStar($index, row)">
            Star
          </el-button>
          <el-button size="small" type="danger" @click="handleDelete($index, row)">
            Hide
          </el-button>
        </div>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
import moment from 'moment'
// TODO 720p filter, pagination?
export default {
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchShows()
  },
  methods: {
    fetchShows() {
      // TODO: hide 720p if HDTV available
      var vm = this
      vm.loading = true
      this.$http.get('/shows')
        .then((response) => {
          // console.log(response)
          vm.loading = false
          for (var d of response.data) {
            d.released = moment(d.addedOn).fromNow()
            if (vm.likedShows && vm.likedShows.indexOf(d.title)) d.star = true
            d.downloadCount = 0
            vm.showList.push(d)
            vm.filteredShowList.push(d)
          }
        })
        .catch(function(response) {
          vm.loading = false
          console.log(response)
        })
    },
    downloading(val, i) {
      val.downloadCount += 1
      let notifyContent = {
        title: 'Downloading...',
        message: val.name,
        duration: 3000
      }
      this.$notify(notifyContent)

      let toUpdate = {
        clicks: val.downloadCount
      }
      this.$http.put('/shows/' + val.hash, toUpdate)
        .catch(function(response) {
          console.log(response)
        })

      // TODO: re-add magnet link
      // location.href = val.magnet
    },
    handleDelete(a, b) {
      event.stopPropagation()
      this.filteredShowList = this.showList.filter(x => x.title !== b.title)
      this.likedShows = this.likedShows.filter(x => x !== b.title)
      this.dislikedShows.push(b.title)
      localStorage.setItem('demon.disliked', JSON.stringify(this.dislikedShows))
      let data = {
        title: b.title,
        message: 'Disliked and hidden.',
        duration: 3000
      }
      this.$notify(data)
        // TODO: put dislikedShows to api, debounce 1000
    },
    handleStar(a, b) {
      event.stopPropagation()
      this.likedShows.push(b.title)
      localStorage.setItem('demon.liked', JSON.stringify(this.likedShows))
      let notifyContent = {
        title: b.title,
        message: 'Liked and highlighted',
        duration: 3000
      }
      this.$notify(notifyContent)
        // TODO: put likedShows to api, debounce 1000
    },
    likedRowHighlight(row, index) {
      if (this.likedShows.includes(row.title)) {
        return 'info-row'
      }
      return ''
    },
    qualitySwitch(value) {
      console.log(value)
      const show720p = value
        // TODO: only filter if two exist TDD

      if (show720p) {
        // if two exist with same time and episode then filter out quality of those
        this.filteredShowList = this.showList.filter(x => x.quality === '720p')
      } else {
        this.filteredShowList = this.showList.filter(x => x.quality !== '720p')
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
      counter: 0,
      show720p: false
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
