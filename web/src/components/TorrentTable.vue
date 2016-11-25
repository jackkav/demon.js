<template>
<el-table :data="tableData" border @current-change="downloading" style="width: 100%">
  <el-table-column sortable prop="date" label="Released" width="120">
  </el-table-column>
  <el-table-column prop="name" label="Name" align="left">
  </el-table-column>
  <el-table-column prop="size" label="Size" width="100">
  </el-table-column>
  <el-table-column prop="seeds" label="Seeds" width="100">
  </el-table-column>
  <el-table-column prop="released" label="Released" width="140">
  </el-table-column>
</el-table>
</template>

<script>
import moment from 'moment'

export default {
  methods: {
    downloading(val) {
      let data = {
        title: 'Downloading...',
        message: val.name,
        duration: 6000
      }
      this.$notify(data)
      location.href = val.magnet
    }
  },
  data() {
    // TODO: get this data from torrent listing API/DB
    return {
      tableData: [{
        date: '2016-06-03',
        released: moment('2016-06-03').fromNow(),
        name: 'Game of Thrones S01E01 REPACK HDTV x264-MiNDTHEGAP [eztv]',
        size: '100 MB',
        seeds: '10',
        magnet: 'magnet:?xt=urn:btih:c8519027996ef2a57d49cc81d76bd708646a829f&dn=The.Mindy.Project.S05E05.HDTV.x264-KILLERS%5Beztv%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969'
      }, {
        date: '2016-05-03',
        released: moment('2016-05-03').fromNow(),
        name: 'The Walking Dead S01E01 REPACK HDTV x264-MiNDTHEGAP [eztv]',
        size: '100 MB',
        seeds: '10',
        magnet: 'magnet:?xt=urn:btih:c8519027996ef2a57d49cc81d76bd708646a829f&dn=The.Mindy.Project.S05E05.HDTV.x264-KILLERS%5Beztv%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969'
      }, {
        date: '2016-04-03',
        released: moment('2016-04-03').fromNow(),
        name: 'Tosh 0 S08E29 REPACK HDTV x264-MiNDTHEGAP [eztv]',
        size: '100 MB',
        seeds: '10',
        magnet: 'magnet:?xt=urn:btih:c8519027996ef2a57d49cc81d76bd708646a829f&dn=The.Mindy.Project.S05E05.HDTV.x264-KILLERS%5Beztv%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969'
      }, {
        date: '2016-02-03',
        released: moment('2016-02-03').fromNow(),
        name: 'James Corden 2016 11 22 Aaron Eckhart HDTV x264-CROOKS [eztv]',
        size: '100 MB',
        seeds: '10',
        magnet: 'magnet:?xt=urn:btih:c8519027996ef2a57d49cc81d76bd708646a829f&dn=The.Mindy.Project.S05E05.HDTV.x264-KILLERS%5Beztv%5D.mkv%5Beztv%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969'
      }]
    }
  }
}
</script>
