<!-- eslint-disable global-require -->
<template>
  <b-card>
    <validation-observer
      ref="infoRules"
      v-slot="{ invalid }"
      tag="form"
    >
      <b-row>
        <b-col md="6">
          <!-- Name -->
          <validation-provider
            #default="validationContext"
            name="Name"
            rules="required"
          >
            <b-form-group
              label="Name"
              label-for="name"
            >
              <b-form-select
                id="name"
                v-model="selectedName"
                :state="getValidationState(validationContext)"
                @change="onNameChange"
              >
                <b-form-select-option
                  v-for="name in nameOptions"
                  :key="name"
                  :value="name"
                >
                  {{ name }}
                </b-form-select-option>
                <b-form-select-option value="other">
                  Other
                </b-form-select-option>
              </b-form-select>
              <b-form-input
                v-if="selectedName === 'other'"
                v-model="deviceForm.name"
                :state="getValidationState(validationContext)"
                trim
                placeholder="Enter custom name"
                class="mt-3"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>

        <b-col md="6">
          <validation-provider
            #default="validationContext"
            name="brand"
            rules="required"
          >
            <b-form-group
              label="Brand"
              label-for="Brand"
            >
              <b-form-input
                id="brand"
                v-model="deviceForm.brand"
                :state="getValidationState(validationContext)"
                trim
                placeholder="Brand"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <validation-provider
            #default="validationContext"
            name="model_number"
            rules="required"
          >
            <b-form-group
              label="model number"
              label-for="model number"
            >
              <b-form-input
                id="model_number"
                v-model="deviceForm.model_number"
                :state="getValidationState(validationContext)"
                type="number"
                placeholder="model number"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <validation-provider
            #default="validationContext"
            name="serial_number"
            rules="required"
          >
            <b-form-group
              label="serial number"
              label-for="serial number"
            >
              <b-form-input
                id="Whats app"
                v-model="deviceForm.serial_number"
                :state="getValidationState(validationContext)"
                trim
                type="number"
                placeholder="serial number"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <!-- Name -->
          <validation-provider
            #default="validationContext"
            name="purchased_date"
            rules="required"
          >
            <b-form-group
              label="purchased_date"
              label-for="purchased_date"
            >
              <b-form-input
                id="purchased_date"
                v-model="deviceForm.purchased_date"
                type="date"
                :state="getValidationState(validationContext)"
                trim
                placeholder="purchased_date"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <!-- address -->
          <validation-provider
            #default="validationContext"
            name="notes"
            rules="required"
          >
            <b-form-group
              label="notes"
              label-for="notes"
            >
              <b-form-input
                id="notes"
                v-model="deviceForm.notes"
                :state="getValidationState(validationContext)"
                trim
                placeholder="notes"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <validation-provider
            #default="validationContext"
            rules="required"
            name="employee"
          >
            <b-form-group
              label="employee "
              label-for="employee"
            >
              <b-form-select
                id="employee"
                v-model="deviceForm.employee_id"
                :options="optionsEmployee"
                type="search"
                trim
                placeholder="employee"
                :state="getValidationState(validationContext)"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <validation-provider
            #default="validationContext"
            rules="required"
            name="branch"
          >
            <b-form-group
              label="branch "
              label-for="branch"
            >
              <b-form-select
                id="branch"
                v-model="deviceForm.branch_id"
                :options="optionsBranch"
                type="search"
                trim
                placeholder="branch"
                :state="getValidationState(validationContext)"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <b-media
            no-body
            class="mb-1"
          >
            <b-media-aside>
              <b-link>
                <b-img
                  ref="previewEl"
                  v-img
                  rounded
                  :src="deviceForm.photo"
                  width="100"
                  height="100"
                />
              </b-link>
            </b-media-aside>

            <b-media-body>
              <b-button
                variant="primary"
                size="sm"
                class="mb-75 mr-75"
                @click="selectFile()"
              >
                Upload photo
              </b-button>
              <b-form-file
                ref="refInputEl"
                accept=".jpg, .png, .jpeg"
                :hidden="true"
                plain
                @change="changeProfile($event)"
              />
              <!--/ upload button -->
            </b-media-body>
          </b-media>
        </b-col>
        <b-col
          v-if="errorMsg"
          cols="12"
        >
          <p class="text-danger">
            {{ errorMsg }}
          </p>
        </b-col>
        <!-- Server Errors -->
        <b-col
          v-if="Object.values(errors).length > 0"
          cols="12"
        >
          <p
            v-for="(error, key, index) in errors"
            :key="index"
            class="text-danger small"
          >
            {{ error.toString() }}
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          cols="12"
          class="mt-50"
        >
          <b-button
            v-if="!loader && $route.params.id"
            variant="primary"
            class="mr-1"
            :disabled="invalid || Object.values(errors).length > 0"
            @click="addDevice()"
          >
            Save Changes
          </b-button>
          <b-button
            v-if="!loader && !$route.params.id"
            variant="primary"
            class="mr-1"
            :disabled="invalid || Object.values(errors).length > 0"
            @click="addDevice()"
          >
            Add
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
    </validation-observer>
  </b-card>
</template>

<script>
import { ref } from '@vue/composition-api'
import formValidation from '@core/comp-functions/forms/form-validation'
import { required } from '@validations'

import axios from 'axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import { extend } from 'vee-validate'

