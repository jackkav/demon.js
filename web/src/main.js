import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

Vue.use(ElementUI)

const router = new VueRouter({
  routes // short for routes: routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')
