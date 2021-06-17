import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lessons from '../views/Lessons.vue'
import Register from '../views/Register.vue'
import Questions from '../views/Questions.vue'
import Bookings from'../views/Bookings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Lessons',
    name: 'Lessons',
    component: Lessons
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Questions',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/Bookings',
    name: 'Bookings',
    component: Bookings,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
