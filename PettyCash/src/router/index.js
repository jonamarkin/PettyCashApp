import Vue from 'vue'
import Router from 'vue-router'
import AdminInbox from '@/components/AdminInbox'
import UserTable from '@/components/UserTable'
import login from '@/components/login'
import '../assets/semantic/out/semantic.min.css'
import SuiVue from 'semantic-ui-vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import Payments from '@/components/Payments'
import AdminDashboard from '@/components/AdminDashboard'
import AdminReport from '@/components/AdminReport'
import ContactTable from '@/components/ContactTable'
import ReportDash from '@/components/ReportDash'
import FinanceDash from '@/components/FinanceDash'
import UserDashboard from '@/components/UserDashboard'
import Finance from '@/components/Finance'
import vPikaday from 'vue-pikaday'


Vue.use(vPikaday)
Vue.use(Router)
Vue.use(SuiVue);
Vue.use(Vuex)
Vue.use(require('vue-faker'));

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/FinanceDash',
      name: 'FinanceDash',
      redirect: {
        name: "Finance"
      },
      component: FinanceDash,
      children: [
        {
          path: 'Finance',
          name: 'Finance',
          component: Finance
        },
        {
            path: 'Payments',
            name: 'Payments',
            component: Payments
          },
        {
          path: 'ContactTable',
          name: 'ContactTable',
          component: ContactTable
        },
        {
          path: 'ReportDash',
          name: 'ReportDash',
          component: ReportDash
        }
      ]
    },
    {
      path: '/AdminDashboard',
      name: 'AdminDashboard',
      redirect: {
        name: "AdminInbox"
      },
      component: AdminDashboard,
      children:[
        {
          path: 'AdminInbox',
          name: 'AdminInbox',
          component: AdminInbox
        },
        {
          path: 'AdminReport',
          name: 'AdminReport',
          component: AdminReport
        }
      ]
    },
    {
      path: '/UserDashboard',
      name: 'UserDashboard',
      redirect: {
        name: "UserTable"
      },
      component: UserDashboard,
      children:[
        {
          path: 'UserTable',
          name: 'UserTable',
          component: UserTable
        }
      ]
    },

    
    // {
    //   path: '/AdminSide',
    //   name: 'AdminSide',
    //   component: AdminSide
    // },
    
    // {
    //   path: '/Settings',
    //   name: 'Settings',
    //   component: Settings
    // },
    // {
    //   path: '/UserSide',
    //   name: 'UserSide',
    //   component: UserSide
    // },
    
    // 
    // {
    //   path: '/Header',
    //   name: 'Header',
    //   component: Header
    // },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    
    // {
      
    // },
    // {
    //   path: '/Modal',
    //   name: 'Modal',
    //   component: Modal
    // },
    
    // {
  
    // },
    
    
    // {
    //   path: '/Contacts',
    //   name: 'Contacts',
    //   component: Contacts
    // },
    
    // {
    //   path: '/ReportForm',
    //   name: 'ReportForm',
    //   component: ReportForm
    // },
    // {
    //   path: '/ReportPage',
    //   name: 'ReportPage',
    //   component: ReportPage
    // },
    
  ]
})
