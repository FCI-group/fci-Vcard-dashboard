<template>

  <b-row class="w-100 m-0">

    <b-col
      lg="6"
      md="8"
      cols="12"
    >
      <b-card
        no-body

        class="orderCard"
      >
        <div class="conOFChart">

          <apexchart
            v-if="loaded"
            :key="orderChartData.length"
            ref="orderChart"
            :options="chartOptions"
            :series="orderChartData"
          />
          <div
            v-else
            class="text-center my-5"
          >
            <b-spinner
              type="grow"
              label="Loading..."
            />
          </div>
        </div>
      </b-card>
    </b-col>
    <b-col
      lg="6"
      md="8"
      cols="12"
    >

      <b-card
        no-body

        class="orderCard"
      >
        <div class="conOFChartStatus">
          <apexchart
            v-if="loaded"
            :key="orderChartData.length"
            ref="orderStatusChart"
            :options="options"
            :series="orderChartStatusData.myArray"
          />
          <div
            v-else
            class="text-center my-5"
          >
            <b-spinner
              type="grow"
              label="Loading..."
            />
          </div>
        </div>

      </b-card>
    </b-col>

  </b-row>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      loaded: false,
      chartOptions: {
        chart: {
          id: 'orders-chart',
        },
        colors: ['#008FFB', '#60D2B2', '#FEB019',
        ],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB',
            },
            labels: {
              style: {
                colors: '#008FFB',
              },
            },
            title: {
              text: 'Orders',
              style: {
                color: '#008FFB',
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          {
            seriesName: 'Users',
            opposite: true,

            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#60D2B2',
            },
            labels: {
              style: {
                colors: '#60D2B2',
              },
            },
            title: {
              text: 'Users',
              style: {
                color: '#60D2B2',
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          {
            seriesName: "Order's amount",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#FEB019',
            },
            labels: {
              style: {
                color: '#FEB019',
              },
            },
            title: {
              text: "Order's amount",
              style: {
                color: '#FEB019',
              },
            },
          },
        ],

        responsive: [{
          breakpoint: 480,
          chartOptions: {
            chart: {
              width: '100%',
            },
            sparkline: {
              enabled: false,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],

      },

      orderChartData: [{
        name: 'Orders',
        type: 'bar',
        data: [],
      },
      {
        name: 'Users',
        type: 'bar',

        data: [],
      },
      {
        name: "Order's amount",
        type: 'bar',
        data: [],
      }],
      userChartData: [

      ],
      orderChartStatusData: [],
      options: {
        series: [44, 55, 41, 17, 15],
        chart: {
          width: '30%',
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: true,
        },
        fill: {
          type: 'gradient',
        },
        labels: ['Accepted', 'In Progress', 'Canceled By Shop', 'Canceled By User', 'Out For Delivery', 'Delivered'],
        colors: ['#7FA5EB', '#ebb37f', '#FFAAB9', '#eb7f83', '#9FDFCD', '#60D2B2'],

        legend: {
          formatter(val, opts) {
            return `${val} - ${opts.w.globals.series[opts.seriesIndex]}`
          },
        },
        title: {
          text: 'Order Status',
        },
        responsive: [{
          breakpoint: 1281,
          options: {
            chart: {
              width: '100%',
            },
            sparkline: {
              enabled: false,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
      },
    }
  },
  computed: {

    ...mapGetters({ currentCountry: 'app/getCountry' }),

  },
  watch: {
    '$store.state.app.country': {
      immediate: true,
      handler() {
        this.getOrderChart()
        // make actions with newVal.page
      },
    },
  },
  mounted() {
    this.getOrderChart()
  },
  methods: {
    itemsInObjectToArray(...filteredElements) {
      const myArray = []
      filteredElements.forEach(el => {
        myArray.push(el)
      })
      return { myArray }
    },
    async getOrderChart() {
      await axios.get(`admin/charts?country_id=${this.currentCountry.id}`).then(res => {
        if (res.status === 200) {
          this.loaded = true
          this.orderChartData[0].data = res.data?.data.orders
          this.orderChartData[1].data = res.data?.data.users
          this.orderChartData[2].data = res.data?.data.orders_profit.map(x => parseInt(x, 10))
          this.orderChartStatusData = this.itemsInObjectToArray(

            res.data?.data.orders_with_status.accepted,
            res.data?.data.orders_with_status.in_progress,
            res.data?.data.orders_with_status.canceled_by_shop,
            res.data?.data.orders_with_status.canceled_by_user,
            res.data?.data.orders_with_status.out_for_delivery,
            res.data?.data.orders_with_status.delivered,

          )
        }
      })
    },
  },
}

</script>
<style scoped>
.orderCard{
  padding: 1rem;
    width: 100%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
  }
.card-body{
    display: flex;
    align-items: center;
    justify-content: center;
}
.conOFChart{
    width: 100%;
}
.conOFChartStatus{
    width: 100%;
}
/* @media screen and (min-width: 1850px){
  .conOFChart{
    width: 80%;
}
.conOFChartStatus{
    width: 75%;
}
} */

</style>
