import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import MyCardComponent from './components/MyCard.vue'
import BasicCardComponent from'./components/BasicCard.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import WatchLayout from './layouts/WatchLayout.vue'

createApp(App)
.use(router)
.component('MyCard',MyCardComponent)
.component('BasicCard',BasicCardComponent)
.component('DefaultLayout',DefaultLayout)
.component('WatchLayout',WatchLayout)
.mount('#app')