import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
// import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'
import {setStore} from './service/api'

import App from './App.vue'

Vue.use(Vuex)
Vue.use(VueRouter)

setStore(store)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
