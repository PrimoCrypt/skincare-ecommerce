import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import createRouter from '@/router/index.js'
import './style.css'
import App from '@/App.vue'

// createApp(App).use(router).mount('#app')
const router = createRouter(createWebHistory())
router.beforeEach(()=>{
    window.scrollTo(0,0)
});

const app = createApp(App)

app.use(router).mount('#app')