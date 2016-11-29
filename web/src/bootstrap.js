import Vue from 'vue'

Vue.config.debug = process.env.NODE_ENV !== 'production'

import Axios from 'axios'
Axios.defaults.baseURL = process.env.API_LOCATION || 'http://localhost:3000/api/'
Axios.defaults.headers.common.Accept = 'application/json'
Vue.prototype.$http = Axios

// Axios.get('/shows')
//   .then(function(response) {
//     console.log(response)
//   })
//   .catch(function(response) {
//     console.log(response)
//   })
