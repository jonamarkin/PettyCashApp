import Vue from 'vue'
import Router from 'vue-router'
import PettyForm from '@/components/PettyForm'
import login from '@/components/login'
import Userdashboard from '@/components/Userdashboard'
import Admin from '@/components/Admin'
import transactions from '@/components/transactions'
import payments from '@/components/payments'
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
      path: '/Userdashboard',
      name: 'Userdashboard',
      component: Userdashboard
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/transactions',
      name: 'transactions',
      component:transactions
    },
    {
      path: '/payments',
      name: 'payments',
      component:payments
    }
    
  ]
})
