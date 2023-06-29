import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/**
 * Function to load views using lazy loading.
 * @param view
 */
const loadComponent = (view: any) => {
  return () => import(`../views/${view}.vue`);
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: loadComponent('AboutView')
  },
  {
    path: '/:catchAll(.*)',
    name: 'error404',
    component: loadComponent('ErrorView404')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
