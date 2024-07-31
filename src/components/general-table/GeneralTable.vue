<template>
  <div>
    <slot :status="moduleStatus" />
    <b-card v-if="!moduleStatus">
      <b-row class="mb-2 justify-content-end">
        <bulk-actions
          v-if="selectable"
          ref="actions"
          :api-url="apiUrl"
          :add-type="addType"
          :bulk-delete="bulkDelete"
          :go-to-page-or-open-modal="goToPageOrOpenModal"
          :guard="guard"
          :selected="selected"
        >
          <template v-slot:addbtn>
            <b-button
              v-if="addType.length"
              variant="primary"
              @click="goToPageOrOpenModal()"
            >
              <span class="text-nowrap"> {{ addType }} </span>
            </b-button>
          </template>
        </bulk-actions>

        <template v-if="exportData">
          <vue-json-to-csv
            :json-data="exportedData"
            :labels="exportLabels"
          >
            <b-button
              v-if="!loadExport"
              variant="secondary"
            >
              <span class="text-nowrap">Export </span>
            </b-button>
          </vue-json-to-csv>

          <b-button
            v-if="loadExport"
            variant="secondary"
            disabled
            class="mr-1"
          >
            <b-spinner
              small
              type="grow"
            />
            Loading...
          </b-button>
        </template>

        <b-button
          v-if="!selectable && addType.length"
          ref="actions"
          variant="primary"
          class=" mx-1"
          @click="goToPageOrOpenModal()"
        >
          <span class="text-nowrap"> {{ addType }} </span>
        </b-button>
      </b-row>
      <b-row class="mb-2">
        <b-col
          v-if="searchBox"
          cols="12"
          md="3"
          class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
        >
          <b-form-input
            v-model="searchQuery"
            v-debounce:500ms="searchTable"
            :disabled="searchType && selectedSearchType == null"
            class="d-inline-block"
            placeholder="Search..."
          />
        </b-col>
        <b-col
          v-if="searchCode"
          cols="12"
          md="3"
          class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
        >
          <b-form-input
            v-model="searchCodeQuery"
            class="d-inline-block"
            placeholder="Search by code"
            @input="searchTable"
          />
        </b-col>
        <b-col
          v-if="searchType"
          cols="12"
          md="3"
        >
          <b-form-group
            v-slot="{ ariaDescribedby }"
            label="Search By"
          >
            <b-form-radio-group
              id="radio-group-2"
              v-model="selectedSearchType"
              :aria-describedby="ariaDescribedby"
              name="radio-sub-component"
            >
              <b-form-radio value="name">
                Name
              </b-form-radio>
              <b-form-radio value="mobile">
                Mobile
              </b-form-radio>
              <b-form-radio value="id">
                User Id
              </b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <!-- <b-row class="mb-2">
        <slot name="filterUsers" />
        <slot name="filterCoupon" />
        <slot name="filterGovernments" />
        <slot name="filterZones" />
        <slot name="filterAds" />
      </b-row> -->
      <b-row>
        <b-col md="12">
          <div
            v-if="dataLoad"
            class=" text-center my-2"
          >
            <b-spinner
              type="grow"
              label="Loading..."
            />
          </div>
          <b-table
            v-else
            ref="productsTable"
            :key="tableDataKey"
            :items="rows"
            :fields="columns"
            :current-page="currentPage"
            :per-page="perPage"
            aria-busy="true"
            class="position-relative"
            responsive
            show-empty
            bordered
            primary-key="id"
            :selectable="selectable"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :select-mode="selectMode"
            :no-local-sorting="true"
            @row-selected="onRowSelected"
          >
            <!-- devices table -->
            <template #cell(approved)="data">
              <slot
                name="actions"
                v-bind="data"
              >
                <div
                  style="text-align: center;"
                  :style="
                    `background-color: ${
                      data.item.status === 'offline' ? 'red' : ''
                    }; color: ${
                      data.item.status === 'offline' ? 'white' : ''
                    }; padding: ${
                      data.item.status === 'offline' ? '5px 0px' : ''
                    };`
                  "
                >
                  <b-button
                    v-if="data.item.approved === 0"
                    variant="primary"
                    style="font-size: 10px;"
                    @click="ApprovalDevies(data.item.id)"
                  >
                    Need Approval</b-button>
                  <span
                    v-if="data.item.approved === 1"
                    title="Success"
                    style="color: blue; "
                  >
                    <feather-icon
                      icon="CheckCircleIcon"
                      size="30"
                      style="cursor: pointer;"
                      @click="ApprovalDevies(data.item.id)"
                    />
                  </span>
                </div>
              </slot>
            </template>

            <template v-slot:cell(QRCodeDevice)="value">
              <b-media vertical-align="center">
                <QRCodeDevice
                  :style="
                    `background-color: ${
                      value.item.status === 'offline' ? 'red' : ''
                    }; color: ${
                      value.item.status === 'offline' ? 'white' : ''
                    }; margin: ${
                      value.item.status === 'offline' ? '10px 0px' : ''
                    };`
                  "
                  :item-id="value.item.unique_id"
                  :item-name="value.item.name"
                  :item-serial-number="value.item.FCI_device_id"
                />
              </b-media>
            </template>
            <template #cell(name)="data">
              <b-media vertical-align="center">
                <b-link
                  class="font-weight-bold d-block text-nowrap"
                  :style="
                    `background-color: ${
                      data.item.status === 'offline' ? 'red' : ''
                    }; color: ${
                      data.item.status === 'offline' ? 'white' : ''
                    }; padding: ${
                      data.item.status === 'offline' ? '10px' : ''
                    };`
                  "
                >
                  {{ data.item.name }}
                </b-link>
              </b-media>
            </template>

            <template #cell(brand)="data">
              <b-media vertical-align="center">
                <span
                  class="font-weight-bold d-block text-nowrap"
                  :style="
                    `background-color: ${
                      data.item.status === 'offline' ? 'red' : ''
                    }; color: ${
                      data.item.status === 'offline' ? 'white' : ''
                    }; padding: ${
                      data.item.status === 'offline' ? '10px' : ''
                    };`
                  "
                >{{ data.item.brand }}</span>
              </b-media>
            </template>

            <template #cell(FCI_device_id)="data">
              <b-media vertical-align="center">
                <span
                  class="font-weight-bold d-block text-nowrap"
                  :style="
                    `background-color: ${
                      data.item.status === 'offline' ? 'red' : ''
                    }; color: ${
                      data.item.status === 'offline' ? 'white' : ''
                    }; padding: ${
                      data.item.status === 'offline' ? '10px' : ''
                    };`
                  "
                >{{ data.item.FCI_device_id }}</span>
              </b-media>
            </template>
            <template #cell(status)="data">
              <b-media vertical-align="center">
                <span
                  class="font-weight-bold d-block text-nowrap"
                  :style="
                    `background-color: ${
                      data.item.status === 'offline' ? 'red' : ''
                    }; color: ${
                      data.item.status === 'offline' ? 'white' : ''
                    }; padding: ${
                      data.item.status === 'offline' ? '10px' : ''
                    };`
                  "
                >{{ data.item.status }}</span>
              </b-media>
            </template>

            <template #cell(model_number)="data">
              <span
                class="font-weight-bold d-block text-nowrap"
                :style="
                  `background-color: ${
                    data.item.status === 'offline' ? 'red' : ''
                  }; color: ${
                    data.item.status === 'offline' ? 'white' : ''
                  }; padding: ${data.item.status === 'offline' ? '10px' : ''};`
                "
              >{{ data.item.model_number }}</span>
            </template>
            <template #cell(serial_number)="data">
              <span
                class="font-weight-bold d-block text-nowrap"
                :style="
                  `background-color: ${
                    data.item.status === 'offline' ? 'red' : ''
                  }; color: ${
                    data.item.status === 'offline' ? 'white' : ''
                  }; padding: ${data.item.status === 'offline' ? '10px' : ''};`
                "
              >{{ data.item.serial_number }}</span>
            </template>
            <template #cell(purchased_date)="data">
              <span
                class="font-weight-bold d-block text-nowrap"
                :style="
                  `background-color: ${
                    data.item.status === 'offline' ? 'red' : ''
                  }; color: ${
                    data.item.status === 'offline' ? 'white' : ''
                  }; padding: ${data.item.status === 'offline' ? '10px' : ''};`
                "
              >{{ data.item.purchased_date }}</span>
            </template>
            <template #cell(assigned_date)="data">
              <span
                class="font-weight-bold d-block text-nowrap"
                :style="
                  `background-color: ${
                    data.item.status === 'offline' ? 'red' : ''
                  }; color: ${
                    data.item.status === 'offline' ? 'white' : ''
                  }; padding: ${data.item.status === 'offline' ? '10px' : ''};`
                "
              >{{ data.item.assigned_date }}</span>
            </template>
            <template #cell(notes)="data">
              <span
                class="font-weight-bold d-block text-nowrap"
                :style="
                  `background-color: ${
                    data.item.status === 'offline' ? 'red' : ''
                  }; color: ${
                    data.item.status === 'offline' ? 'white' : ''
                  }; padding: ${data.item.status === 'offline' ? '10px' : ''};`
                "
              >{{ data.item.notes }}</span>
            </template>
            <template #cell(actions)="data">
              <slot
                name="actions"
                v-bind="data"
              >
                <div
                  class="padd"
                  :style="
                    `background-color: ${
                      data.item.status === 'offline' ? 'red' : ''
                    }; color: ${
                      data.item.status === 'offline' ? 'white' : ''
                    }; padding: ${
                      data.item.status === 'offline' ? '10px' : ''
                    };`
                  "
                >
                  <span
                    v-if="viewContent"
                    title="View"
                  >
                    <feather-icon
                      icon="EyeIcon"
                      class="cursor-pointer"
                      @click="
                        $router.push({
                          name: 'devices-details',
                          params: { id: data.item.id }
                        })
                      "
                    />
                  </span>
                  <span
                    v-if="editContent"
                    title="Edit"
                  >
                    <feather-icon
                      icon="EditIcon"
                      class="cursor-pointer"
                      @click="editToPage(data.item.id)"
                    />
                  </span>
                  <span
                    v-if="blockContent && data.item.status != 'Blocked'"
                    title="Block"
                  >
                    <feather-icon
                      icon="UserMinusIcon"
                      class="cursor-pointer"
                      @click="viewmodel(data.item.id, 1)"
                    />
                  </span>
                  <span
                    v-if="data.item.status == 'Blocked'"
                    title="UnBlock"
                  >
                    <feather-icon
                      icon="UserPlusIcon"
                      class="cursor-pointer"
                      @click="viewmodel(data.item.id, 0)"
                    />
                  </span>
                  <span
                    v-if="deleteContent"
                    title="Delete"
                  >
                    <feather-icon
                      id="popover-button-1"
                      icon="TrashIcon"
                      class="cursor-pointer"
                      @click="deleteRow(data.item.id)"
                    />
                  </span>
                </div>
              </slot>
            </template>

            <!-- end devices table -->

            <!-- employees table -->
            <template v-slot:cell(QRCode)="value">
              <QrCode
                :item-id="value.item.token"
                :item-name="value.item.name"
              />
            </template>

            <template v-slot:cell(created_at)="value">
              {{ value.item.created_at | formatDate }}
            </template>
            <template v-slot:cell(avatar_url)="value">
              <b-avatar
                size="50"
                :src="value.item.avatar_url"
                class="mb-2"
              />
            </template>
            <template v-slot:cell(image)="value">
              <b-img
                v-img
                width="70"
                :src="value.item.image"
              /></template>

            <template v-slot:cell(flag_image)="value">
              <b-img
                v-img
                width="70"
                :src="value.item.flag_image"
              /></template>
            <template v-slot:cell(product_images)="value">
              <b-img
                v-img
                width="70"
                :src="value.item.product_images"
              /></template>

            <template
              v-for="(_, slotName) of $scopedSlots"
              v-slot:[slotName]="scope"
            >
              <slot
                :name="slotName"
                v-bind="scope"
              />
            </template>
            <!-- end employees table -->

            <!-- eslint-disable-next-line vue/no-unused-vars -->
            <template v-slot:head(select)="data">
              <span v-if="selected.length < 1"> {{ data.field.label }} </span>
              <b-form-checkbox
                v-else
                class="custom-control-primary"
                @change="selectAllRows($event)"
              />
            </template>
            <template #cell(select)="{ rowSelected }">
              <template v-if="rowSelected">
                <span aria-hidden="true">&check;</span>
                <span class="sr-only">Selected</span>
              </template>
              <template v-else>
                <b-form-checkbox
                  class="custom-control-primary"
                  disabled
                />
              </template>
            </template>

            <template #cell(activation_at)="data">
              {{ data.item.activation_at.slice(0, 10) }}
            </template>

            <!-- <template #cell(is_active)="data">
              <b-badge
                class="change-status"
                :variant="data.item.is_active === true ? 'success' : 'danger'"
                @click="changeSchangeActivetatus(data.item)"
              >
                {{ resolveActiveUser(data.item.is_active) }}
              </b-badge>
            </template> -->
            <!-- <template #cell(active)="data">
              <b-badge
                class="change-status"
                :variant="data.item.active == 0 ? 'success' : 'danger'"
                @click="changeStatus(data.item)"
              >
                {{ resolveActiveUser(data.item.active) }}
              </b-badge>
            </template> -->
            <!-- <template #cell(status)="data">
              <b-badge :variant="data.item.status == 'true' ? 'success' : 'danger'">
                {{ resolveActiveOrFalse(data.item.status) }}
              </b-badge>
            </template> -->
            <template #cell(employee_approval)="data">
              <slot
                name="actions"
                v-bind="data"
              >
                <div style="text-align: center;">
                  <b-button
                    v-if="data.item.approved === 0"
                    variant="primary"
                    style="font-size: 10px;"
                    @click="ApprovalRow(data.item.id)"
                  >
                    Need Approval</b-button>
                  <span
                    v-if="data.item.approved === 1"
                    title="Success"
                    style="color: blue; "
                  >
                    <feather-icon
                      icon="CheckCircleIcon"
                      size="30"
                      style="cursor: pointer;"
                      @click="ApprovalRow(data.item.id)"
                    />
                  </span>
                </div>
              </slot>
            </template>
          </b-table>
        </b-col>
      </b-row>
      <div class="mx-2 mb-2">
        <b-row>
          <!-- <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
              @input="getAllDataPerPage"
            />
            <label>entries</label>
          </b-col> -->
          <b-col
            cols="12"
            sm="12"
            class="d-flex align-items-center justify-content-between "
          >
            <div>
              Results: <span class="font-weight-bold">{{ totalRows }}</span>
            </div>
            <!-- pagination -->
            <b-pagination
              :value="page"
              :total-rows="totalRows"
              :per-page="perPage"
              align="end"
              first-number
              last-number
              :total-visible="7"
              class="mb-0 mt-1"
              prev-class="prev-item"
              next-class="next-item"
              aria-controls="my-table"
              @input="getAllData($event)"
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
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
/* eslint-disable camelcase */

