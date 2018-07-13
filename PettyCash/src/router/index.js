import Vue from 'vue'
import Router from 'vue-router'
import AdminSide from '@/components/AdminSide'
import AdminInbox from '@/components/AdminInbox'
import Payments from '@/components/Payments'
import Settings from '@/components/Settings'
import UserSide from '@/components/UserSide'
import UserTable from '@/components/UserTable'
import Header from '@/components/Header'
import Login from '@/components/Login'
import '../assets/semantic/out/semantic.min.css'
import SuiVue from 'semantic-ui-vue'
import AdminDashboard from '@/components/AdminDashboard'
import UserDashboard from '@/components/UserDashboard'
import FinanceDash from '@/components/FinanceDash'
import Modal from '@/components/Modal'
import vPikaday from 'vue-pikaday'

Vue.use(vPikaday)
Vue.use(Router)
Vue.use(SuiVue);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/AdminSide',
      name: 'AdminSide',
      component: AdminSide
    },
    {
      path: '/AdminInbox',
      name: 'AdminInbox',
      component: AdminInbox
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/UserSide',
      name: 'UserSide',
      component: UserSide
    },
    {
      path: '/UserTable',
      name: 'UserTable',
      component: UserTable
    },
    {
      path: '/Payments',
      name: 'Payments',
      component: Payments
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/AdminDashboard',
      name: 'AdminDasboard',
      component: AdminDashboard
    },
    {
      path: '/UserDashboard',
      name: 'UserDasboard',
      component: UserDashboard
    },
    {
      path: '/FinanceDash',
      name: 'FinanceDash',
      component: FinanceDash
    },
    {
      path: '/Modal',
      name: 'Modal',
      component: Modal
    }
  ]
})
