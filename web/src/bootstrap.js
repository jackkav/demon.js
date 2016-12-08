import Vue from 'vue'

Vue.config.debug = process.env.NODE_ENV !== 'production'
import Axios from 'axios'
Axios.defaults.baseURL = Vue.config.debug ? 'http://localhost:3000/api/' : 'http://120.131.8.223:49960/api/'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.timeout = 20000
Vue.prototype.$http = Axios