import axios from 'axios'
import { avatarText } from '@core/utils/filter'
import useAppConfig from '@core/app-config/useAppConfig'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { mapGetters } from 'vuex'
import handleFormData from '@/global-compositions/handleFormData'
import BulkActions from './BulkActions.vue'
import table from './table'
import QrCode from './QrCode.vue'
import QRCodeDevice from './QRCodeDevices.vue'
// import router from '@/router'

export default {
  components: {
    BulkActions,
    QrCode,
    QRCodeDevice,
  },

  props: {
    apiUrl: {
      type: String,
      default: () => '',
    },
    addType: {
      type: String,
      default: () => '',
    },
    addComponentName: {
      type: String,
      default: () => '',
    },
    editComponent: {
      type: String,
      default: () => '',
    },
    viwComponent: {
      type: String,
      default: () => '',
    },
    type: {
      type: String,
      default: () => '',
    },
    typeModel: {
      type: String,
      default: () => '',
    },
    columns: {
      type: Array,
      default: () => [],
    },
    viewContent: {
      type: Boolean,
      default: () => true,
    },
    exportData: {
      type: Boolean,
      default: () => false,
    },
    editContent: {
      type: Boolean,
      default: () => true,
    },
    deleteContent: {
      type: Boolean,
      default: () => true,
    },
    blockContent: {
      type: Boolean,
      default: () => true,
    },

    searchBox: {
      type: Boolean,
      default: () => true,
    },

    searchType: {
      type: Boolean,
      default: () => false,
    },
    searchCode: {
      type: Boolean,
      default: () => false,
    },
    selectable: {
      type: Boolean,
      default: () => false,
    },
    guard: {
      type: String,
      default: () => '',
    },
    urlType: {
      type: String,
      default: () => '',
    },
    role: {
      type: [String, Number],
      default: () => '',
    },
    exportTable: {
      type: Boolean,
      default: () => true,
    },
  },

  data() {
    return {
      rows: [],
      totalRows: null,
      isBusy: false,
      selectedSearchType: this.$route.query.type,
      searchCodeQuery: '',
      currentPage: 1,
      perPage: 15,
      searchQuery: this.$route.query.search,
      exportedData: [],
      popoverShow: false,
      loader: false,
      currentTime: '',
      showEmpty: 'loading...',
      modes: ['multi', 'single', 'range'],
      selectMode: 'multi',
      selected: [],
      page: 1,
      sortBy: '',
      dataKey: '',
      sortDesc: '',
      loadExport: false,
      dataLoad: 'false',
      tableDataKey: 0,
    }
  },
  computed: {
    ...mapGetters({ currentCountry: 'app/getCountry' }),
    exportLabels() {
      if (this.apiUrl.includes('users')) {
        return {
          name: { title: 'Name' },
          email: { title: 'Email' },
          mobile: { title: 'Mobile' },
          country_name: { title: 'Country' },
          is_verified: { title: 'Verified' },
          status: { title: 'Status' },
          created_at: { title: 'Created At' },
        }
      }
      return {
        user_name: { title: 'Name' },
        user_mobile: { title: 'Mobile' },
        status: { title: 'Status' },
        total: { title: 'Total' },
        date: { title: 'Created At' },
      }
    },
  },
  setup() {
    const { moduleStatus } = table()
    const resolveActiveUser = role => {
      if (role === true) return 'Active'

      return 'Not Active'
    }
    const { formData, setFormData } = handleFormData()
    const { skin } = useAppConfig()
    const resolveActive = role => {
      if (role === '1') return 'Active'

      return 'Not Active'
    }
    const resolveJobStatus = role => {
      if (role === 0) return 'Admin'
      if (role === 1) return 'Merchant'

      return 'Customer'
    }

    const resolveActiveOrFalse = role => {
      // eslint-disable-next-line eqeqeq
      if (role == 'true') return 'Active'

      return 'Not Active'
    }

    const perPageOptions = [10, 25, 50, 100]

    return {
      resolveActiveUser,
      resolveActive,
      resolveActiveOrFalse,
      resolveJobStatus,
      skin,
      formData,
      setFormData,
      avatarText,
      perPageOptions,
      moduleStatus,
    }
  },
  watch: {
    '$store.state.app.country.id': {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (oldVal !== undefined) {
          this.getAllData(this.$route.query?.page)
        }
      },
    },
  },
  mounted() {
    this.getAllData(this.$route.query?.page)
    // this.getRouting()
    this.getCurrentDateTime()
  },
  methods: {
    exportToPDF() {
      const self = this
      this.loadExport = true
      const promis = axios.get(this.apiUrl, {
        params: { limit: self.perPage, export: 'pdf' },
        responseType: 'arraybuffer',
      })
      return promis
        .then(res => {
          if (res.status === 200) {
            const blob = new Blob([res.data], { type: 'application/pdf' })
            const link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = 'exported.pdf'
            link.click()
          }
        })
        .finally(() => {
          this.loadExport = false
        })
    },
    // exportToCSV() {
    //   this.loadExport = true
    //   const self = this
    //   const promis = axios.get(this.apiUrl, { params: { limit: self.perPage, export: 'csv' }, responseType: 'arraybuffer' })
    //   return promis.then(res => {
    //     if (res.status === 200) {
    //       const blob = new Blob([res.data], { type: 'application/csv' })
    //       const link = document.createElement('a')
    //       link.href = window.URL.createObjectURL(blob)
    //       link.download = 'exported.csv'
    //       link.click()
    //     }
    //   }).finally(() => {
    //     this.loadExport = false
    //   })
    // },
    onRowSelected(items) {
      const rows = []
      // eslint-disable-next-line array-callback-return
      items.map(item => {
        rows.push(item.id)
      })
      this.selected = rows
    },
    selectAllRows(rows) {
      if (rows) {
        this.$refs.productsTable.selectAllRows()
      } else {
        this.$refs.productsTable.clearSelected()
      }
    },
    onClose() {
      this.popoverShow = false
    },
    showPopover() {
      this.popoverShow = true
    },
    changeStatus(data) {
      this.$swal({
        title: 'Are you sure that you want to change status?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Change it!',
      }).then(result => {
        if (result.isConfirmed) {
          if (data.active === false) {
            this.setFormData(data)
            this.formData.append('activation_at', this.currentTime)
            this.formData.append('_method', 'PUT')
            axios.post(`${this.apiUrl}/${data.id}`, this.formData).then(res => {
              if (res.status === 200) {
                this.$swal('Changed!', 'Changed Successfully.', 'success')
                this.getAllData()
              }
            })
          } else {
            this.setFormData(data)
            this.formData.append('activation_at', '')
            this.formData.append('_method', 'PUT')
            axios.post(`${this.apiUrl}/${data.id}`, this.formData).then(res => {
              if (res.status === 200) {
                this.$swal('Changed!', 'Changed Successfully.', 'success')
                this.getAllData()
              }
            })
          }
        }
      })
    },
    changeSchangeActivetatus(data) {
      this.$swal({
        title: 'Are you sure that you want to change status?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Change it!',
      }).then(result => {
        if (result.isConfirmed) {
          if (data.is_active === false) {
            this.setFormData(data)
            this.formData.append('is_active', 1)
            if (data.expire_at) {
              this.formData.append('expire_at', data.expire_at.slice(0, 10))
            }
            this.formData.append('_method', 'PUT')
            axios.post(`${this.apiUrl}/${data.id}`, this.formData).then(res => {
              if (res.status === 200) {
                this.$swal('Changed!', 'Changed Successfully.', 'success')
                this.getAllData()
              }
            })
          } else {
            this.setFormData(data)
            this.formData.append('is_active', 0)
            if (data.expire_at) {
              this.formData.append('expire_at', data.expire_at.slice(0, 10))
            }
            this.formData.append('_method', 'PUT')
            axios.post(`${this.apiUrl}/${data.id}`, this.formData).then(res => {
              if (res.status === 200) {
                this.$swal('Changed!', 'Changed Successfully.', 'success')
                this.getAllData()
              }
            })
          }
        }
      })
    },
    editToPage(id) {
      if (this.type === 'page') {
        this.$router.push({ name: this.editComponent, params: { id } })
      } else {
        this.$parent.$refs.genmodal.show(id)
        this.$store.commit('generalIds/SET_ID', id)
      }
    },
    viewmodel(id, isBlocked) {
      if (isBlocked === 1) {
        this.$parent.$refs['block-modal'].show(id)
      } else {
        this.$parent.$refs['unblock-modal'].show(id)
      }
      this.$store.commit('generalIds/SET_ID', id)
    },
    viewPage(data) {
      if (this.viwComponent) {
        this.$router.push({ name: this.viwComponent, params: { id: data.id } })
        this.$store.commit('generalIds/SET_ID', data.id)
      } else {
        this.$parent.$refs['view-modal'].show()
        this.$store.commit('generalIds/SET_ID', data.id)
      }
    },
    goToPageOrOpenModal() {
      if (this.type === 'page') {
        this.$router.push({ name: this.addComponentName })
      } else {
        this.$parent.$refs.genmodal.show()
      }
    },
    getAllDataToExport() {
      const params = {
        search: this.searchQuery || this.$route.query.search,
        country_id: this.currentCountry.id,
        type:
          this.searchType === true
          && (this.searchQuery !== '' || this.$route.query.search !== '')
            ? this.$route.query.type
            : null,
      }
      Object.keys(params).forEach(
        k => !params[k] && params[k] !== undefined && delete params[k],
      )

      const promis = axios.get(this.apiUrl, {
        params,
      })
      return promis
        .then(res => {
          if (res.status === 200) {
            const items = res.data?.data[Object.keys(res.data?.data)[0]]
            this.exportedData = items
            // this.$refs.productsTable.refresh()
            // this.getRouting()
          }
        })
        .catch(error => {
          if (error.response.status === 500) {
            this.$toast({
              component: ToastificationContent,
              props: {
                title: 'Server Error',
                icon: 'BellIcon',
                variant: 'danger',
              },
            })
          }
        })
        .finally(() => {
          this.loader = false
        })
    },
    getAllData(page) {
      this.dataLoad = true
      let skip = 0
      if (page !== 1 && page !== undefined) {
        skip = page * 10 - 10
      } else {
        skip = 0
      }
      let params
      if (this.apiUrl.includes('users')) {
        params = {
          skip,
          search: this.searchQuery || this.$route.query.search,
          type:
            this.searchType === true
            && (this.searchQuery !== '' || this.$route.query.search !== '')
              ? this.$route.query.type
              : null,
        }
      } else {
        params = {
          skip,
          search: this.searchQuery || this.$route.query.search,
        }
      }

      const promis = axios.get(this.apiUrl, {
        params,
      })
      return promis
        .then(res => {
          if (res.status === 200) {
            const items = res.data?.data[Object.keys(res.data?.data)[0]]
            this.rows = items

            this.totalRows = res.data.data.count
            this.perPage = 10
            this.$router
              .push({ query: { ...this.$route.query, page } })
              .catch(() => {})
            this.page = page
            if (this.exportData) {
              this.getAllDataToExport()
            }
            // this.$refs.productsTable.refresh()
            // this.getRouting()
          }
        })
        .catch(error => {
          if (error.response.status === 500) {
            this.$toast({
              component: ToastificationContent,
              props: {
                title: 'Server Error',
                icon: 'BellIcon',
                variant: 'danger',
              },
            })
          }
        })
        .finally(() => {
          this.dataLoad = false
          this.loader = false
        })
    },
    deleteRow(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(result => {
        if (result.isConfirmed) {
          axios
            .delete(`${this.apiUrl}/${id}`)
            .then(() => {
              this.$swal('Deleted!', 'Deleted Successfully.', 'success')
              this.getAllData()
            })
            .finally(() => {
              this.loading = false
            })
        }
      })
    },

    ApprovalRow(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to Approval this employee!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Approval',
        cancelButtonText: 'Disapproval',
      }).then(result => {
        if (result.isConfirmed) {
          axios
            .post(`${this.apiUrl}/${id}/approve`, {
              approved: 1,
            })
            .then(() => {
              this.$swal('Approved!', 'Approve Successfully.', 'success')
              this.getAllData()
            })
            .finally(() => {
              this.loading = false
            })
        } else {
          axios
            .post(`${this.apiUrl}/${id}/approve`, {
              approved: 0,
            })
            .then(() => {
              this.$swal('Disapproved!', 'Disapprove Successfully.', 'danger')
              this.getAllData()
            })
            .finally(() => {
              this.loading = false
            })
        }
      })
    },

    ApprovalDevies(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to Approval this employee!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Approval',
        cancelButtonText: 'Disapproval',
      }).then(result => {
        if (result.isConfirmed) {
          axios
            .patch(`${this.apiUrl}/${id}`, {
              approved: 1,
            })
            .then(() => {
              this.$swal('Approved!', 'Approve Successfully.', 'success')
              this.getAllData()
            })
            .finally(() => {
              this.loading = false
            })
        } else {
          axios
            .patch(`${this.apiUrl}/${id}`, {
              approved: 0,
            })
            .then(() => {
              this.$swal('Disapproved!', 'Disapprove Successfully.', 'danger')
              this.getAllData()
            })
            .finally(() => {
              this.loading = false
            })
        }
      })
    },
    async searchTable() {
      this.dataLoad = true
      let skip = 0
      const page = this.$route.query?.page
      if (page !== 1 && page !== undefined) {
        skip = page * 10 - 10
      } else {
        skip = 0
      }
      const searchParams = {
        skip,
        search: this.searchQuery,
        country_id: this.currentCountry.id,
        type:
          this.searchType === true && this.searchQuery !== ''
            ? this.selectedSearchType
            : null,
        code:
          this.searchCode === true && this.searchCodeQuery !== ''
            ? this.searchCodeQuery
            : null,
      }
      Object.keys(searchParams).forEach(
        k => !searchParams[k]
          && searchParams[k] !== undefined
          && delete searchParams[k],
      )
      this.$router.push({ query: { ...searchParams } }).catch(() => {})

      const response = await axios
        .get(`${this.apiUrl}`, {
          params: searchParams,
        })
        .catch(() => {})
      this.dataLoad = false

      this.rows = response.data?.data[Object.keys(response.data?.data)[0]]
      this.totalRows = response.data.data.count
      this.perPage = 10
      this.page = response.data.meta?.per_page
    },
    // getAllDataPerPage(perpage) {
    //   const self = this
    //   const promis = axios.get(this.apiUrl,
    //     {
    //       params: {
    //         limit: perpage,
    //         role: self.roleType(),
    //       },
    //     })
    //   return promis.then(res => {
    //     if (res.status === 200) {
    //       const items = res.data?.data
    //       this.rows = items
    //       this.totalRows = res.data.data.count
    //       this.perPage = res.data.meta?.per_page
    //     }
    //   })
    // },
    // getRouting() {
    //   if (this.$route.query.search) {
    //     this.searchQuery = this.$route.query?.search
    //     this.searchTable()
    //   }
    // },
    getCurrentDateTime() {
      const today = new Date()

      const date = `${today.getFullYear()}-${today.getMonth()
        + 1}-${today.getDate()}`

      const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

      const dateTime = `${date} ${time}`

      this.currentTime = dateTime
    },
    bulkDelete() {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(result => {
        if (result.isConfirmed) {
          axios
            .post(`${this.apiUrl}/bulk-destroy`, {
              ids: this.selected,
            })
            .then(() => {
              this.$swal('Deleted!', 'Deleted Successfully.', 'success')
              this.getAllData()
            })
            .finally(() => {
              this.loading = false
            })
        }
      })
    },
    sortData(e) {
      const self = this
      const sortType = () => {
        if (e.sortDesc) return 'DESC'
        return 'ASC'
      }
      const promis = axios.get(this.apiUrl, {
        params: {
          limit: self.perPage,
          search: self.searchQuery || self.$route.query.search,
          type: this.selectedSearchType,
          sort_colum: e.sortBy,
          sort_type: sortType(),
        },
      })
      return promis
        .then(res => {
          if (res.status === 200) {
            const items = res.data?.data
            this.rows = items
            this.totalRows = res.data.data.count
            this.perPage = res.data.meta?.per_page
          }
        })
        .catch(error => {
          if (error.response.status === 500) {
            this.$toast({
              component: ToastificationContent,
              props: {
                title: 'Server Error',
                icon: 'BellIcon',
                variant: 'danger',
              },
            })
          }
        })
        .finally(() => {
          this.loader = false
        })
    },
  },
}
</script>

<style lang="scss">
.padd span {
  padding: 2px;
}
#table-spinner {
  position: absolute;
  right: 50%;
  top: 5rem;
  z-index: 999999999;
}
td {
  padding: 2px 0px !important;
  text-align: center !important;
  // margin: 8px !important;
}
.change-status {
  cursor: pointer;
}
@import "@core/scss/vue/libs/vue-select.scss";
</style>
