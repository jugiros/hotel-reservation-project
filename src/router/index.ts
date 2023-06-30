import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/**
 * Function to load views using lazy loading.
 * @param view
 */
const loadComponent = (view: string) => {
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
    component: loadComponent('DocumentationView')
  },
  {
    path: '/ridgewood',
    name: 'ridgewood',
    component: loadComponent('RidgewoodView')
  },
  {
    path: '/bridgewood',
    name: 'bridgewood',
    component: loadComponent('BridgewoodView')
  },
  {
    path: '/lakewood',
    name: 'lakewood',
    component: loadComponent('LakewoodView')
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
