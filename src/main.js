// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Modal } from 'bootstrap-vue/es/components'



Vue.config.productionTip = false
Vue.use(require('vue-faker'))
Vue.use(BootstrapVue);
Vue.component('b-modal', bModal);
Vue.directive('b-modal', bModalDirective);
Vue.use(Modal);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
