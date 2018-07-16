// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AdminSide from '@/components/AdminSide'
import Payments from '@/components/Payments'
import UserSide from '@/components/UserSide'
import Header from '@/components/Header'
import ReportForm from '@/components/ReportForm'
import FinanceSide from '@/components/FinanceSide'
import AdminDashboard from '@/components/AdminDashboard'
import AdminReport from '@/components/AdminReport'
import Modal from '@/components/Modal'
import "@/assets/css/app.css"
Vue.component('adminside', AdminSide);
Vue.component('payments', Payments);
Vue.component('userside', UserSide);
Vue.component('financeside', FinanceSide );
Vue.component('reportform', ReportForm);
Vue.component('Header', Header);
Vue.component('Modal', Modal);
Vue.component('admindashboard', AdminDashboard);
Vue.component('adminreport', AdminReport);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
