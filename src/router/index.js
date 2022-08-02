import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import EvaluateView from '../views/EvaluateView.vue'
import LibraryView from '../views/LibraryView.vue'
import WatchedView from '../views/WatchedView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/evaluate',
    name: 'evaluate',
    component: EvaluateView
  },
  {
    path: '/library',
    name: 'library',
    component: LibraryView
  },
  {
    path: '/watched',
    name: 'watched',
    component: WatchedView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
