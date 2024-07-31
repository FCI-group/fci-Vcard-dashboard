/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from './routes/dashboard'
import authentication from './routes/authentication'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'employees' } },

    ...dashboard,
    ...authentication,
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((to, from, next) => {
  // // console.log(to)
  const isLoggedIn = localStorage.getItem('accessToken')
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !isLoggedIn) next({ name: 'login' })

  // if (!canNavigate(to)) next('login')
  // else next()

  // if (!canNavigate(to)) {
  //   //  If logged in => not authorized
  //   if (!isLoggedIn) {
  //     return next({ name: 'login' })
  //   }
  //   return next({ name: 'not-authorized' })
  // }

  // if (canNavigate(to)) {
  //   //  If logged in => not authorized
  //   if (isLoggedIn) {
  //     return next({
  //       path: from.fullPath,
  //       replace: true,
  //     })
  //   }
  // }
  return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach((to, from) => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
  const DEFAULT_TITLE = 'FCI - Dashboard'
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
  })
})

export default router
