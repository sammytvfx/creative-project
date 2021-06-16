import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lessons from '../views/Lessons.vue'
import Register from '../views/Register.vue'
import Questions from '../views/Questions.vue'
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
