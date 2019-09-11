import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/login',
    component: () => import('@/components/Layout/layout'),
    children: [{
      path: 'index',
      name: 'index',
      component: () => import('@/views/home'),
      meta: {
        requiresAuth: true
      }
    }]
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      requiresAuth: false
    }
  }]
})

export default router
