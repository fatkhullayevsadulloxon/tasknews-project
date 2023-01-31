import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from "../components/Pages/HomePage.vue"
import SinglePage from "../components/Pages/SinglePage.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/id/1',
    name: 'single',
    component: SinglePage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
