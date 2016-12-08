<template>
<el-row>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">
        Latest releases in your watchlist
          <div style="float: right;">
            Quality Preference:
            <el-switch v-model="prefer720p" on-text="720p" on-color="primary" off-color="#20A0FF" off-text="HDTV" :width="70" @change="qualitySwitch">
            </el-switch>
        </div>
        </span>
    </div>
    <release-table/>
  </el-card>
</el-row>
</template>
<script>
import ReleaseTable from './ReleaseTable.vue'
export default {
  components: {
    ReleaseTable,
  },
  data() {
    return {
      loading: false,
      prefer720p: JSON.parse(localStorage.getItem('demon.prefer720p')) || false,
    }
  },
  methods: {
    qualitySwitch(prefer720p) {
      // if two exist with same time and episode then filter out quality of those
      if (prefer720p) {
        // this.filteredShowList = qualityFilter(this.showList, '720p')
        localStorage.setItem('demon.prefer720p', true)
      } else {
        // this.filteredShowList = qualityFilter(this.showList, 'HDTV')
        localStorage.setItem('demon.prefer720p', false)
      }
    },
  }
}
</script>
