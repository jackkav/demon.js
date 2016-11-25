import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'

/* eslint-disable no-new */
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App),
})
