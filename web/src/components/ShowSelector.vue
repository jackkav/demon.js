<template>
<el-select v-model="value9" filterable remote placeholder="Find more shows" :remote-method="remoteMethod" :loading="loading" @change="addToWatchlist">
  <el-option v-for="item in options4" :key="item" :label="item" :value="item">
  </el-option>
</el-select>
</template>
// TODO: add selected to watching list
<script>
export default {
  data() {
    return {
      options4: [],
      value9: [],
      list: [],
      loading: false,
      likedShows: JSON.parse(localStorage.getItem('demon.liked')) || [],
    }
  },
  methods: {
    addToWatchlist(selectedTitle) {
      if (this.likedShows.includes(selectedTitle)) return
      this.likedShows.push(selectedTitle)
      localStorage.setItem('demon.liked', JSON.stringify(this.likedShows))
    },
    remoteMethod(query) {
      if (query !== '') {
        var vm = this
        vm.loading = true
        this.$http.get('/showTitles')
          .then((response) => {
            vm.loading = false
            vm.options4 = response.data.filter(item => {
              return item.toLowerCase().indexOf(query.toLowerCase()) > -1
            })
          })
          .catch(function(response) {
            vm.loading = false
            console.log(response)
          })
      } else {
        this.options4 = []
      }
    }
  }
}
</script>
