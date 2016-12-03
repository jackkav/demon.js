<template>
<el-table :data="mostClicked" border style="width: 100%">
  <!-- <el-table-column inline-template label="Date" width="180">
    <div>
      <el-icon name="time"></el-icon>
      <span style="margin-left: 10px">{{ row.date }}</span>
    </div>
  </el-table-column> -->
  <el-table-column inline-template label="Name">
    <el-popover trigger="hover" placement="top">
      <p>{{ row.name }}</p>
      <div slot="reference" class="name-wrapper">
        {{ row.title +' '+ row.episode }}
      </div>
    </el-popover>
  </el-table-column>
  <!-- <el-table-column prop="title" label="Name" align="left">
  </el-table-column> -->
  <el-table-column prop="clicks" label="Clicks" align="left" width="100">
  </el-table-column>
  <el-table-column :context="_self" inline-template label="Operations">
    <div>
      <el-button size="small" @click="handleEdit($index, row)">
        Info
      </el-button>
      <el-button size="small" type="primary" @click="handleDelete($index, row)">
        Download
      </el-button>
    </div>
  </el-table-column>
</el-table>
</template>

<script>
export default {
  data() {
    return {
      mostClicked: []
    }
  },
  mounted() {
    this.fetchMostClicked()
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    fetchMostClicked() {
      var vm = this
      vm.loading = true
      this.$http.get('/getMostClicked')
        .then((response) => {
          vm.loading = false
          for (var d of response.data) {
            vm.mostClicked.push(d)
          }
        })
        .catch(function(response) {
          vm.loading = false
          console.log(response)
        })
    },
  }
}
</script>
