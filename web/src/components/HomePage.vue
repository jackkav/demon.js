//TODO: add count up control
//TODO: send page views to api
<template>
<div>
  <el-row>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">Popular Show Cloud</span>
        </div>
        <div v-for="o in 3" class="text item">
          {{'List item ' + o }}
        </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">Most Downloaded</span>
        </div>
        <most-downloaded/>
      </el-card>
    </el-col>
  </el-row>
  <el-row>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">Currently Watching</span>
        <el-button style="float: right;" type="primary">Find more shows</el-button>
      </div>
      <div v-for="o in 3" class="text item">
        {{'List item ' + o }}
      </div>
    </el-card>
  </el-row>
</div>
</template>
<script>
import MostDownloaded from './MostDownloaded.vue'
export default {
  mounted() {
    console.log(window.navigator.userAgent)
  },
  components: {
    MostDownloaded
  }

}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 95%;
}
</style>
