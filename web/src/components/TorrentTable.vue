<template>
  <el-table
    :data="tableData"
    stripe
    border
    @current-change="downloading"
    style="width: 100%">
    <el-table-column
    sortable
      prop="date"
      label="Released"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      align="left">
    </el-table-column>
    <el-table-column
      prop="size"
      label="Size"
      width="100">
    </el-table-column>
    <el-table-column
      prop="seeds"
      label="Seeds"
      width="100">
    </el-table-column>
    <el-table-column
      prop="released"
      label="Released"
      width="140">
    </el-table-column>
  </el-table>
</template>

<script>
import moment from 'moment'

export default {
  methods: {
    downloading(val) {
      this.currentRow = val;
      this.$notify({
        title: 'Downloading...',
        message: val.name,
        duration: 6000
      })
    }
  },
  data() {
    return {
      tableData: [{
        date: '2016-06-03',
        released: moment('2016-06-03').fromNow(),
        name: 'Game of Thrones S01E01 REPACK HDTV x264-MiNDTHEGAP [eztv]',
        address: 'No. 189, Grove St, Los Angeles',
        size: '100 MB',
        seeds: '10'
      }, {
        date: '2016-05-03',
        released: moment('2016-05-03').fromNow(),
        name: 'The Walking Dead S01E01 REPACK HDTV x264-MiNDTHEGAP [eztv]',
        address: 'No. 189, Grove St, Los Angeles',
        size: '100 MB',
        seeds: '10'
      }, {
        date: '2016-04-03',
        released: moment('2016-04-03').fromNow(),
        name: 'Tosh 0 S08E29 REPACK HDTV x264-MiNDTHEGAP [eztv]',
        address: 'No. 189, Grove St, Los Angeles',
        size: '100 MB',
        seeds: '10'
      }, {
        date: '2016-02-03',
        released: moment('2016-02-03').fromNow(),
        name: 'James Corden 2016 11 22 Aaron Eckhart HDTV x264-CROOKS [eztv]',
        address: 'No. 189, Grove St, Los Angeles',
        size: '100 MB',
        seeds: '10'
      }]
    };
  },
};
</script>
