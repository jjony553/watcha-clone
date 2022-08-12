import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import MyCardComponent from './components/MyCard.vue'
import BasicCardComponent from'./components/search/BasicCard.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import WatchLayout from './layouts/WatchLayout.vue'
import VueHorizontal from "vue-horizontal";
import { createPinia } from 'pinia'

import mitt from 'mitt'
const emitter = mitt()


createApp(App)
.use(createPinia())
.use(router)
.component('MyCard',MyCardComponent)
.component('BasicCard',BasicCardComponent)
.component('DefaultLayout',DefaultLayout)
.component('WatchLayout',WatchLayout)
.component('VueHorizontal',VueHorizontal)
.provide('emitter', emitter)
.mount('#app')