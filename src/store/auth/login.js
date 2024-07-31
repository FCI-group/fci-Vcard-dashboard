/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import axios from 'axios'
// import axiosInstances from '@/libs/axios-instances'
// import router from '@/router'

export default {
  namespaced: true,
  state: {
    token: '',
    refresh_token: '',
    access_token: '',
    loggedInUser: {},
    isAuthenticated: false,
    loader: false,
    loginError: null,
    userInfo: {},
  },
  getters: {
    loggedInUser: state => state.loggedInUser,
    isAuthenticated: state => state.isAuthenticated,
    accessToken: state => state.access_token,
    refreshToken: state => state.refresh_token,
    userInfo: state => state.userInfo,
  },
  mutations: {
    SET_TOKEN(state, token) {
      localStorage.setItem('accessToken', token)
      state.token = token
    },
    SET_REFRESH_TOKEN(state, refreshToken) {
      state.refresh_token = refreshToken
      localStorage.setItem('refreshToken', refreshToken)
    },
    SET_LOGED_IN_USER(state, user) {
      state.loggedInUser = user
      state.isAuthenticated = true
    },
    CLEAR_USER_DATA(state) {
      state.refresh_token = ''
      state.access_token = ''
      state.loggedInUser = {}
      state.isAuthenticated = false
    },
    SET_LOADER(state, loader) {
      state.loader = loader
    },
    STOP_LOGIN(state, errorLogin) {
      state.loader = false
      state.loginError = errorLogin
    },
    SET_USER_INFO(state, info) {
      state.userInfo = info
      localStorage.setItem('user_info', info)
    },
  },
  actions: {
    async login({ commit, getters }, userCredentials) {
      const loginEndPoint = 'login'
      commit('SET_LOADER', true)
      try {
        await axios.post(loginEndPoint, userCredentials).then(res => {
          if (res.status === 200) {
            localStorage.setItem('accessToken', res.data.data.token)
            localStorage.setItem('user_info', res.data.data.admin)
            commit('SET_USER_INFO', res.data.data.admin)
            commit('SET_TOKEN', res.data.data.token)
            // this.$router.push.push('/')
            window.location.href = '/employees'
          }
        }).finally(() => {
          commit('SET_LOADER', false)
        })
      } catch (e) {
        if (e) {
          commit('STOP_LOGIN', 'Please enter a valid username and password')
        }
      }
    },
    async refreshToken({ state, commit }) {
      const refreshTokenEndPoint = 'refresh-token'
      try {
        await axios.post(refreshTokenEndPoint, { refresh_token: localStorage.getItem('refreshToken') }).then(res => {
          if (res.status === 200) {
            commit('SET_TOKEN', res.data.data.access_token)
            commit('SET_REFRESH_TOKEN', res.data.data.refresh_token)
          }
        })
      } catch (e) {
        // console.log(e)
      }
    },
  },
}
