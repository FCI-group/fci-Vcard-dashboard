<template>
  <b-nav-item-dropdown
    id="dropdown-grouped"
    variant="link"
    class="dropdown-language"
    right
  >
    <template #button-content>
      <b-img
        v-img
        :src="currentLocale.img"
        height="14px"
        width="22px"
        :alt="currentLocale.locale"
      />
      <span class="ml-50 text-body">{{ currentLocale.name }}</span>
    </template>
    <b-dropdown-item
      v-for="localeObj in locales"
      :key="localeObj.locale"
      @click="storeLanguage(localeObj.locale)"
    >
      <b-img
        v-img
        :src="localeObj.img"
        height="14px"
        width="22px"
        :alt="localeObj.locale"
      />
      <span class="ml-50">{{ localeObj.name }}</span>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'

export default {
  // ! Need to move this computed property to comp function once we get to Vue 3
  computed: {
    currentLocale() {
      return this.locales.find(l => l.locale === this.$i18n.locale)
    },
  },
  setup() {
    /* eslint-disable global-require */
    const locales = [
      {
        locale: 'en',
        img: require('@/assets/images/flags/en.png'),
        name: 'English',
      },
      {
        locale: 'fr',
        img: require('@/assets/images/flags/fr.png'),
        name: 'French',
      },
      {
        locale: 'de',
        img: require('@/assets/images/flags/de.png'),
        name: 'German',
      },
      {
        locale: 'pt',
        img: require('@/assets/images/flags/pt.png'),
        name: 'Portuguese',
      },
    ]
    /* eslint-disable global-require */

    const {
      isRTL,
    } = useAppConfig()
    return {
      locales,
      isRTL,
    }
  },
  methods: {
    storeLanguage(lang) {
      this.$i18n.locale = lang
      localStorage.setItem('language_code', lang)
      const la = localStorage.getItem('language_code')
      if (la === 'de') {
        this.isRTL = true
      } else {
        this.isRTL = false
      }
    },
  },
}
</script>

<style>

</style>
