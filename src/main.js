import Vue from 'vue'
import App from './App'

import deals from './components/pages/resdeals.vue'
import menu from './components/pages/resmenu.vue'
import services from './components/pages/services.vue'
import about from './components/pages/about.vue'
import VueRouter from 'vue-router'
import VueTouch from 'vue-touch'

Vue.use(VueRouter)
Vue.use(VueTouch)

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', redirect: '/deals'},
    {path: '/deals', name: 'deals', component: deals},
    {path: '/menu', name: 'menu', component: menu},
    {path: '/services', name: 'services', component: services},
    {path: '/about', name: 'about', component: about}
  ]
})

// Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
}).$mount('#app')
/* eslint-disable no-new */
