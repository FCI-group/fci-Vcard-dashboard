import Vue from 'vue'
import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue'
import {
  ValidationProvider, ValidationObserver, extend, localize,
} from 'vee-validate'

// import VueCountdown from '@chenfengyuan/vue-countdown'

Vue.component(FeatherIcon.name, FeatherIcon, ValidationProvider, ValidationObserver, extend, localize)
