import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import MyCardComponent from './components/MyCard.vue'
import BasicCardComponent from'./components/BasicCard.vue'

createApp(App)
.use(router)
.component('MyCard',MyCardComponent)
.component('BasicCard',BasicCardComponent)
.mount('#app')