import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import book from '../views/book.vue'
import review from '../views/review.vue'
import Liran from '../views/Liran.vue'
import Sahar from '../views/Sahar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/book',
    name: 'book',
    component: book
  },
  {
    path: '/review',
    name: 'review',
    component: review
  },
  {
    path: '/Liran',
    name: 'Liran',
    component: Liran
  },
  {
    path: '/Sahar',
    name: 'Sahar',
    component: Sahar
  },
]

const router = new VueRouter({
  routes
})

export default router
