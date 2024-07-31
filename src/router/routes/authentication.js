export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/authentication/Login.vue'),
    meta: {
      layout: 'full',
      action: 'read',
      resource: 'Auth',
    },
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/authentication/ForgotPassword.vue'),
    meta: {
      layout: 'full',
      action: 'read',
      resource: 'Auth',
    },
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/views/authentication/ResetPassword.vue'),
    meta: {
      layout: 'full',
      action: 'read',
      resource: 'Auth',
    },
  },
  {
    path: '/verification-code',
    name: 'verification-code',
    component: () => import('@/views/authentication/VerificationCode.vue'),
    meta: {
      layout: 'full',
      action: 'read',
      resource: 'Auth',
    },
  },
  {
    path: '/not-authorized',
    name: 'not-authorized',
    component: () => import('@/views/authentication/NotAuth.vue'),
    meta: {
      layout: 'full',
      action: 'read',
      resource: 'Auth',
    },
  },
]
