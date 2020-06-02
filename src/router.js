import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/attract',
      name: 'attract',
      component: () => import('./views/Attract.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('./views/Product.vue')
    },
    {
      path: '/steward',
      name: 'steward',
      component: () => import('./views/Steward.vue')
    },
    {
      path: '/brand',
      name: 'brand',
      component: () => import('./views/Brand.vue')
    }, {
      path: '/contactUs',
      name: 'contactUs',
      component: () => import('./views/ContactUs.vue')
    },{
      path:'*',
      name: 'Home',
      component: () => import('./views/Home.vue')
    }
  ]
})
