<template>
  <div>
    <general-table
      :api-url="APIURL"
      :add-component-name="addComponentName"
      :edit-component="editComponent"
      :delete-content="false"
      :block-content="false"
      :edit-content="true"
      :view-content="false"
      :add-type="addType"
      :columns="columns"
      :type="type"
      :selectable="false"
    >
      <template #cell(image)="data">

        <img
          v-if="data.item.image"
          :src="data.item.image.url"
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
      APIURL: 'companies',
      addType: 'Add FCI',
      addComponentName: 'add-FCI',
      editComponent: 'edit-FCI',
      viewContent: true,
      type: 'page',
      columns: [
        { key: 'id', sortable: true },
        { key: 'image', label: 'Image' },
        { key: 'name', label: 'FCI' },
        { key: 'email', label: 'Email' },
        { key: 'address', label: 'Address' },
        { key: 'description', label: 'Description' },
        { key: 'number_of_employees', label: 'Number Of Employees' },
        { key: 'actions' },
      ],
    }
  },
}
</script>

<style>

</style>
