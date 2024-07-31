<template>
  <b-card>
    <b-row class="d-flex flex-column">
      <b-card-group>
        <b-row>
          <b-col
            md="9"
            class="d-flex flex-column"
          >
            <h1>
              <span style="color: #0564f2;"> Branch Name : </span>{{ DeviceDetails.branch.name }}
            </h1>
            <h1>
              <span style="color: #0564f2;"> Branch Country : </span>{{ DeviceDetails.branch.country }}
            </h1>
            <h1>
              <span style="color: #0564f2;"> Brand : </span>{{ DeviceDetails.brand }}
            </h1>
            <h1>
              <span style="color: #0564f2;"> getDeviceulftic Device Id : </span>{{ DeviceDetails.FCI_device_id }}
            </h1>
            <h1>
              <span style="color: #0564f2;"> Model Number : </span>{{ DeviceDetails.model_number }}
            </h1>
            <h1>
              <span style="color: #0564f2;"> Device Name : </span>{{ DeviceDetails.name }}
            </h1>

            <h1>
              <span style="color: #0564f2;"> Device Notes : </span>{{ DeviceDetails.notes }}
            </h1>

            <h1>
              <span style="color: #0564f2;"> Device Over Due : </span>{{ DeviceDetails.over_due }}
            </h1>

            <h1>
              <span style="color: #0564f2;"> Device Purchased Date: </span>{{ DeviceDetails.purchased_date }}
            </h1>

            <h1>
              <span style="color: #0564f2;"> Serial Number: </span>{{ DeviceDetails.serial_number }}
            </h1>
            <h1>
              <span style="color: #0564f2;"> Status: </span>{{ DeviceDetails.status }}
            </h1>

            <h1>
              <span style="color: #0564f2;"> Unique Id: </span>{{ DeviceDetails.unique_id }}
            </h1>

            <h1>
              <span style="color: #0564f2;"> Assigned Date: </span>{{ DeviceDetails.assigned_date }}
            </h1>

            <h1>
              <span style="color: #0564f2;"> Maintenance Date: </span>{{ DeviceDetails.maintenance_date }}
            </h1>
          </b-col>
          <b-col
            md="3"
            class="d-flex justify-content-end"
          >
            <b-img
              ref="previewEl"
              v-img
              rounded
              :src="DeviceDetails.image"
              width="400"
              height="400"
            /></b-col>
        </b-row>
      </b-card-group>

      <b-card-group
        style="border: 2px solid #0564f2; padding: 10px 10px; width: fit-content; "
      >
        <b-row>
          <b-col
            md="6"
            class="d-flex flex-column"
          >
            <h1>Employee Details</h1>

            <h2>
              <span style="color: #0564f2;"> Employee Name : </span>{{ DeviceDetails.employee.name }}
            </h2>
            <h2>
              <span style="color: #0564f2;"> Employee job_title : </span>{{ DeviceDetails.employee.job_title }}
            </h2>
            <h2>
              <span style="color: #0564f2;"> Employee mobile : </span>{{ DeviceDetails.employee.mobile }}
            </h2>
            <h2>
              <span style="color: #0564f2;"> Employee Name : </span>{{ DeviceDetails.employee.name }}
            </h2>
            <h2>
              <span style="color: #0564f2;"> Employee email : </span>{{ DeviceDetails.employee.email }}
            </h2>
            <h2>
              <span style="color: #0564f2;"> Employee linked_in : </span>{{ DeviceDetails.employee.linked_in }}
            </h2>
            <h2>
              <span style="color: #0564f2;"> Employee website_company : </span>{{ DeviceDetails.employee.website_company }}
            </h2>
            <h2>
              <span style="color: #0564f2;"> Employee company_brief : </span>{{ DeviceDetails.employee.company_brief }}
            </h2>
            <h2>
              <span style="color: #0564f2;"> Employee whats_app : </span>{{ DeviceDetails.employee.whats_app }}
            </h2>
          </b-col>
          <b-col
            md="6"
            class="d-flex justify-content-end"
          >
            <b-img
              ref="previewEl"
              v-img
              rounded
              :src="DeviceDetails.employee.photo"
              width="500"
              height="500"
            /></b-col>
        </b-row>
      </b-card-group>

      <b-row>
        <b-col md="6">
          <b-card-group
            style="border: 2px solid #0564f2; padding: 10px 10px; width: fit-content; "
          >
            <b-row>
              <b-col
                md="12"
                class="d-flex flex-column"
              >
                <h1>Device History</h1>
                <b-card
                  v-for="item in DeviceDetails.history"
                  :key="item.id"
                >
                  <b-card-header style="font-size: x-large;">
                    Name: {{ item.employee_name }}
                  </b-card-header>
                  <b-card-body>
                    <b-row>
                      <b-col md="6">
                        <p>
                          <strong>Employee Email:</strong>
                          {{ item.employee_email }}
                        </p>
                      </b-col>
                      <b-col md="6">
                        <p><strong>from:</strong> {{ item.from }}</p>
                        <p><strong>to:</strong> {{ item.to }}</p>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </b-card-group>
        </b-col>
        <b-col md="6">
          <b-card-group
            style="border: 2px solid #0564f2; padding: 10px 10px; width: fit-content; "
          >
            <b-row>
              <b-col
                md="12"
                class="d-flex flex-column"
              >
                <h1>Device Maintenance</h1>
                <b-card
                  v-for="item in DeviceDetails.maintenance"
                  :key="item.id"
                >
                  <b-card-header style="font-size: x-large;">
                    Maintained By: {{ item.maintained_by }}
                  </b-card-header>
                  <b-card-body>
                    <b-row>
                      <b-col md="6">
                        <p><strong>note:</strong> {{ item.note }}</p>
                      </b-col>
                      <b-col md="6">
                        <p><strong>date:</strong> {{ item.date }}</p>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </b-card-group>
        </b-col>
      </b-row>
    </b-row>
  </b-card>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      DeviceDetails: [],
    }
  },
  mounted() {
    this.getDevice()
  },
  methods: {
    getDevice() {
      this.loadtable = true
      axios
        .get(`/device/${this.$route.params.id}`)
        .then(res => {
          this.DeviceDetails = res.data.data
        })
        .finally(() => {
          this.loadtable = false
        })
    },
  },
}
</script>
