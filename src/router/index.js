import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import EvaluateView from '../views/EvaluateView.vue'
import LibraryView from '../views/LibraryView.vue'
import WatchedView from '../views/WatchedView.vue'
import StaffMadeView from '../views/StaffMadeView.vue'
import ContentView from '../views/ContentView.vue'
import WatchView from '../views/WatchView.vue'
import TagSuggestionsView from '../views/TagSuggestionsView'
import PopularListView from '../views/PopularListView'

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
  {
    path: '/staffmade',
    name: 'staffmade',
    component: StaffMadeView
  },
  {
    path: '/content',
    name: 'content',
    component: ContentView,
    props: true
  },
  {
    path: '/watch',
    name: 'watch',
    component: WatchView,
    meta: { layout: 'WatchLayout' },
  },
  {
    path: '/tag_suggestions/:slug',
    name: 'tag_suggestions',
    component: TagSuggestionsView
  },
  {
    path: '/popular_list',
    name: 'popular_list',
    component: PopularListView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
