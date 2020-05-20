import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/home.vue')
const All = () => import('../views/all/all.vue')
const Cartfull = () => import('../views/cart/cartfull.vue')
const Conditions = () => import('../views/conditions/conditions.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/all',
    name: 'all',
    component: All
  },
  {
    path: '/cartfull',
    name: 'cartfull',
    component: Cartfull
  },
  {
    path: '/conditions',
    name: 'conditions',
    component: Conditions
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
