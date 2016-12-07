<template>
<el-select v-model="selectedValue" filterable clearable remote placeholder="Find more shows" :remote-method="remoteMethod" :loading="loading" @change="addToWatchlist" style="width: 300px;">
  <el-option v-for="item in searchResults" :key="item" :label="item" :value="item">
  </el-option>
</el-select>
</template>
// TODO: add selected to watching list
<script>
import moment from 'moment'
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
    return {
      searchResults: [],
      selectedValue: '',
      loading: false,
    }
  },
  methods: {
    ...mapMutations({
      setWatchlistTable: 'setWatchlistTable',
    }),
    addToWatchlist(title) {
      const alreadyInList = this.watchlistTable.filter(x => x.title === title).length > 0
      if (alreadyInList) return
        // TODO: get this data from api/from saving state from my releases api call
      const expectedDate = moment().add(Math.random() * 10, 'days').toISOString()
      this.watchlistTable.push({
        title,
        latestRelease: 'S01E01',
        expectedDate,
        nextRelease: moment(expectedDate).fromNow()
      })
      this.setWatchlistTable(this.watchlistTable)
      const msg = {
        message: `Added ${title} to your watchlist`,
        type: 'success'
      }
      this.$message(msg)
    },
    remoteMethod(query) {
      console.log(query, this.value9)
      if (query !== '') {
        var vm = this
        vm.loading = true
        this.$http.get('/showTitles')
          .then((response) => {
            vm.loading = false
            vm.searchResults = response.data.filter(item => {
              return item.toLowerCase().indexOf(query.toLowerCase()) > -1
            })
          })
          .catch(function(response) {
            vm.loading = false
            console.log(response)
          })
      } else {
        this.searchResults = []
      }
    }
  }
}
</script>
