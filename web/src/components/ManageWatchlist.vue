<template>
<div>
  <el-table v-if="hasWatchlist" :data="watchlistTable" border style="width: 100%">
    <el-table-column prop="title" label="Name" align="left">
    </el-table-column>
    <el-table-column prop="latestRelease" label="Latest Release(TODO)" align="left" width="200">
    </el-table-column>
    <el-table-column prop="nextRelease" label="Next Release(TODO)" align="left" width="200">
    </el-table-column>
    <el-table-column :context="_self" inline-template width="180">
      <div>
        <el-button size="small">
          Info
        </el-button>
        <el-button size="small" type="danger" @click="handleRemove($index, row)">
          Remove
        </el-button>
      </div>
    </el-table-column>
  </el-table>
  <div v-else>
    Add some shows to your watchlist in the filter above
  </div>
</div>
</template>
<script>
// import moment from 'moment'
import {
  // mapGetters,
  mapMutations,
  // mapActions
} from 'vuex'

export default {
  computed: {
    watchlistTable() {
      return this.$store.state.watchlistTable
    },
  },
  data() {
    let hasWatchlist = false
    if (localStorage.getItem('demon.liked')) hasWatchlist = true
    return {
      hasWatchlist,
      likedShows: localStorage.getItem('demon.liked') ? JSON.parse(localStorage.getItem('demon.liked')).sort() : [],
      // watchlistTable: JSON.parse(localStorage.getItem('demon.liked')).map((title) => {
      //   const expectedDate = moment().add(Math.random() * 10, 'days').toISOString()
      //   return {
      //     title,
      //     latestRelease: 'S01E01',
      //     expectedDate,
      //     nextRelease: moment(expectedDate).fromNow()
      //   }
      // }).sort((a, b) => new Date(a.expectedDate) - new Date(b.expectedDate))
    }
  },
  methods: {
    ...mapMutations({
      setWatchlistTable: 'setWatchlistTable',
    }),
    handleRemove(key, val) {
      let newData = []
      this.watchlistTable.forEach(item => {
        if (item === val) {
          return
        }
        newData.push(item)
      })

      this.setWatchlistTable(newData)

      // this.$confirm(`This will remove ${row.title} from your watchlist. Continue?`, 'Warning', {
      //   confirmButtonText: 'OK',
      //   cancelButtonText: 'Cancel',
      //   type: 'warning'
      // }).then(() => {
      //   this.setWatchlistTable
      //   // this.likedShows.splice(this.likedShows.indexOf(row.title), 1)
      //   // localStorage.setItem('demon.liked', JSON.stringify(this.likedShows))
      //   this.$message({
      //     type: 'success',
      //     message: 'Removed'
      //   })
      // }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: 'Remove canceled'
      //   })
      // })
    },
  }
}
</script>
