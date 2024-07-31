import {
  ref,
} from '@vue/composition-api'

export default function table() {
  const rows = ref([])
  const columns = ref([])
  const totalRows = ref(null)
  const isBusy = ref(false)
  const currentPage = ref(1)
  const perPage = ref(10)
  const searchQuery = ref('')
  const moduleStatus = ref(false)

  return {
    rows,
    columns,
    totalRows,
    isBusy,
    currentPage,
    perPage,
    searchQuery,
    moduleStatus,
  }
}
