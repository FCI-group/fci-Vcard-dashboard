<template>
  <b-row class="match-height">
    <b-col
      lg="4"
      sm="6"
    >
      <router-link to="orders">
        <statistic-card-horizontal
          statistic-title="Orders"
          :statistic="dashboard.orders"
          icon="ShoppingCartIcon"
          symbol=""
        />
      </router-link>
    </b-col>

    <b-col
      lg="4"
      sm="6"
    >

      <statistic-card-horizontal
        statistic-title="Order's Amount"
        :statistic="roundToTwo(dashboard.profits)"
        icon="''"
        :symbol="currentCountry.currency_symbol"
      />
    </b-col>

    <b-col
      lg="4"
      sm="6"
    >
      <router-link to="winners">

        <statistic-card-horizontal
          statistic-title="WINNERS"
          :statistic="dashboard.winners"
          icon="AwardIcon"
          symbol=""
        />
      </router-link>
    </b-col>
    <b-col
      lg="4"
      sm="6"
    >
      <router-link to="products">

        <statistic-card-horizontal
          statistic-title="PRODUCTS"
          :statistic="dashboard.products"
          icon="PackageIcon"
          symbol=""
        />
      </router-link>
    </b-col>
    <b-col
      lg="4"
      sm="6"
    >
      <router-link to="campaigns">

        <statistic-card-horizontal
          statistic-title="Campaigns"
          :statistic="dashboard.product_gifts"
          icon="LayersIcon"
          symbol=""
        />
      </router-link>
    </b-col>
    <b-col
      lg="4"
      sm="6"
    >
      <router-link to="tickets">

        <statistic-card-horizontal
          statistic-title="TICKETS"
          :statistic="dashboard.tickets"
          icon="TagIcon"
          symbol=""
        />
      </router-link>
    </b-col>

    <b-col
      lg="4"
      sm="6"
    >
      <router-link to="users">

        <statistic-card-horizontal
          statistic-title="USERS"
          :statistic="dashboard.users"
          icon="UsersIcon"
          symbol=""
        />
      </router-link>
    </b-col>
    <b-col
      lg="4"
      sm="6"
    >

      <statistic-card-horizontal
        statistic-title="Daily Users"
        :statistic="dashboard.today_users"
        icon="UsersIcon"
        symbol=""
      />
    </b-col>
    <b-col
      lg="4"
      sm="6"
    >
      <router-link to="partners">

        <statistic-card-horizontal
          statistic-title="PARTNERS"
          :statistic="dashboard.partners"
          icon="UserIcon"
          symbol=""
        />
      </router-link>
    </b-col>
  </b-row>
</template>

<script>
import StatisticCardHorizontal from '@core/components/statistics-cards/StatisticCardHorizontal.vue'
import { mapGetters } from 'vuex'

export default {
  components: { StatisticCardHorizontal },
  props: {
    dashboard: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters({ currentCountry: 'app/getCountry' }),

  },
  methods: {
    roundToTwo(num) {
      if (num) {
        return +(`${Math.round(`${num}e+2`)}e-2`)
      }
      return ''
    },
  },

}
</script>

<style lang="scss" scoped>
a{
  color: #6e6b7b !important;
}
</style>>
