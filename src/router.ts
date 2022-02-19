import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/Index.vue'
import About from './pages/About.vue'
import Tool from './pages/Tool.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
  {
    path: '/',
    component: Index,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./pages/About.vue')
  },
  {
    path: '/tool',
    meta: { title: 'Tool' },
    component: Tool,
  },
  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
