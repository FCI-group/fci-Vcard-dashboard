<template>
  <b-col
    md="12"
  >
    <table
      id="itemList"
      class="table b-table table-striped table-bordered"
      :class="columns.length > 8 ? 'table-responsive' : ''"
    >
      <thead role="rowgroup">
        <tr role="row">
          <th
            v-for="(col, i) in columns"
            :key="i"
            role="columnheader"
            scope="row"
          >
            <div>{{ col }}</div>
          </th>
        </tr>
      </thead>
      <tbody role="rowgroup">
        <tr
          v-if="rows.length < 0"
          role="row"
          class="b-table-empty-row"
        >
          <td
            colspan="10"
            role="cell"
            class=""
          >
            <div
              role="alert"
              aria-live="polite"
            >
              <div class="text-center my-2">
                No matching records found
              </div>
            </div>
          </td>
        </tr>
        <tr
          v-for="(row, idx) in rows"
          :key="idx"
          role="row"
        >
          <td
            v-for="(col, index) in columns"
            :key="index"
            role="cell"
          >
            {{ row[col] }}
            <template v-if="col === 'actions'">
              <span class="mx-1">
                <feather-icon
                  icon="EditIcon"
                  @click="editToPage(row)"
                />
              </span>
              <span>
                <feather-icon icon="TrashIcon" />
              </span>
            </template>
            <template v-if="col === 'flag'">
              <img
                v-img
                :src="row[col].flag"
              >
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </b-col>
</template>

<script>
export default {
  name: 'TableBody',
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    editToPage(id) {
      this.$refs['my-modal'].show()
      // console.log(id)
    },
  },

}
</script>

<style>
/* table#itemList {
    display: block;
    table-layout: auto;
    width: 100%;
    overflow: scroll;
} */
</style>
