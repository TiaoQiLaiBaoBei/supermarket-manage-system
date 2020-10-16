/* eslint-disable import/no-unresolved */
/* eslint-disable func-names */
import axios from 'axios'

// 导入自己编写的组件 { gsLoading: 加载, digitalClock: 时钟, gsMenu: 导航菜单}
import gsLoading from '../components/gs-loading.vue'
import digitalClock from '../components/digital-clock.vue'
import gsMenu from '../components/gs-menu.vue'

const components = [gsLoading, digitalClock, gsMenu]

function install(Vue, store) {
  if (install.installed) return
  install.installed = true

  // 将组件进行全局注册
  components.forEach(component => Vue.component(component.name, component))

  // 给Vue的实例定义一个this.$go()、this.$replace()、this.$push()代替
  // 当前页面向前或向后跳转多少个页面
  Vue.prototype.$go = function(path) {
    this.$router.go(path)
  }
  // 不会向history里面添加新的记录，点击返回，会跳转到上上一个页面。
  Vue.prototype.$replace = function(path) {
    this.$router.replace(path)
  }
  // 向history栈添加一个记录，点击后退会返回到上一个页面。
  Vue.prototype.$push = function(path) {
    this.$router.push(path)
  }

  // 根据指定配置创建一个新的axios
  const instance = axios.create({
    // 指定请求超时的毫秒数
    timeout: 5 * 60 * 1000,
    // 表示跨域请求时是否需要使用凭证
    withCredentials: false
  })

  // 自定义统一处理异常、报错的方法
  const errorHandler = function({ response, message }) {
    // console.log('response:', response, 'message:', message)
    const { status, statusText } = response || {}
    const msg = '数据加载出错，请联系系统管理员！'
    const details = status ? `错误代码：${status}，  错误信息：${statusText} ::: ${message}` : message
    console.log(msg, details)
  }

  // 添加请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, errorHandler)

  // 添加响应拦截器
  instance.interceptors.response.use(({ data, status, statusText }) => {
    const { code, message, result = data } = data || { code: 1, message: data }
    return result
  }, errorHandler)

  // 给Vue的实例定义一个this.$http、this.$axios
  Vue.prototype.$http = instance
  Vue.prototype.$axios = axios
}

// 兼容<script>方式-自动注册插件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
