<template>
  <b-nav-item-dropdown
    id="dropdown-grouped"
    variant="link"
    class="dropdown-language"
    right
  >
    <template #button-content>
      <b-img
        :src="currentCountry.flag_image"
        height="14px"
        width="22px"
        :alt="currentCountry.name"
      />
      <span class="ml-50 font-weight-bold">{{ currentCountry.name }}</span>
    </template>

    <b-dropdown-item
      v-for="country in countries"
      :key="country.id"
      @click="storeCountry(country)"
    >
      <b-img
        :src="country.flag_image"
        height="14px"
        width="22px"
        :alt="country.name"
      />
      <span class="ml-50">{{ country.name }}</span>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'
import axios from 'axios'
import { mapGetters } from 'vuex'
import { ref } from '@vue/composition-api'

export default {
  // ! Need to move this computed property to comp function once we get to Vue 3
  computed: {

    ...mapGetters({ currentCountry: 'app/getCountry' }),

  },
  setup() {
    /* eslint-disable global-require */
    const countries = ref([])
    /* eslint-disable global-require */

    const {
      isRTL,
    } = useAppConfig()
    return {
      countries,
      isRTL,
    }
  },
  mounted() {
    this.getCountries()
  },
  methods: {
    async getCountries() {
      await axios.get('admin/countries').then(res => {
        if (res.status === 200) {
          this.countries = res.data?.data.countries
          this.storeCountry(this.countries.find(l => l.id === 1))
        }
      })
    },
    storeCountry(country) {
      this.$store.commit('app/setCountry', country)
    },
  },
}
</script>

<style>

</style>
