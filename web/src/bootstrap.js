import Vue from 'vue'

Vue.config.debug = process.env.NODE_ENV !== 'production'
import Axios from 'axios'
Axios.defaults.baseURL = 'https://demonic-persistance.herokuapp.com/api/'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.timeout = 20000
Vue.prototype.$http = Axios
