import { createRouter, createWebHistory } from 'vue-router'
import Demo from '../views/demo'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Demo
    }
  ]
})

export default router
