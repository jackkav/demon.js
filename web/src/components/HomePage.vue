//TODO: add count up control
<template>
<div>
  <el-col :md="12" :xs="24">
    <manage/>
  </el-col>
  <el-col :md="12" :xs="24">
    <my-watchlist/>
  </el-col>
</div>
</template>
<script>
import MyWatchlist from './Releases/MyWatchlist.vue'
import Manage from './WatchList/Manage.vue'
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
    Manage,
    MyWatchlist,
  },
  methods: {
    RecordUser() {
      new Fingerprint2().get(function(fingerprint, components) {
        freegeoip.get('json/')
          .then((response) => {
            const visitor = {
              fingerprint,
              ip: response.data.ip,
              language: components['language'],
              country_name: response.data.country_name,
              region_name: response.data.region_name,
              city: response.data.city,
              userAgent: window.navigator.userAgent,
            }
            localStorage.setItem('demon.fingerprint', JSON.stringify(visitor))
            axios.post('view', visitor)
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
  margin: 0 5px 5px 0;
}
</style>
