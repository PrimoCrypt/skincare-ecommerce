import { createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import BlogView from '@/views/BlogView.vue'
import AboutView from '@/views/AboutView.vue'
import CartView from '@/views/CartView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView 
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  }
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}