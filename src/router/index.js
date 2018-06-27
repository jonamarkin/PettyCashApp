import Vue from 'vue'
import Router from 'vue-router'
import PettyForm from '@/components/PettyForm'
import login from '@/components/login'

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
    }
  ]
})
