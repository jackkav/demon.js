<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 36px;">Manage My Watchlist</span>
    <div style="float: right;">
      <show-selector/>
    </div>
  </div>
  <watching-list/>
</el-card>
</template>
<script>
import ShowSelector from './ShowSelector.vue'
import WatchingList from './WatchingList.vue'
export default {
  components: {
    ShowSelector,
    WatchingList,
  },
}
</script>
