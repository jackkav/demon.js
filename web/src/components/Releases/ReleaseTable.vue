<template>
<div>
  <el-table v-loading.body="loading" element-loading-text="Loading..." :data="filtered(MyReleaseList)" border style="width: 100%; cursor: pointer;">
    <el-table-column prop="name" label="Name" align="left">
    </el-table-column>
    <el-table-column prop="size" label="Size" width="120">
    </el-table-column>
    <el-table-column prop="addedOn" label="Released" width="120" :formatter="formatter">
    </el-table-column>
    <el-table-column :context="_self" inline-template width="250">
      <div>
        <el-button size="small" type="warn" @click="handleHide($index, row)">
          Seen it
        </el-button>
        <el-button size="small" type="primary" @click="handleDownload($index, row)">
          Download
        </el-button>
        <el-button size="small" type="primary" @click="handleCopy($index, row)">
          Copy
        </el-button>
      </div>
    </el-table-column>
  </el-table>
</div>
</template>
<script>
import qualityFilter from '../../lib/filter'
import ignoreFilter from '../../lib/ignore'
import moment from 'moment'
import copy from 'copy-to-clipboard'
export default {
  computed: {
    watchlistTable() {
      return this.$store.state.watchlistTable
    },
    newWatchlistTable() {
      return this.watchlistTable.map(item => item.title)
    }
  },
  watch: {
    watchlistTable: 'fetchMyReleases',
  },
  mounted() {
    this.fetchMyReleases()
  },
  data() {
    return {
      seenShows: JSON.parse(localStorage.getItem('demon.seen')) || [],
      loading: false,
      MyReleaseList: []
    }
  },
  methods: {
    fetchMyReleases() {
      const query = this.newWatchlistTable.join(',')
      if (!query) return
      this.loading = true
      this.$http.get('/getShowsByTitles/' + query)
        .then((response) => {
          this.loading = false
          this.MyReleaseList = response.data
            // TODO: foreach item in watchlist check latest episode, if new one is available set latestRelease and increment next release
        })
    },
    filtered: function(releases) {
      // TODO: make quality filter reactive
      const releasesWithoutHidden = ignoreFilter(releases, this.seenShows)
      const quality = localStorage.getItem('demon.prefer720p') === 'true' ? '720p' : 'HDTV'
      return qualityFilter(releasesWithoutHidden, quality)
    },
    handleCopy(key, row) {
      copy(row.magnet)
    },
    formatter(row, column) {
      return moment(row.addedOn).calendar()
    },
    handleDownload(key, row) {
      row.clicks = row.clicks || 0
      row.clicks += 1
      let notifyContent = {
        title: 'Downloading...',
        message: row.name,
        duration: 3000
      }
      this.$notify.success(notifyContent)

      let toUpdate = {
        clicks: row.clicks
      }
      this.$http.put('/shows/' + row.hash, toUpdate)
        .catch(function(response) {
          console.log(response)
        })

      location.href = row.magnet
    },
    handleHide(key, row) {
      const episode = `${row.title}|${row.episode}`
      if (this.seenShows.includes(episode)) return
      this.$confirm(`This will hide ${row.episode} of ${row.title} and all previous episodes. Continue?`, 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.seenShows.push(episode)
        localStorage.setItem('demon.seen', JSON.stringify(this.seenShows))
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
