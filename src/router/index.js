import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services'
import Media from '../views/Media'
import Contact from '../views/Contact'

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
    component: () => import('../views/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/media',
    name: 'Media',
    component: Media
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
