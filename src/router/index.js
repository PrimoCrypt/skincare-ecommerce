import { createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import BlogView from '@/views/BlogView.vue'
import AboutView from '@/views/AboutView.vue'
import CartView from '@/views/CartView.vue'
import NotFound from '@/views/NotFound.vue'
import ItemDetails from '@/components/ItemDetails.vue'
import { defineProps } from 'vue'


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
  },
  {
    path: '/products/:value',
    name: 'ItemDetails',
    component: ItemDetails,
    props: true
  },
  // Catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}