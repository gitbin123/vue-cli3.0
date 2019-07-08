import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'about',
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('./views/About.vue'),
          meta: {
            status: true
          }
        },
        {
          path: '/about1',
          name: 'about1',
          component: () => import('./views/About1.vue'),
          meta: {
            status: false 
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/login.vue')
    }
  ]
})
