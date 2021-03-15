// main.js 程序入口文件，是初始化vue实例并使用需要的插件,加载各种公共组件。
// 1.import...from...的from命令后面可以跟很多路径格式，
// --若只给出vue，axios这样的包名，则会自动到node_modules中加载；
// --若给出相对路径及文件前缀，则到指定位置寻找。
// 2.可以加载各种各样的文件：.js、.vue、.less等等。
// 3.可以省略掉from直接引入。
// ES6的import...from...指令挺神奇，不需要指明文件后缀，这样很方便快捷。
// "../node_modules/vue/dist/vue.js"
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入echarts
import echarts from 'echarts'
// 让页面滑动流畅得飞起的新特性：Passive Event Listeners
import 'default-passive-events'
// 编码但不渲染的标签
import Fragment from 'vue-fragment'

// 重写$message
import { newMessage } from '@/plugins/js/resetMessage'
import Greatsoft from './plugins'
import global from './components/global.vue'
// 路由文件 因为router文件夹下的index.js---export default router 所以能定位
import router from './router'
import store from './store'

import App from './App.vue'

// 引入element size 字段：规定组件的大小 zIndex 字段：规定弹出框的初始值，默认2000
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
// 引入自定义插件：包含了axios
Vue.use(Greatsoft)
// 引入编码但不渲染的标签
Vue.use(Fragment.Plugin)

// 阻止启动生产消息:关闭生产模式下给出的提示
Vue.config.productionTip = false

// 挂载echarts
Vue.prototype.$echarts = echarts
// 挂载重写后的$message
Vue.prototype.$message = newMessage

// 使用axios读取配置文件 - 加载后初始化根实例
// render函数是渲染一个视图，然后提供给el挂载，如果没有render那页面什么都不会出来。
// => 表示 Vue 实例选项对象的 render 方法，它作为一个函数，接受传入的参数 h 函数，返回 h(App) 的函数调用结果。
// render: function (h) { return h(App) }
// Vue 在创建 Vue 实例时，通过调用 render 方法来渲染实例的 DOM 树。
Vue.prototype.$axios.all([Vue.prototype.$axios.get('./wallpaper'), Vue.prototype.$axios.get('./config.json')]).then(
  Vue.prototype.$axios.spread((wallpaperData, configData) => {
    global.backgroundImage = wallpaperData.data
    // 将全局变量挂载
    Vue.prototype.$global = global
    // 将配置参数挂载
    Vue.prototype.$parameter = configData.data
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
)
