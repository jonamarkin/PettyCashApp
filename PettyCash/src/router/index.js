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
    }
  ]
})
