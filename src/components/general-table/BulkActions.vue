<template>
  <b-col
    ref="bulkactions"
    cols="12"
    md="6"
  >
    <div class="d-flex align-items-center justify-content-end">
      <b-dropdown
        v-if="selected && selected.length >= 2 && $route.path.includes('users')"
        text="Select Action ---"
        variant="outline-primary"
        class="m-2"
      >
        <b-dropdown-item @click="$bvModal.show('userACtiveType')">
          Change Active Status
        </b-dropdown-item>
        <b-dropdown-item @click="bulkDelete()">
          <span class=" text-danger">Delete</span>
        </b-dropdown-item>
      </b-dropdown>
      <b-dropdown
        v-if="selected && selected.length >= 2 && !$route.path.includes('users') && !$route.path.includes('transactions') && !$route.path.includes('roles') && !$route.path.includes('cashouts')"
        text="Select Action ---"
        variant="outline-primary"
        class="m-2"
      >
        <b-dropdown-item @click="$bvModal.show('activeTypes')">
          Change Active Status
        </b-dropdown-item>
        <b-dropdown-item @click="bulkDelete()">
          <span class=" text-danger">Delete</span>
        </b-dropdown-item>
      </b-dropdown>
      <slot name="addbtn" />
      <slot name="exportbtn" />
    </div>
    <div>
      <b-modal
        id="activeTypes"
        ref="active-type-modal"
        hide-footer
        centered
        title="Change Active Type Status"
      >
        <b-row>
          <b-col
            cols="12"
            md="8"
          >
            <b-form-group label="Activation Types">
              <b-form-select
                v-model="userForm.active_type"
                value-field="value"
                text-field="text"
                :options="activeType"
                right
              >
                <!-- <template #first>
                  <b-form-select-option
                    disabled
                    :value="userForm.active_type"
                  >
                    {{ userForm.active_type }}
                  </b-form-select-option>
                </template> -->
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            md="12"
          >
            <b-button
              v-if="!loader"
              variant="primary"
              class="mr-1"
              @click.prevent="changeActiveTypeStatus"
            >
              Save
            </b-button>
            <b-button
              variant="outline-danger"
              class="closeModal"
              @click="closeModal"
            >
              Cancel
            </b-button>
            <b-button
              v-if="loader"
              variant="primary"
              disabled
              class="mr-1"
            >
              <b-spinner
                small
                type="grow"
              />
              Loading...
            </b-button>
          </b-col>
        </b-row>
      </b-modal>
    </div>
  </b-col>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

export default {
  props: {
    apiUrl: {
      type: String,
      default: () => '',
    },
    selected: {
      type: Array,
      default: () => [],
    },
    goToPageOrOpenModal: {
      type: Function,
      default: () => null,
    },
    bulkDelete: {
      type: Function,
      default: () => null,
    },
    guard: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      activeType: [
        {
          text: 'Active',
          value: 1,
        },
        {
          text: 'Not Active',
          value: 0,
        },
      ],
      userForm: {
        active_type: '',
      },
      loader: false,
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('activeTypes')
      this.selected = []
    },
    changeActiveTypeStatus() {
      this.loader = true
      axios.post(`${this.apiUrl}/edit-active-status`, {
        ids: this.selected,
        is_active: this.userForm.active_type,
      }).then(res => {
        if (res.status === 200 || res.status === 201) {
          this.closeModal()
          this.$parent.getAllData()
        }
      }).finally(() => {
        this.loader = false
      })
    },
  },

}
</script>

<style>

</style>
