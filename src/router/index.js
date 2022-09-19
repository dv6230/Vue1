import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { path: '/information', name: 'information', component: () => import('../views/Information.vue') },
  { path: '/prop', name: 'prop', component: () => import('../views/PropView.vue') },
  { path: '/router1/:productId', name: 'router1', component: () => import('../views/RouterView1.vue') },
  { path: '/router2', name: 'router2', component: () => import('../views/RouterView2.vue') },
]

const router = new VueRouter({
  routes
})

export default router
