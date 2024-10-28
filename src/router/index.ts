import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/overview/:id',
      name: 'overview',
      component: () => import('../pages/OverviewPage/OverviewPage.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../pages/DetailPage/DetailPage.vue'),
    },
  ],
})

export default router