extend('url', {
  validate: value => {
    // Regular expression for a simple URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/
    return urlRegex.test(value)
  },
  message: 'Please enter a valid URL.',
})
export default {
  components: {},
  mixins: [togglePasswordVisibility],

  data() {
    return {
      loading: false,
      selectedName: '',
      nameOptions: [], // Replace with your list of names
      userLocation: {},
      position: {},
      branches: [],
      companies: [],
      errorMsg: '',
      required,
      id: this.$store.state.generalIds.id,
      allSelected: [],
      indeterminate: false,
      allPermissions: [],
      optionsEmployee: [],
      optionsBranch: [],
      loader: false,
      validationErrors: {},
      errors: {},
      passwordFieldType: 'text',
      search: '',
      selected: null,
      filteredOptions: [],
    }
  },
  setup() {
    const { getValidationState } = formValidation()
    const deviceForm = ref({
      photo: null,
      branch_id: '',
      gulftic_device_id: '',
      name: '',
      brand: '',
      model_number: '',
      serial_number: '',
      purchased_date: '',
      notes: '',
      employee_id: {},
    })
    const photo = ref('')

    // eslint-disable-next-line camelcase

    return {
      getValidationState,
      deviceForm,
      photo,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  created() {
    this.filteredOptions = this.options
  },

  mounted() {
    this.showDevice()
    this.getEmployee()
    this.getBranch()
    this.getDevices()
    this.employeesForm.password = ''
  },
  methods: {
    onNameChange() {
      if (this.selectedName !== 'other') {
        this.deviceForm.name = this.selectedName
      } else {
        this.deviceForm.name = ''
      }
    },
    handleType(event) {
      const { srcElement, type } = event
      const { value } = srcElement

      if (type === 'blur' && !value) {
        this.passwordFieldType = 'text'
      } else {
        this.passwordFieldType = 'password'
      }
    },

    selectFile() {
      this.$refs.refInputEl.$el.click()
    },
    changeProfile(e) {
      // eslint-disable-next-line prefer-destructuring
      this.photo = e.target.files[0]
      const input = e.target
      if (input.files) {
        const reader = new FileReader()
        reader.onload = er => {
          this.deviceForm.photo = er.target.result
        }
        // eslint-disable-next-line prefer-destructuring
        this.photo = input.files[0]
        reader.readAsDataURL(input.files[0])
      }
    },
    filterOptions() {
      const searchLower = this.search.toLowerCase()
      this.filteredOptions = this.options.filter(option => option.text.toLowerCase().includes(searchLower))
    },
    getEmployee() {
      this.loadtable = true
      axios
        .get('employees')
        .then(res => {
          this.optionsEmployee = res.data.data.employees.map(item => ({
            value: item.id,
            text: item.name,
          }))
        })
        .finally(() => {
          this.loadtable = false
        })
    },
    getBranch() {
      this.loadtable = true
      axios
        .get('https://FCI-vcard.tmam.app/api/branch')
        .then(res => {
          this.optionsBranch = res.data.data.map(item => ({
            value: item.id,
            text: item.name,
          }))
        })
        .finally(() => {
          this.loadtable = false
        })
    },

    getDevices() {
      this.loadtable = true
      axios
        .get('https://FCI-vcard.tmam.app/api/devices-list')
        .then(res => {
          this.nameOptions = res.data.data.map(item => item.name)
        })
        .finally(() => {
          this.loadtable = false
        })
    },
    showDevice() {
      if (this.$route.params.id) {
        axios.get(`device/${this.$route.params.id}`).then(res => {
          this.deviceForm = res.data.data
          if (this.nameOptions.includes(res.data.data.name)) {
            this.selectedName = res.data.data.name
          } else {
            this.selectedName = 'other'
            this.deviceForm.name = res.data.data.name
          }
          this.deviceForm.employee_id = res.data.data.employee_id
        })
      } else {
        return false
      }
      return true
    },
    addDevice() {
      if (this.$route.params.id) {
        this.loader = true
        const formData = new FormData()
        formData.append('_method', 'PUT')

        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const key in this.deviceForm) {
          if (key !== 'photo') {
            formData.append(key, this.deviceForm[key])
          }
        }

        formData.append('photo', this.photo)

        axios
          .post(`device/${this.$route.params.id}`, formData)
          .then(res => {
            if (res.status === 200) {
              this.$router.push({ name: 'devices' })
              this.$toasted.show('Updated Successfully', {
                position: 'top-center',
                duration: 3000,
              })
            }
          })
          .catch(error => {
            if (error.response.status === 500) {
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: 'Ooops!!! An Unexpected Internal server error',
                  icon: 'BellIcon',
                  variant: 'danger',
                },
              })
            } else if (error.response.status === 422) {
              if (error.response.data.errors !== undefined) {
                this.errorMsg = error.response.data.errors
              } else {
                this.errorMsg = error.response.data.message
              }
            }
          })
          .finally(() => {
            this.loader = false
          })
      } else {
        const formData = new FormData()

        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const key in this.deviceForm) {
          if (key !== 'photo') {
            formData.append(key, this.deviceForm[key])
          }
        }
        if (this.photo) {
          formData.append('photo', this.photo)
        }

        this.loader = true
        axios
          .post('device', formData)
          .then(res => {
            if (res.status === 200 || res.status === 201) {
              this.$router.push({ name: 'devices' })
              this.$toasted.show('Created Successfully', {
                position: 'top-center',
                duration: 3000,
              })
            }
          })
          .catch(error => {
            if (error.response.status === 500) {
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: 'Ooops!!! An Unexpected Internal server error',
                  icon: 'BellIcon',
                  variant: 'danger',
                },
              })
            } else if (error.response.status === 422) {
              if (error.response.data.errors !== undefined) {
                this.errorMsg = error.response.data.errors
              } else {
                this.errorMsg = error.response.data.message
              }
            }
          })
          .finally(() => {
            this.loader = false
          })
      }
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";

</style>
