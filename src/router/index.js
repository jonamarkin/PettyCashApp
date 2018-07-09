import Vue from 'vue'
import Router from 'vue-router'
import PettyForm from '@/components/PettyForm'
import login from '@/components/login'
import UserPage from '@/components/UserPage'
import AdminInbox from '@/components/AdminInbox'
import transactions from '@/components/transactions'
import contact from '@/components/contact'
import help from '@/components/help'
import Settings from '@/components/Settings'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/PettyForm',
      name: 'PettyForm',
      component: PettyForm
    },
    {
      path: '/UserPage',
      name: 'UserPage',
      component: UserPage
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: transactions
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
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
      path: '/help',
      name: 'help',
      component: help
    }
  ]
})
