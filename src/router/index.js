import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Callback from '@/components/Callback'
import Dashboard from '@/components/Dashboard'
import CaMain from '@/components/ca/CaMain'
import CreateCert from '@/components/ca/CreateCert'
import PlcMain from '@/components/plc/PlcMain'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback

    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/ca',
      name: 'CaMain',
      component: CaMain
    },
    {
      path: '/ca/createcert',
      name: 'CreateCert',
      component: CreateCert
    },
    {
      path: '/plc',
      name: 'PlcMain',
      component: PlcMain
    }
  ]
})
