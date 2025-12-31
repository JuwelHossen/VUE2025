import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    // lazy-load a simple component for root or point to Signup
    component: () => import('../components/signup/Signup.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../components/signup/Signup.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
