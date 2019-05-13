import Vue from 'vue'
import Router from 'vue-router'
import ssq from './views/ssq/index.vue'
import randomList from './views/ssq/randomList.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ssq',
      component: ssq,
      children: [
        {
          path: '/',
          name: "randomList",
          component: randomList
        },
        {
          path: 'ordinaryRandom',
          name: "normalRandom",
          component: () => import(/* webpackChunkName: "ordinaryRandom" */ '@/views/ssq/ordinaryRandom.vue')
        },
        {
          path: 'bigData',
          name: "bigData",
          component: () => import(/* webpackChunkName: "bigData" */ '@/views/ssq/big-data.vue')
        }
      ]
    }
  ]
})