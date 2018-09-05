import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Help from '@/components/Help'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
     {
      path: '/help',
      name: 'Help',
      component: Help
    },
  ]
})
