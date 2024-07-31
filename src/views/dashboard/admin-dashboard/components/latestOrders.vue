<template>
  <b-card>
    <b-card-title>Latest Orders</b-card-title>
    <hr>
    <b-col
      v-for="order in latestOrders"
      :key="order.id"
      cols="12"
      class="mb-1 p-0"
    ><router-link
      :to="{name: 'show-order', params: { id: order.id }}"
    ><div class="d-flex justify-content-between">
      <div class="d-flex"> <div><b-avatar
                             size="40"
                             class="mr-1"
                           /></div>
        <div><div class="userName">
               {{ order.user_name }}
             </div>
          <div class="subTitle">
            {{ order.user_mobile }}
          </div>
        </div></div>
      <div><div class="total">
             {{ order.total }} {{ currentCountry.currency_symbol }}
           </div>
        <div class="subTitle">
          Total
        </div>
      </div>
      <!-- <div><div class="status">
             {{ order.status }}
           </div>
        <div class="subTitle">
          Status
        </div>
      </div> -->
    </div>
    </router-link>
    </b-col>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    latestOrders: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters({ currentCountry: 'app/getCountry' }),

  },
}
</script>

  <style lang="scss" scoped>
  a{
    color: #6e6b7b !important;
  }
  .userName{
    color: #0665f1;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
  }
  .total,.status{
    color: #424049;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;

  }
  .subTitle{
    color: rgb(87, 84, 97);
    font-size: 12px;
  }
  </style>>
