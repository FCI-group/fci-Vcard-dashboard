/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import router from '@/router'

export default function axiosSetUp() {
  axios.defaults.baseURL = 'https://FCI-vcard.tmam.app/api/v1/admin/'
  axios.interceptors.request.use(
    config => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${token}`
        // config.headers.setAttribute('Authorization', token)
      }
      return config
    },
    error => Promise.reject(error),
  )
}

axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config
    if (
      error.response.status === 401
      && originalRequest.url.includes('refresh-token')
    ) {
      localStorage.removeItem('accessToken')
      router.push('/login')
      return Promise.reject(error)
    }
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      await store.dispatch('login/refreshToken')
      return axios(originalRequest)
    }
    return Promise.reject(error)
  },
)
