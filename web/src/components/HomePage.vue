//TODO: add count up control
//TODO: send page views to api
<template>
<div>
  <ol>
    <h1>TODO:</h1>
    <li>remove should have confirm dialog</li>
    <li>remove should be instant</li>
    <li>info popup with show data from api</li>
    <li>move show search to watchlist manager</li>
    <li>get latest release by adding latest release episode and date to getShowTitles? then set next release as a week later</li>
    <li>when nextRelease is greater than one week ago set to unknown</li>
    <li>add feedback form to hide button</li>
  </ol>
  <el-row>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">Manage My Watchlist</span>
      </div>
      <manage-watchlist/>
    </el-card>
  </el-row>
  <my-watchlist/>
  <!-- <el-row>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">Most Downloaded</span>
      </div>
      <most-downloaded/>
    </el-card>
  </el-row>

  <el-row>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">Highest Rated</span>
        </div>
        <series-list/>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">Most Viewers</span>
        </div>
        <series-list/>
      </el-card>
    </el-col>
  </el-row> -->
</div>
</template>
<script>
import MostDownloaded from './MostDownloaded.vue'
import SeriesList from './SeriesList.vue'
import MyWatchlist from './MyWatchlist.vue'
import ManageWatchlist from './ManageWatchlist.vue'

import Fingerprint2 from 'fingerprintjs2'
import axios from 'axios'
var freegeoip = axios.create({
  baseURL: 'http://freegeoip.net/',
  timeout: 20000,
})
export default {
  mounted() {
    this.RecordUser()
  },
  components: {
    MostDownloaded,
    SeriesList,
    MyWatchlist,
    ManageWatchlist
  },
  methods: {
    RecordUser() {
      new Fingerprint2().get(function(fingerprint, components) {
        freegeoip.get('json/')
          .then((response) => {
            const vistor = {
              fingerprint,
              ip: response.data.ip,
              language: components['language'],
              country_name: response.data.country_name,
              region_name: response.data.region_name,
              city: response.data.city,
              userAgent: window.navigator.userAgent,
            }
            axios.post('view', vistor)
          })
      })
    }
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
  margin: 0 5px;
}
</style>
