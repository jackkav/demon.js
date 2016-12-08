<template>
<div>
  <el-dialog title="Show Information" v-model="dialogShowInfoVisible">
    <el-col :span="12">
      <img v-bind:src="poster"></img>
    </el-col>
    <el-col :span="12" style="padding: 0 0 0 5px;">
      <div v-for="(value, key) in showInfo" class="text">
        <b>{{ key }}</b> : {{ value }}
      </div>
    </el-col>
  </el-dialog>
  <el-table v-if="hasWatchlist" :data="watchlistTable" border style="width: 100%">
    <el-table-column prop="title" label="Name" align="left">
    </el-table-column>
    <!-- <el-table-column prop="latestRelease" label="Latest Release(TODO)" align="left" width="200">
    </el-table-column>
    <el-table-column prop="nextRelease" label="Next Release(TODO)" align="left" width="200">
    </el-table-column> -->
    <el-table-column :context="_self" inline-template width="160">
      <div>
        <el-button size="small" @click="getShowInfo($index, row)">
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
import axios from 'axios'
var omdb = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  timeout: 20000,
})
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
    hasWatchlist() {
      return this.watchlistTable.length
    }
  },
  data() {
    return {
      showInfo: {},
      poster: '',
      dialogShowInfoVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setWatchlistTable: 'setWatchlistTable',
    }),
    getShowInfo(key, val) {
      this.loading = true
      omdb.get(`?t=${val.title}&y=&plot=short&r=json`)
        .then((response) => {
          console.log(response.data)
          this.poster = response.data.Poster
          delete response.data.Poster
          this.showInfo = response.data
          this.loading = false
          this.dialogShowInfoVisible = true
        })
    },
    handleRemove(key, val) {
      this.$confirm(`This will remove ${val.title} from your watchlist. Continue?`, 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.setWatchlistTable(this.watchlistTable.filter(x => x.title !== val.title))
        this.$message({
          type: 'success',
          message: 'Removed'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Remove canceled'
        })
      })
    },
  }
}
</script>
