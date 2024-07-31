export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Home.vue'),
    meta: {
      title: 'Dashboard - FCI',
      requiresAuth: true,
    },
  },
  {
    path: '/companies',
    name: 'companies',
    component: () => import('@/views/companies/Companies.vue'),
    meta: {
      title: 'Companies - DealMart',
      requiresAuth: true,
      pageTitle: 'Companies',
      action: 'browes',
      breadcrumb: [
        {
          text: 'Companies',
          active: true,
        },
      ],
    },
  },

  {
    path: '/companies/add',
    name: 'add-FCI',
    component: () => import('@/views/companies/control-companies/AddEditCompanies.vue'),
    meta: {
      title: 'Add FCI - DealMart',
      requiresAuth: false,
      action: 'create',
      pageTitle: 'Companies',
      breadcrumb: [
        {
          text: 'Companies',
          to: '/companies',
        },
        {
          text: 'Add',
          active: true,
        },
      ],
    },
  },
  {
    path: '/companies/edit/:id',
    name: 'edit-FCI',
    component: () => import('@/views/companies/control-companies/AddEditCompanies.vue'),
    meta: {
      title: 'Edit Companies - DealMart',
      requiresAuth: false,
      action: 'update',
      pageTitle: 'Companies',
      breadcrumb: [
        {
          text: 'Companies',
          to: '/companies',
        },
        {
          text: 'Edit',
          active: true,
        },
      ],
    },
  },
  {
    path: '/employees',
    name: 'employees',
    component: () => import('@/views/employees/Employees.vue'),
    meta: {
      title: 'Employees - DealMart',
      requiresAuth: true,
      pageTitle: ' Employees',
      action: 'browes',
      breadcrumb: [
        {
          text: 'Employees',
          active: true,
        },
      ],
    },
  },

  {
    path: '/employees/add',
    name: 'add-employee',
    component: () => import('@/views/employees/control-employees/AddEditEmployees.vue'),
    meta: {
      title: 'Add Employee - DealMart',
      requiresAuth: false,
      action: 'create',
      pageTitle: ' Employees',
      breadcrumb: [
        {
          text: 'Employees',
          to: '/employees',
        },
        {
          text: 'Add',
          active: true,
        },
      ],
    },
  },
  {
    path: '/employees/edit/:id',
    name: 'edit-employee',
    component: () => import('@/views/employees/control-employees/AddEditEmployees.vue'),
    meta: {
      title: 'Edit Employees - DealMart',
      requiresAuth: false,
      action: 'update',
      pageTitle: ' Employees',
      breadcrumb: [
        {
          text: 'Employees',
          to: '/employees',
        },
        {
          text: 'Edit',
          active: true,
        },
      ],
    },
  },
  {
    path: '/devices',
    name: 'devices',
    component: () => import('@/views/devices/Devices.vue'),
    meta: {
      title: 'Devices',
      requiresAuth: false,
      action: 'update',
      pageTitle: ' Devices',
      breadcrumb: [
        {
          text: 'Devices',
          to: '/devices',
        },
        {
          text: 'Devices',
          active: true,
        },
      ],
    },
  },
  {
    path: '/devices-details/:id',
    name: 'devices-details',
    component: () => import('@/views/devices/DevicesDetails.vue'),
    meta: {
      title: 'Devices Details',
      requiresAuth: false,
      action: 'show',
      pageTitle: ' Devices Details',
    },
  },
  {
    path: '/devices/add',
    name: 'add-device',
    component: () => import('@/views/devices/control-devices/AddEditDevices.vue'),
    meta: {
      title: 'Add Devices',
      requiresAuth: false,
      action: 'create',
      pageTitle: ' Devices',
      breadcrumb: [
        {
          text: 'Devices',
          to: '/devices',
        },
        {
          text: 'Add',
          active: true,
        },
      ],
    },
  },
  {
    path: '/maintenance/add/:id',
    name: 'add-maintenance',
    component: () => import('@/views/devices/control-devices/AddEditMaintenance.vue'),
    meta: {
      title: 'Add Maintenance',
      requiresAuth: false,
      action: 'create',
      pageTitle: 'Maintenance',
      breadcrumb: [
        {
          text: 'Maintenance',
          to: '/devices',
        },
        {
          text: 'Add',
          active: true,
        },
      ],
    },
  },
  {
    path: '/devices/edit/:id',
    name: 'edit-device',
    component: () => import('@/views/devices/control-devices/AddEditDevices.vue'),
    meta: {
      title: 'Edit Devices',
      requiresAuth: false,
      action: 'update',
      pageTitle: ' Devices',
      breadcrumb: [
        {
          text: 'Devices',
          to: '/devices',
        },
        {
          text: 'Edit',
          active: true,
        },
      ],
    },
  },
]
