import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Goods from '@/views/Goods'

const List = ()=>import('@/views/Goods/GoodsList.vue')
const Category = ()=>import('@/views/Goods/Category.vue')


const routes = [
  {
    path:'/',
    component:Layout,
    children:[
      {
        path:'/',
        name:'home',
        component:Home
      },
      {
        path:'/goods',
        name:'goods',
        component:Goods,
        children:[
          {
            path:'list',
            name:'list',
            component:List
          },
          {
            path:'category',
            name:'category',
            component:Category
          }
        ]
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
