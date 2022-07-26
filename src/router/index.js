import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/myHome',
    name: 'myHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/myHome.vue')
  },
  {
    path:'/home/see',
    name:'see',
    component: () => import('../views/ViewMoew/see.vue') 
  },
  {
    path:'/:id',
    name:'travel',
    component: () => import('../views/travel.vue') 
  },
  {
    path:'/swiper',
    name:'swiper',
    component: () => import('../views/swiper.vue') 
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
