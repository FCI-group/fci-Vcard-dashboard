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
      :view-content="false"
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
    </general-table>
  </div>
</template>

<script>
import GeneralTable from '@/components/general-table/GeneralTable.vue'

export default {
  components: { GeneralTable },
  data() {
    return {
      APIURL: 'employees',
      addType: 'Add Employee',
      addComponentName: 'add-employee',
      editComponent: 'edit-employee',
      viewContent: true,
      type: 'page',
      partners: [],
      filter: {},
      types: '',
      columns: [
        { key: 'id', sortable: true },
        { key: 'photo', label: 'photo' },
        { key: 'name', label: 'Employee' },
        { key: 'email', label: 'Email' },
        { key: 'job_title', label: 'Job title' },
        { key: 'mobile', label: 'mobile' },
        { key: 'address', label: 'Address' },
        { key: 'branch.name', label: 'Branch' },
        { key: 'employee_approval', label: 'Employee Approval' },
        { key: 'QRCode', label: 'QRCode' },

        { key: 'actions' },
      ],
    }
  },
  computed: {
    apiUrl() {
      let base = 'employees?'

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
  mounted() {},

  methods: {
    filterTypes(type) {
      const filteredType = this.status.filter(item => item.text !== type)
      this.types = filteredType
    },
  },
}
</script>

<style></style>
