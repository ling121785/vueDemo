import Vue from 'vue'
import Router from 'vue-router'
import tab from '@/components/tab'
import cinema from '@/components/common/cinema'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: tab
    }
    , {
      path: '/cinema',
      name: 'cinema',
      component: cinema

    }

  ]
})
