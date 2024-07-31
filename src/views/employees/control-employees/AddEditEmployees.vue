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
              <b-form-input
                id="name"
                v-model="employeesForm.name"
                :state="getValidationState(validationContext)"
                trim
                placeholder="Name"
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
            name="Email"
            rules="required"
          >
            <b-form-group
              label="Email"
              label-for="Email"
            >
              <b-form-input
                id="Email"
                v-model="employeesForm.email"
                :state="getValidationState(validationContext)"
                trim
                placeholder="email"
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
                v-model="employeesForm.branch_id"
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
          <validation-provider
            #default="validationContext"
            name="mobile"
            rules="required"
          >
            <b-form-group
              label="mobile"
              label-for="mobile"
            >
              <b-form-input
                id="mobile"
                v-model="employeesForm.mobile"
                :state="getValidationState(validationContext)"
                placeholder="mobile"
                trim
                type="tel"
                @input="formatPhoneNumber"
                @keypress="onlyAllowNumbersAndPlus"
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
            name="Whatsapp"
            rules="required"
          >
            <b-form-group
              label="Whatsapp"
              label-for="Whatsapp"
            >
              <b-form-input
                id="Whats app"
                v-model="employeesForm.whats_app"
                :state="getValidationState(validationContext)"
                trim
                type="tel"
                placeholder="Whats app"
                @input="formatPhoneNumber"
                @keypress="onlyAllowNumbersAndPlus"
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
            name="job title"
            rules="required"
          >
            <b-form-group
              label="job title"
              label-for="job title"
            >
              <b-form-input
                id="job title"
                v-model="employeesForm.job_title"
                :state="getValidationState(validationContext)"
                trim
                placeholder="job title"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
        <!-- <b-col md="6">
          <validation-provider
            #default="validationContext"
            name="address"
            rules="required"
          >
            <b-form-group
              label="Address"
              label-for="address"
            >
              <b-form-input
                id="address"
                v-model="employeesForm.address"
                :state="getValidationState(validationContext)"
                trim
                placeholder="Address"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col> -->
        <!-- <b-col md="6">
          <validation-provider
            #default="validationContext"
            rules="required"
            name="brief"
          >
            <b-form-group
              label="Company brief"
              label-for="brief"
            >
              <b-form-textarea
                id="brief"
                v-model="employeesForm.company_brief"
                trim
                type="text"
                placeholder="Company brief"
                :state="getValidationState(validationContext)"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col> -->
        <b-col md="6">
          <!-- Website -->
          <validation-provider
            #default="validationContext"
            name="Website"
            rules="required|url"
          >
            <b-form-group
              label="Company's Website"
              label-for="Website"
            >
              <b-form-input
                id="Website"
                v-model="employeesForm.website_company"
                :state="getValidationState(validationContext)"
                trim
                placeholder="Company's Website"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <!-- linked_in -->
          <validation-provider
            #default="validationContext"
            name="linked_in"
            rules="required|url"
          >
            <b-form-group
              label="Linked in"
              label-for="linked_in"
            >
              <b-form-input
                id="linked_in"
                v-model="employeesForm.linked_in"
                :state="getValidationState(validationContext)"
                trim
                placeholder="Linked in"
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
                  :src="employeesForm.photo"
                  width="100"
                  height="100"
                />
              </b-link>
              <!--/ photo -->
            </b-media-aside>

            <b-media-body>
              <!-- upload button -->
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
                accept=".jpg, .png"
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
            @click="addemployees()"
          >
            Save Changes
          </b-button>
          <b-button
            v-if="!loader && !$route.params.id"
            variant="primary"
            class="mr-1"
            :disabled="invalid || Object.values(errors).length > 0"
            @click="addemployees()"
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
      userLocation: {},
      position: {},
      branches: [],
      companies: [],
      optionsBranch: [],
      errorMsg: '',
      required,
      id: this.$store.state.generalIds.id,
      selected: [],
      allSelected: [],
      indeterminate: false,
      allPermissions: [],
      users: [],
      loader: false,
      validationErrors: {},
      errors: {},
      passwordFieldType: 'text',
    }
  },
  setup() {
    const { getValidationState } = formValidation()
    const employeesForm = ref({
      photo: null,
      name: '',
      email: '',
      job_title: '',
      password: '',
      mobile: '',
      linked_in: '',
      website_company: '',
      address: 'address',
      company_brief: 'company brief',
      whats_app: '',
      branch: {
        id: '',
        name: '',
        country: '',
      },

    })
    // eslint-disable-next-line camelcase
    const photo = ref('')

    return {
      getValidationState,
      employeesForm,
      photo,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },

  mounted() {
    this.getBranch()
    this.showemployees()
    this.employeesForm.password = ''
  },
  methods: {
    handleType(event) {
      const { srcElement, type } = event
      const { value } = srcElement

      if (type === 'blur' && !value) {
        this.passwordFieldType = 'text'
      } else {
        this.passwordFieldType = 'password'
      }
    },
    formatPhoneNumber(event) {
      const { value } = event.target
      // Allow only numbers and + sign at the start
      const formattedValue = value.replace(/[^0-9+]/g, '')
      if (formattedValue.startsWith('+') || /^\d+$/.test(formattedValue)) {
        this.employeesForm.whats_app = formattedValue
      } else {
        this.employeesForm.whats_app = formattedValue.replace(/\+/g, '')
      }
    },
    onlyAllowNumbersAndPlus(event) {
      const { charCode } = event
      const charStr = String.fromCharCode(charCode)
      if (!charStr.match(/[0-9+]/) || (charStr === '+' && event.target.value.includes('+'))) {
        event.preventDefault()
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
          this.employeesForm.photo = er.target.result
        }
        // eslint-disable-next-line prefer-destructuring
        this.photo = input.files[0]
        reader.readAsDataURL(input.files[0])
      }
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

    showemployees() {
      if (this.$route.params.id) {
        axios.get(`employees/${this.$route.params.id}`).then(res => {
          this.employeesForm = res.data.data.employee
          this.employeesForm.password = ''
          this.employeesForm.branch_id = res.data.data.employee.branch.id
        })
      } else {
        return false
      }
      return true
    },
    addemployees() {
      if (this.$route.params.id) {
        this.loader = true
        const formData = new FormData()

        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const key in this.employeesForm) {
          if (key !== 'photo') {
            formData.append(key, this.employeesForm[key])
          }
        }

        formData.append('photo', this.photo)

        // formData.append('address', 'address')
        // formData.append('company_brief', 'company brief')

        axios
          .post(`employees/${this.$route.params.id}`, formData)
          .then(res => {
            if (res.status === 200) {
              this.$router.push({ name: 'employees' })
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
        for (const key in this.employeesForm) {
          if (key !== 'photo') {
            formData.append(key, this.employeesForm[key])
          }
        }
        if (this.photo) {
          formData.append('photo', this.photo)
        }
        // formData.append('address', 'address')
        // formData.append('company_brief', 'company brief')
        this.loader = true
        axios
          .post('employees', formData)
          .then(res => {
            if (res.status === 200 || res.status === 201) {
              this.$router.push({ name: 'employees' })
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
