import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
require('./bootstrap')
Vue.use(VueRouter)
import store from './store'

Vue.use(ElementUI, { locale })

const router = new VueRouter({
  routes // short for routes: routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
}).$mount('#app')
