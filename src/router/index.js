import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../modules/profile/views/Dashboard.vue'
import { useAuthStore } from '../modules/auth/stores/auth'

import authRoute from '../modules/auth/router'

const routes = [
  ...authRoute,
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Route guard
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
