import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/smoothies',
    name: 'Smoothies',
    
    component: () => import( '../views/Smoothies.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  base:process.env.BASE_URl,
  routes
})

export default router
