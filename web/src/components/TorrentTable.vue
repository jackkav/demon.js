<template>
<div>
  <p v-if="loading">
    Loading
  </p>
  <div id="example-1">
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <p>disliked shows: {{unwantedShows}}</p>
  </div>
  <el-table :data="tableData" border @current-change="downloading" style="width: 100%; cursor: pointer;">
    <!-- <el-table-column sortable prop="date" label="Released" width="120">
  </el-table-column> -->
    <el-table-column prop="name" label="Name" align="left" @click="downloading">
    </el-table-column>
    <el-table-column prop="size" label="Size" width="140">
    </el-table-column>
    <!-- <el-table-column prop="seeds" label="Seeds" width="100">
  </el-table-column> -->
    <el-table-column prop="released" label="Released" width="140">
    </el-table-column>
    <el-table-column prop="downloadCount" label="Downloaded" width="130">
    </el-table-column>
    <el-table-column label="Ignore" width="140" :context="_self" inline-template>
      <el-button size="small" type="danger" @click="handleDelete($index, row)">
        Hide
      </el-button>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import moment from 'moment'
// import _ from 'lodash'

export default {
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.getShows()
  },
  methods: {
    getShows() {
      // TODO: hide 720p if HDTV available
      this.loading = true
      this.$http.get('/shows')
        .then((response) => {
          this.loading = false
          for (var d of response.data) {
            d.released = moment(d.addedOn).fromNow()
            d.downloadCount = 0
            this.tableData.push(d)
          }
        })
        .catch(function(response) {
          this.loading = false
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
        // TODO: re-add magnet link
        // location.href = val.magnet
    },
    handleDelete(a, b) {
      event.stopPropagation()
      this.tableData.splice(a, 1)
      this.unwantedShows.push(b.title)
    }
  },
  data() {
    return {
      loading: false,
      tableData: [],
      unwantedShows: [],
      counter: 0
    }
  }
}
</script>
