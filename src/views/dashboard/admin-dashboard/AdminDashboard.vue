<template>
  <b-row>
    Dashboard
  </b-row>
</template>

<script>
import axios from 'axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { mapGetters } from 'vuex'

export default {
  components: {

  },

  data() {
    return {
      dashboard: {},
    }
  },
  computed: {

    ...mapGetters({ currentCountry: 'app/getCountry' }),

  },
  watch: {
    '$store.state.app.country': {
      immediate: true,
      handler() {
        this.getDahboard()
        // make actions with newVal.page
      },
    },
  },
  mounted() {
    this.getDahboard()
  },
  setup() {
    const resolveTransactinsStatusVariantAndIcon = status => {
      if (status === true) return { variant: 'light-success', icon: 'CheckCircleIcon' }

      return { variant: 'light-danger', icon: 'InfoIcon' }
    }

    const resolveTransactionsMethod = method => {
      if (method === 'received_money') return { variant: 'light-success', icon: 'ArrowDownRightIcon' }

      return { variant: 'light-info', icon: 'ArrowUpLeftIcon' }
    }

    return {
      resolveTransactinsStatusVariantAndIcon,
      resolveTransactionsMethod,
    }
  },
  methods: {
    async getDahboard(params) {
      try {
        const { data } = await axios.get(`admin/statistics?country_id=${this.currentCountry.id}`, { params })
        this.dashboard = data.data
      } catch (error) {
        if (error.response.status === 500) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Server Error',
              icon: 'BellIcon',
              variant: 'danger',
            },
          })
        }
      }
    },
  },
}
</script>

<style>

</style>
