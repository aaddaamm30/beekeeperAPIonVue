import Vue from 'vue'
import Router from 'vue-router'
import beekeeperAPI from '../views/beekeeperAPI'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/beekeeperAPI',
      name: 'beekeeperAPI',
      component: beekeeperAPI
    },
    {
      path: '/*',
      redirect: '/beekeeperAPI'
    }
  ]
})
