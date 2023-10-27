/*
 * @Author: zd
 * @Date: 2022-12-31 18:47:44
 * @LastEditors: zd
 * @LastEditTime: 2023-10-27 15:33:51
 * @Description: 路由
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "LoginView" */ '../views/LoginView.vue')
  },
  {
    path: '/threeThousandEmpire',
    name: 'ThreeThousandEmpire',
    component: () =>
      import(/* webpackChunkName: "ThreeThousandEmpire" */ '../views/ThreeThousandEmpire.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
