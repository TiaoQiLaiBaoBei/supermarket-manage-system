// vuex是专为vue.js应用程序开发的状态管理模式。
// 它采用集中存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadingCount: 0
  },
  getters: {
    keepLive() {
      // return router.options.routes.map(({ name, meta }) => name)
      const list = router.options.routes.map(currentValue => {
        if (currentValue.meta && currentValue.meta.keepAlive) {
          return currentValue.name
        }
        return null
      })
      return list.filter(currentValue => {
        return currentValue
      })
    },
    keepLiveHome() {
      const routes = router.options.routes.map(currentValue => {
        if (currentValue.children && currentValue.children.length > 0) {
          return currentValue.children
        }
        return null
      })
      let list = []
      for (let i = 0; i < routes.length; i += 1) {
        if (routes[i]) {
          list = list.concat(routes[i])
        }
      }
      list = list.map(currentValue => {
        if (currentValue.meta && currentValue.meta.keepAlive) {
          return currentValue.name
        }
        return null
      })
      return list.filter(currentValue => {
        return currentValue
      })
    },
    isLoading({ loadingCount }) {
      return loadingCount > 0
    }
  },
  mutations: {
    showLoading(state) {
      state.loadingCount += 1
    },
    hideLoading(state) {
      state.loadingCount = Math.max(0, state.loadingCount - 1)
    }
  },
  actions: {
    showLoading({ commit }) {
      commit('showLoading')
    },
    hideLoading({ commit }) {
      commit('hideLoading')
    }
  },
  modules: {}
})
