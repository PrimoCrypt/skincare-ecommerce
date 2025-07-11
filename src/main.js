import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHistory } from 'vue-router'
import createRouter from '@/router/index.js'
import './style.css'
import App from '@/App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart'


library.add(faShoppingCart)
// createApp(App).use(router).mount('#app')
const router = createRouter(createWebHistory())
router.beforeEach(()=>{
    window.scrollTo(0,0)
});

const app = createApp(App)
const pinia = createPinia()

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router).mount('#app')