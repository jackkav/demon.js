<template>
<el-select v-model="value9" multiple filterable remote placeholder="Please enter a keyword" :remote-method="remoteMethod" :loading="loading">
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
    }
  },
  methods: {
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
