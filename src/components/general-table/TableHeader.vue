<template>
  <b-row class="mb-2">
    <b-col
      cols="12"
      md="6"
      class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
    >
      <b-form-input
        v-model="searchQuery"
        class="d-inline-block mr-1"
        placeholder="Search..."
      />
    </b-col>
    <b-col
      cols="12"
      md="6"
    >
      <div class="d-flex align-items-center justify-content-end">
        <b-button
          variant="primary"
        >
          <span class="text-nowrap">Add User</span>
        </b-button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'TableHeader',
  props: {
    searchQuery: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    searchTable() {
      this.$emit('searchTable', this.searchQuery)
    },
  },

}
</script>

<style>

</style>
