import Vue from 'vue'
import { ToastPlugin, ModalPlugin, BootstrapVue } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'
// import Axios from 'axios'
import {
  ValidationProvider, ValidationObserver,
} from 'vee-validate'
import VueDatetimePickerJs from 'vue-date-time-picker-js'
import VueJsonToCsv from 'vue-json-to-csv'
import VueImg from 'v-img'
import vueDebounce from 'vue-debounce'

import Toasted from 'vue-toasted'
import VueSweetalert2 from 'vue-sweetalert2'
import * as VueGoogleMaps from 'vue2-google-maps'
import VJsoneditor from 'v-jsoneditor'
// import Echo from 'laravel-echo'
import VueApexCharts from 'vue-apexcharts'
import VueYoutube from 'vue-youtube'
import JsonExcel from 'vue-json-excel'
import axiosSetup from '@/libs/axios-instances'
// import axiosInstances from '@/libs/axios-instances'
import i18n from '@/libs/i18n'

import router from './router'
import store from './store'
import App from './App.vue'
import 'leaflet/dist/leaflet.css'
import 'leaflet-geosearch/dist/geosearch.css'
// Global Components
import './global-components'
// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'

Vue.use(vueDebounce)
Vue.use(VueImg)
Vue.component('vue-json-to-csv', VueJsonToCsv)

Vue.component('downloadExcel', JsonExcel)
Vue.use(VueDatetimePickerJs, {
  name: 'custom-date-picker',
  props: {
    inputFormat: 'YYYY-MM-DD HH:mm',
    format: 'YYYY-MM-DD HH:mm',
    editable: false,
    inputClass: 'form-control my-custom-class-name',
    placeholder: 'Please select a date',
    altFormat: 'YYYY-MM-DD HH:mm',
    color: '#0665f1',
    autoSubmit: false,
  },
})
Vue.use(VueYoutube)
window.io = require('socket.io-client')

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

// Axios.defaults.baseURL = 'http://localhost:3000/'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
Vue.use(BootstrapVue)

// register axios apis instances
// Vue.use(axiosInstances)

// Composition API
Vue.use(VueCompositionAPI)
Vue.use(Toasted)
Vue.use(VueSweetalert2)
Vue.use(VJsoneditor)

// vee validate register
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBIXateUuFJu7bTAJIIAS4bQK26XSIRaHY',
    libraries: 'places',
  },
  installComponents: true,
})

Vue.config.productionTip = false

axiosSetup()

Vue.filter('formatDate', value => {
  let filteredDate = ''
  if (value) {
    const myDate = new Date(value)
    const year = myDate.getUTCFullYear()
    const mth = myDate.getUTCMonth() + 1
    const day = myDate.getUTCDate()
    let hours = myDate.getUTCHours()
    const min = myDate.getUTCMinutes()
    let am = true
    if (hours > 12) {
      am = false
      hours -= 12
    } else if (hours === 12) {
      am = false
    } else if (hours === 0) {
      hours = 12
    }
    const dayNight = (am ? 'AM' : 'PM')
    filteredDate = `${day}-${mth}-${year} ${hours}:${min} ${dayNight}`
  }
  return filteredDate
})
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
