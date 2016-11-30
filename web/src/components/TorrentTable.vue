<template>
<div>

  <div id="example-1">
    <p>liked shows: {{likedShows}}</p>
    <p>disliked shows: {{dislikedShows}}</p>

    <el-table v-loading.body="loading" element-loading-text="Loading..." :data="showList" border @current-change="downloading" style="width: 100%; cursor: pointer;" :row-class-name="likedRowHighlight">
      <el-table-column prop="name" label="Name" align="left" @click="downloading">
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
// TODO 720p filter, highlight favorites, hide all, pagination?
export default {
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.getShows()
  },
  methods: {
    getShows() {
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
          }
        })
        .catch(function(response) {
          vm.loading = false
          console.log(response)
        })
    },
    downloading(val, i) {
      let data = {
        title: 'Downloading...',
        message: val.name,
        duration: 3000
      }
      this.$notify(data)

      val.downloadCount++
        // TODO: put new download count to api, debounce 1000
        // TODO: re-add magnet link
        // location.href = val.magnet
    },
    handleDelete(a, b) {
      event.stopPropagation()
      this.showList = this.showList.filter(x => x.title !== b.title)
      this.likedShows = this.likedShows.filter(x => x !== b.title)
      this.dislikedShows.push(b.title)
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
      let data = {
        title: b.title,
        message: 'Liked and highlighted',
        duration: 3000
      }
      this.$notify(data)
        // TODO: put likedShows to api, debounce 1000
    },
    likedRowHighlight(row, index) {
      if (this.likedShows.includes(row.title)) {
        return 'info-row'
      }
      return ''
    }
  },
  data() {
    return {
      loading: false,
      showList: [],
      dislikedShows: [],
      likedShows: [],
      counter: 0
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
