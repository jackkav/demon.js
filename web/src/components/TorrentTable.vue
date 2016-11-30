<template>
<div>
  <p v-if="loading">
    Loading...
  </p>
  <div v-else id="example-1">
    <!-- <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p> -->
    <p>liked shows: {{likedShows}}</p>
    <p>disliked shows: {{dislikedShows}}</p>

    <el-table :data="showList" border @current-change="downloading" style="width: 100%; cursor: pointer;" :row-class-name="likedRowHighlight">

      <el-table-column prop="name" label="Name" align="left" @click="downloading">
      </el-table-column>
      <el-table-column prop="size" label="Size" width="140">
      </el-table-column>
      <el-table-column prop="released" label="Released" width="140">
      </el-table-column>
      <el-table-column prop="downloadCount" label="Downloaded" width="130">
      </el-table-column>
      <el-table-column width="180" :context="_self" inline-template>
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
// import _ from 'lodash'
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
        duration: 6000
      }
      this.$notify(data)
        // TODO: increment download counter and send to db
      val.downloadCount++

        // TODO: re-add magnet link
        // location.href = val.magnet
    },
    handleDelete(a, b) {
      event.stopPropagation()
        // TODO: filter from showList any matching title
      this.showList.splice(a, 1)
      this.dislikedShows.push(b.title)
    },
    handleStar(a, b) {
      event.stopPropagation()
      this.likedShows.push(b.title)
    },
    likedRowHighlight(row, index) {
      if (this.likedShows.indexOf(row.title) > -1) {
        return 'positive-row'
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
