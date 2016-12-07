<template>
<el-select v-model="value9" filterable remote placeholder="Find more shows" :remote-method="remoteMethod" :loading="loading" @change="addToWatchlist" style="width: 300px;">
  <el-option v-for="item in searchResults" :key="item" :label="item" :value="item">
  </el-option>
</el-select>
</template>
// TODO: add selected to watching list
<script>
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
      value9: [],
      list: [],
      loading: false,
      likedShows: JSON.parse(localStorage.getItem('demon.liked')) || [],
    }
  },
  methods: {
    ...mapMutations({
      setWatchlistTable: 'setWatchlistTable',
    }),
    addToWatchlist(title) {
      let newData = this.watchlistTable
      newData.push({
        title
      })

      this.setWatchlistTable(newData)
        // if (this.likedShows.includes(selectedTitle)) return
        // this.likedShows.push(selectedTitle)
        // localStorage.setItem('demon.liked', JSON.stringify(this.likedShows))
        // const msg = {
        //   message: `You're watching ${selectedTitle} huh...`,
        //   type: 'success'
        // }
        // this.$message(msg)
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
            console.log(response)
              })
          } else {
            this.searchResults = []
          }
        }
      }
    }
</script>
