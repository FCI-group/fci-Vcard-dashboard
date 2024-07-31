import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
// eslint-disable-next-line import/no-cycle
import login from './auth/login'
import generalIds from './ids'
import places from './places'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    login,
    generalIds,
    places,
  },
  strict: process.env.DEV,
})
