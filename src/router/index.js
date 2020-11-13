import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../views/Home'),
    children:[
      {
        path: '/',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/Index')
      },
      // {
      //   path:'/home/about',
      //   name:'About',
      // },
      {
        path: '/discover',
        name: 'discover',
        component: () => import(/* webpackChunkName: "about" */ '../views/Discover')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import(/* webpackChunkName: "about" */ '../views/Order')
      },
      {
        path: '/profiles',
        name: 'profiles',
        component: () => import(/* webpackChunkName: "about" */ '../views/Profiles')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login')
  },
  {
    path:"/Address",
    name:"address",
    component:()=>import("../views/Address")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
