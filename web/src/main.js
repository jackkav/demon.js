import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
/* eslint-disable no-new */
Vue.use(ElementUI)

// const NotFound = {
//   template: '<p>Page not found</p>'
// }
const Home = {
  template: '<p>home page</p>'
}
const About = {
  template: '<p>about page</p>'
}
const routes = [{
  path: '/',
  component: Home
}, {
  path: '/about',
  component: About
}]

const router = new VueRouter({
  routes // short for routes: routes
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')
