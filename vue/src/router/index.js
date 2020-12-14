import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path:'/',
    redirect:'/login'
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

//挂载路由守卫
router.beforeEach((to, from, next) =>{
  //to 将要访问的路径
  //from 代表从哪个路径跳转而来
  //next 是一个函数，表示放行
  //    next() 表示放行， next('/login') 表示强制跳转路径

  if (to.path === '/login') return next ()
  //获得Token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router