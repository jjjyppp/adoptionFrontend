import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: () => import('../views/homePage.vue')
  },
  {
    path: '/adoption',
    name: 'adoptionPage',
    component: () => import('../views/adoptionPage.vue')
  },
  {
    path: '/rehome',
    name: 'rehomePage',
    component: () => import('../views/rehomePage.vue')
  },
  {
    path: '/board',
    name: 'boardPage',
    component: () => import('../views/boardPage.vue')
  },
  {
    path: '/lostPet',
    name: 'lostPetPage',
    component: () => import('../views/lostPetPage.vue')
  },
  {
    path: '/store',
    name: 'storePage',
    component: () => import('../views/storePage.vue')
  },
  {
    path: '/mine',
    name: 'minePage',
    component: () => import('../views/minePage.vue')
  },
  {
    path: '/login',
    name: 'loginPage',
    component: () => import('../views/loginPage.vue')
  },
  {
    path: '/findMyPet',
    name: 'findMyPetPage',
    component: () => import('../views/findMyPet.vue')
  },
  {
    path: '/petDetail',
    name: 'petDetailPage',
    component: () => import('../views/petDetailPage.vue')
  },
  {
    path: '/favorites',
    name: 'myFavoritePage',
    component: () => import('../views/myFavoritePage.vue')
  },
  // {
  //   path: '/favorites',
  //   name: 'myFavoritePage1',
  //   component: () => import('../views/myFavoritePage1.vue')
  // },
  {
    path: '/signup',
    name: 'signupPage',
    component: () => import('../views/signupPage.vue')
  },
  {
    path: '/article',
    name: 'articlePage',
    component: () => import('../views/articlePage.vue')
  },
  {
    path: '/temp',
    name: 'tempAdoptionPage',
    component: () => import('../views/tempAdoptionPage.vue')
  },
  {
    path: '/rescueStation',
    name: 'rescueStationPage',
    component: () => import('../views/rescueStationPage.vue')
  }
]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
//   // scrollBehavior(to, from, savedPosition) {
//   //   // 将滚动位置设置为页面的最顶部
//   //   return { x: 0, y: 0 };
//   // },
// })

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 每次切换路由页面滚动到顶部
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
