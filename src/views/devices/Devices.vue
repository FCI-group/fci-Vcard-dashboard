<template>
  <div>
    <general-table
      ref="employeesTable"
      :api-url="apiUrl"
      :add-component-name="addComponentName"
      :edit-component="editComponent"
      :delete-content="true"
      :block-content="false"
      :edit-content="true"
      :view-content="true"
      :add-type="addType"
      :columns="columns"
      :type="type"
      :selectable="false"
    >
      <template #cell(photo)="data">
        <img
          v-if="data.item.photo"
          :src="data.item.photo"
          width="100"
        >
      </template>

      <template #cell(id)="data">
        <b-media vertical-align="center">
          <b-link
            class="font-weight-bold d-block text-nowrap"
            :style="
              `background-color: ${
                data.item.status === 'offline' ? 'red' : ''
              }; color: ${
                data.item.status === 'offline' ? 'white' : ''
              }; padding: ${data.item.status === 'offline' ? '10px' : ''};`
            "
          >
            {{ data.item.id }}
          </b-link>
        </b-media>
      </template>

      <template #cell(employee)="data">
        <span
          v-if="data.item.employee"
          class="font-weight-bold d-block text-nowrap"
          :style="
            `background-color: ${
              data.item.status === 'offline' ? 'red' : ''
            }; color: ${
              data.item.status === 'offline' ? 'white' : ''
            }; padding: ${data.item.status === 'offline' ? '10px' : ''};`
          "
        >{{ data.item.employee.name }}</span>
      </template>
      <template #cell(employee_email)="data">
        <span
          v-if="data.item.employee"
          class="font-weight-bold d-block text-nowrap"
          :style="
            `background-color: ${
              data.item.status === 'offline' ? 'red' : ''
            }; color: ${
              data.item.status === 'offline' ? 'white' : ''
            }; padding: ${data.item.status === 'offline' ? '10px' : ''};`
          "
        >{{ data.item.employee.email }}</span>
      </template>
      <template #cell(employeeJobTitle)="data">
        <span
          v-if="data.item.employee"
          class="font-weight-bold d-block text-nowrap"
          :style="
            `background-color: ${
              data.item.status === 'offline' ? 'red' : ''
            }; color: ${
              data.item.status === 'offline' ? 'white' : ''
            }; padding: ${data.item.status === 'offline' ? '10px' : ''};`
          "
        >{{ data.item.employee.job_title }}</span>
      </template>
      <template #cell(employeeMobile)="data">
        <span
          v-if="data.item.employee"
          class="font-weight-bold d-block text-nowrap"
          :style="
            `background-color: ${
              data.item.status === 'offline' ? 'red' : ''
            }; color: ${
              data.item.status === 'offline' ? 'white' : ''
            }; padding: ${data.item.status === 'offline' ? '10px' : ''};`
          "
        >{{ data.item.employee.mobile }}</span>
      </template>
      <template #cell(branch)="data">
        <span
          v-if="data.item.branch"
          class="font-weight-bold d-block text-nowrap"
          :style="
            `background-color: ${
              data.item.status === 'offline' ? 'red' : ''
            }; color: ${
              data.item.status === 'offline' ? 'white' : ''
            }; padding: ${data.item.status === 'offline' ? '10px' : ''};`
          "
        >{{ data.item.branch.name }}</span>
      </template>
      <template #cell(add_maintenance)="data">
        <b-media vertical-align="center">
          <span
            :style="
              `background-color: ${
                data.item.status === 'offline' ? 'red' : ''
              }; color: ${
                data.item.status === 'offline' ? 'white' : ''
              }; margin: ${data.item.status === 'offline' ? '20px 0px' : ''};`
            "
          >
            <b-btn
              style="font-size: 11px !important;"
              @click="
                $router.push({
                  name: 'add-maintenance',
                  params: { id: data.item.id }
                })
              "
            >add maintenance</b-btn></span>
        </b-media>
      </template>
    </general-table>
  </div>
</template>

<script>
// import axios from 'axios'
import GeneralTable from '@/components/general-table/GeneralTable.vue'

export default {
  components: { GeneralTable },
  data() {
    return {
      APIURL: 'device',
      addType: 'Add Device',
      addComponentName: 'add-device',
      editComponent: 'edit-device',
      viewContent: true,
      type: 'page',
      partners: [],
      filter: {},
      types: '',
      columns: [
        { key: 'id', sortable: true },
        { key: 'name', label: 'Name' },
        { key: 'FCI_device_id', label: 'FCI Device Id' },
        { key: 'brand', label: 'Brand' },
        { key: 'model_number', label: 'Model Number' },
        { key: 'serial_number', label: 'Serial Number' },
        { key: 'assigned_date', label: 'Assigned Date' },
        { key: 'purchased_date', label: 'Purchased Date' },
        { key: 'notes', label: 'Notes' },
        { key: 'employee', label: 'Custodian Name' },
        { key: 'employee_email', label: 'Custodian EMAIL' },
        { key: 'employeeJobTitle', label: 'Custodian JOB TITLE' },
        { key: 'employeeMobile', label: 'Custodian MOBILE' },
        { key: 'status', label: 'status' },
        { key: 'QRCodeDevice', label: 'QR Device' },
        { key: 'branch', label: 'Branch' },
        { key: 'approved', label: 'Device Approval' },
        { key: 'actions' },
        { key: 'add_maintenance', label: 'ADD Maintenance' },
      ],
    }
  },
  computed: {
    apiUrl() {
      let base = 'device?'

      if (!Object.values(this.filter).length) {
        return base.slice(0, -1)
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(this.filter)) {
        if (key && value) {
          base += `${key}=${value}&`
        }
      }
      return base.slice(0, -1)
    },
  },
  methods: {
    rowClass(item) {
      if (!item) return ''
      return item.status === 'offline' ? 'table-row-offline' : ''
    },
    filterTypes(type) {
      const filteredType = this.status.filter(item => item.text !== type)
      this.types = filteredType
    },
  },
}
</script>
