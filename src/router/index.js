import Vue from 'vue'
import Router from 'vue-router'
import PettyForm from '@/components/PettyForm'
import login from '@/components/login'
import Admin from '@/components/Admin'
import UserPage from '@/components/UserPage'
import AdminInbox from '@/components/AdminInbox'
import transactions from '@/components/transactions'
import contact from '@/components/contact'
import help from '@/components/help'
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
      path: '/Admin',
      name: 'Admin',
      component: Admin
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
      path: '/help',
      name: 'help',
      component: help
    }
    
  ]
})
