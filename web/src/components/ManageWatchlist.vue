<template>
<el-table :data="watchlistTable" border style="width: 100%">
  <el-table-column prop="name" label="Name" align="left">
  </el-table-column>
  <el-table-column prop="latestRelease" label="Latest Release" align="left" width="200">
  </el-table-column>
  <el-table-column prop="nextRelease" label="Next Release" align="left" width="200">
  </el-table-column>
  <el-table-column :context="_self" inline-template width="180">
    <div>
      <el-button size="small">
        Info
      </el-button>
      <el-button size="small" type="warning">
        Remove
      </el-button>
    </div>
  </el-table-column>
</el-table>
</template>
<script>
import moment from 'moment'
export default {
  mounted() {
    this.watchlistTable = this.likedShows.map((name) => {
      const expectedDate = moment().add(Math.random() * 10, 'days').toString()
      return {
        name,
        latestRelease: 'S01E01',
        expectedDate,
        nextRelease: moment(expectedDate).fromNow()
      }
    }).sort((a, b) => new Date(a.expectedDate) - new Date(b.expectedDate))
  },
  data() {
    return {
      likedShows: localStorage.getItem('demon.liked') ? JSON.parse(localStorage.getItem('demon.liked')).sort() : [],
      watchlistTable: [{
        name: 'a',
        expectedDate: '2016-12-10',
        nextRelease: 'next Monday'
      }, {
        name: 'c',
        expectedDate: '2016-12-11',
        nextRelease: 'next Tuesday'
      }]
    }
  },
}
</script>
