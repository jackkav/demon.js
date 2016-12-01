<template>
<el-row>
  <el-col :span="2" :offset="22">
    <el-switch v-model="show720p" on-text="720p" off-text="HDTV" :width="70" @change="qualitySwitch">
    </el-switch>
  </el-col>
</el-row>
</template>
<script>
export default {
  methods: {
    qualitySwitch(value) {
      // console.log(value)
      const show720p = value
        // TODO: only filter if two exist TDD

      if (show720p) {
        // if two exist with same time and episode then filter out quality of those
        this.filteredShowList = this.showList.filter(x => x.quality === '720p')
      } else {
        this.filteredShowList = this.showList.filter(x => x.quality !== '720p')
      }
    }
  },
  data() {
    return {
      show720p: false
    }
  }
}
</script>
