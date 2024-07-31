import axiosInstances from '@/libs/axios-instances'

// eslint-disable-next-line no-unused-vars
const setup = store => {
  axiosInstances.login.interceptors.request.use(
    config => {
      // console.log(config)
      // eslint-disable-next-line prefer-destructuring
      // const token = this.state.auth.token
      // if (token) {
      //   // eslint-disable-next-line no-param-reassign
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      // return config
    },
    // error => Promise.reject(error),
  )

  // axiosInstances.login.interceptors.response.use(
  //   res => res,
  //   async err => {
  //     const originalConfig = err.config

  //     if (originalConfig.url !== 'login' && err.response) {
  //       // Access Token was expired
  //       // eslint-disable-next-line no-underscore-dangle
  //       if (err.response.status === 401 && !originalConfig._retry) {
  //         // eslint-disable-next-line no-underscore-dangle
  //         originalConfig._retry = true

  //         try {
  //           const rs = await axiosInstances.login.post('refresh-token', {
  //             refresh_token: this.$store.auth.refresh_token,
  //           })

  //           const { refresh_token } = rs.data

  //           store.commit('auth/SET_REFRESH_TOKEN', refresh_token)
  //           // TokenService.updateLocalrefresh_token(accessToken)

  //           return axiosInstances.login(originalConfig)
  //         } catch (_error) {
  //           return Promise.reject(_error)
  //         }
  //       }
  //     }

  //     return Promise.reject(err)
  //   },
  // )
}

export default setup
