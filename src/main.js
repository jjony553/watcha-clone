import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import MyCardComponent from './components/MyCard.vue'
import BasicCardComponent from'./components/BasicCard.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import WatchLayout from './layouts/WatchLayout.vue'

import mitt from 'mitt'
const emitter = mitt()


createApp(App)
.use(router)
.component('MyCard',MyCardComponent)
.component('BasicCard',BasicCardComponent)
.component('DefaultLayout',DefaultLayout)
.component('WatchLayout',WatchLayout)
.provide('emitter', emitter)
.mount('#app')