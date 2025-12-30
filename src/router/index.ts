import { createRouter, createWebHistory } from 'vue-router'

// import halaman
import Landing from '@/components/Landing.vue'
import CV from '@/components/CV.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Landing,
  },
  {
    path: '/CV',
    name: 'CV',
    component: CV,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
