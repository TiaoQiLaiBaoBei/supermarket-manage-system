import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import NotFoundComponent from '../views/About.vue'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter)

const routes = [
  // 错误界面
  {
    path: '*',
    name: '404',
    component: NotFoundComponent,
    meta: {
      keepAlive: false,
      title: '404~'
    }
  },
  // 网站首页
  {
    path: '/',
    name: 'app',
    component: Index,
    meta: {
      keepAlive: false,
      title: '首页'
    }
  },
  // 超市首页
  {
    path: '/index',
    name: 'index',
    component: Index,
    meta: {
      keepAlive: false,
      title: '首页'
    }
  },
  // 用户登录
  {
    path: '/login',
    name: 'login',
    // 路由级代码拆分 route level code-splitting
    // 这将为此路由生成一个单独的块 this generates a separate chunk (about.[hash].js) for this route
    // 当访问路由时延迟加载。which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    meta: {
      keepAlive: false,
      title: '登录界面'
    }
  },
  // 后台管理界面的home-在main界面中打开子路由界面。
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
    meta: {
      keepAlive: false,
      title: '后台管理界面'
    },
    children: [
      {
        path: 'reward-module',
        name: 'reward-module',
        component: () => import(/* webpackChunkName: "reward-module" */ '../views/home-page/reward-module.vue'),
        meta: {
          keepAlive: true,
          title: '管理界面一'
        }
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import(/* webpackChunkName: "reward-module" */ '../views/home-page/table.vue'),
        meta: {
          keepAlive: true,
          title: '管理界面二'
        }
      }
    ]
  }
]

const router = new VueRouter({
  // hash 模式和 history 模式。带＃的则是hash模式。
  mode: 'hash',
  routes
})
// to：进入到哪个路由去
// from：从哪个路由离开
// next：路由的控制参数，常用的有next(true)和next(false)
// title 浏览器的路径中文。
router.beforeEach((to, from, next) => {
  // console.log('to::', to, 'from::', from)
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export default router
