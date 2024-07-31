<template>
  <b-pagination
    :value="1"
    :total-rows="totalRows"
    :per-page="perPage"
    align="center"
    first-number
    last-number
    class="mb-0 mt-1"
    prev-class="prev-item"
    next-class="next-item"
    aria-controls="my-table"
    @input="updateCurrentPage($event)"
  >
    <template #prev-text>
      <feather-icon
        icon="ChevronLeftIcon"
        size="18"
      />
    </template>
    <template #next-text>
      <feather-icon
        icon="ChevronRightIcon"
        size="18"
      />
    </template>
  </b-pagination>
</template>
<script>

export default {
  props: {
    totalRows: { type: Number, default: 1 },
    perPage: { type: Number, default: 10 },
  },
  methods: {
    updateCurrentPage(page) {
      this.$emit('update:current-page', page)
    },
  },
}
</script>
<style lang='scss' scoped></style>
