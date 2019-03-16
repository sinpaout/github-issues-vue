import VueRouter from 'vue-router'

import Home from './pages/Home'
import Opened from './pages/Opened'
import Closed from './pages/Closed'

const routes = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: {name: 'home'}
    },
    {
      path: '/home',
      component: Home,
      name: 'home'
    },
    {
      path: '/opened',
      component: Opened,
      name: 'opened'
    },
    {
      path: '/closed',
      component: Closed,
      name: 'closed'
    },
  ]
}

export default new VueRouter(routes)
