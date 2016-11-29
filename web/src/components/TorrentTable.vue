<template>
<el-table :data="tableData" border @current-change="downloading" style="width: 100%; cursor: pointer;">
  <!-- <el-table-column sortable prop="date" label="Released" width="120">
  </el-table-column> -->
  <el-table-column prop="name" label="Name" align="left">
  </el-table-column>
  <el-table-column prop="size" label="Size" width="140">
  </el-table-column>
  <!-- <el-table-column prop="seeds" label="Seeds" width="100">
  </el-table-column> -->
  <el-table-column prop="released" label="Released" width="140">
  </el-table-column>
  <!-- <el-table-column prop="downloadCount" label="Downloaded" width="130">
  </el-table-column> -->
</el-table>
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
      this.loading = true
      this.$http.get('/shows')
        .then((response) => {
          this.loading = false
            // console.log('before', this.tableData)
          for (var d of response.data) {
            d.released = moment(d.addedOn).fromNow()
            this.tableData.push(d)
          }
          // this.tableData.push(response.data[0])
          // console.log('after', this.tableData)
        })
        .catch(function(response) {
          this.loading = false
          console.log(response)
        })
    },
    downloading(val) {
      let data = {
        title: 'Downloading...',
        message: val.name,
        duration: 6000
      }
      this.$notify(data)
        // location.href = val.magnet
    }
  },
  data() {
    return {
      loading: false,
      tableData: []
    }
  }
}
</script>
