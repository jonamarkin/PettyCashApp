// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Requests from '@/components/Requests'
import Admin from '@/components/Admin'
import store from './store'
Vue.component('Requests', Requests)
Vue.component('Admin', Admin)
Vue.config.productionTip = false
Vue.use(require('vue-faker'))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
