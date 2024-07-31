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
            name="next_maintenance_date"
            rules="required"
          >
            <b-form-group
              label="next_maintenance_date"
              label-for="next_maintenance_date"
            >
              <b-form-input
                id="next_maintenance_date"
                v-model="maintenanceForm.next_maintenance_date"
                type="date"
                :state="getValidationState(validationContext)"
                trim
                placeholder="next_maintenance_date"
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
            name="date"
            rules="required"
          >
            <b-form-group
              label="date"
              label-for="date"
            >
              <b-form-input
                id="date"
                v-model="maintenanceForm.date"
                type="date"
                :state="getValidationState(validationContext)"
                trim
                placeholder="date"
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
            name="maintained_by"
            rules="required"
          >
            <b-form-group
              label="maintained_by"
              label-for="maintained_by"
            >
              <b-form-input
                id="maintained_by"
                v-model="maintenanceForm.maintained_by"
                :state="getValidationState(validationContext)"
                trim
                placeholder="maintained_by"
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
            name="note"
            rules="required"
          >
            <b-form-group
              label="note"
              label-for="note"
            >
              <b-form-input
                id="note"
                v-model="maintenanceForm.note"
                :state="getValidationState(validationContext)"
                type="note"
                placeholder="note"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
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
            @click="addMaintenance()"
          >
            Save Changes
          </b-button>
          <b-button
            v-if="!loader && !$route.params.id"
            variant="primary"
            class="mr-1"
            :disabled="invalid || Object.values(errors).length > 0"
            @click="addMaintenance()"
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
      errorMsg: '',
      required,
      id: this.$store.state.generalIds.id,
      indeterminate: false,
      validationErrors: {},
      errors: {},
      passwordFieldType: 'text',
      search: '',
      selected: null,
    }
  },
  setup() {
    const { getValidationState } = formValidation()
    const maintenanceForm = ref({})

    // eslint-disable-next-line camelcase

    return {
      getValidationState,
      maintenanceForm,
    }
  },

  methods: {
    addMaintenance() {
      const formData = new FormData()

      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (const key in this.maintenanceForm) {
        if (key !== 'photo') {
          formData.append(key, this.maintenanceForm[key])
        }
      }
      this.loader = true
      axios
        .post(`/device/${this.$route.params.id}/maintenance`, formData)
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
              this.errorMsg = error.response.data
            }
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
@import "@core/scss/vue/libs/vue-select.scss";
</style>
