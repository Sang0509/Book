import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/list',
    name: 'list',
    component: HomeView
  },
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
]

const router = new VueRouter({
  routes
})

export default router
