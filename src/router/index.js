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
    path: '/petDetail:id',
    name: 'petDetailPage',
    component: () => import('../views/petDetailPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
