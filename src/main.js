import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'

import App from './App'
import store from './store'
import routes from './routes'

const router = new VueRouter({ routes })
Vue.router = router
Vue.use(VueRouter)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
