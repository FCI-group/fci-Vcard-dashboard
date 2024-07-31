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
                v-model="FCIForm.name"

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
          <!-- Name -->
          <validation-provider
            #default="validationContext"
            name="Email"
            rules="required"
          >
            <b-form-group
              label="Email"
              label-for="email"
            >
              <b-form-input
                id="email"
                v-model="FCIForm.email"

                :state="getValidationState(validationContext)"
                trim
                placeholder="Email"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <!-- Category -->
          <validation-provider
            #default="validationContext"
            name="Category"
            rules="required"
          >
            <b-form-group
              label="Category"
              label-for="Category"
            >
              <b-form-input
                id="Category"
                v-model="FCIForm.category"

                :state="getValidationState(validationContext)"
                trim
                placeholder="Category"
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
            name="Address"
            rules="required"
          >
            <b-form-group
              label="Address"
              label-for="address"
            >
              <b-form-input
                id="address"
                v-model="FCIForm.address"

                :state="getValidationState(validationContext)"
                trim
                placeholder="Address"
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
            name="Description"
          >
            <b-form-group
              label="Description"
              label-for="description"
            >
              <b-form-textarea
                id="description"
                v-model="FCIForm.description"
                trim
                type="text"
                placeholder="Description"
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
            name="Established at"
            rules="required"
          >
            <b-form-group
              label="Established at"
            >
              <b-form-datepicker
                id="example-datepicker"
                v-model="FCIForm.established_at"
                :state="getValidationState(validationContext)"
                class="mb-1"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col md="6">
          <!-- Website -->
          <validation-provider
            #default="validationContext"
            name="Website"
            rules="required|url"
          >
            <b-form-group
              label="Website"
              label-for="Website"
            >
              <b-form-input
                id="Website"
                v-model="FCIForm.website"
                :state="getValidationState(validationContext)"
                trim
                placeholder="Website"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col
          md="6"
        >
          <validation-provider
            #default="validationContext"
            name="Number Of Employees"
            rules="required"
          >
            <b-form-group
              label="Number Of Employees"
              label-for="Number Of Employees"
            >
              <b-form-input
                id="Number Of Employees"
                v-model.number="FCIForm.number_of_employees"
                :state="getValidationState(validationContext)"
                trim
                type="number"
                placeholder="Number Of Employees:"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-col>
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
                :src="FCIForm.image.url"
                height="80"
              />
            </b-link>
            <!--/ image -->
          </b-media-aside>

          <b-media-body>
            <!-- upload button -->
            <b-button
              variant="primary"
              size="sm"
              class="mb-75 mr-75"
              @click="selectFile()"
            >
              Upload Image
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
            @click="addFCI()"
          >
            Save Changes
          </b-button>
          <b-button
            v-if="!loader && !$route.params.id"
            variant="primary"
            class="mr-1"
            :disabled="invalid || Object.values(errors).length > 0"
            @click="addFCI()"
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
  components: {
  },
  props: {
  },
  data() {
    return {
      loading: false,
      address: '',
      required,
      id: this.$store.state.generalIds.id,
      loader: false,
      validationErrors: {},
      errors: {},
    }
  },
  setup() {
    const { getValidationState } = formValidation()
    const FCIForm = ref({
      name: '',
      image: {
        url: null,
      },
    })
    // eslint-disable-next-line camelcase
    const image = ref('')

    return {
      getValidationState,
      FCIForm,
      image,
    }
  },
  computed: {

  },

  mounted() {
    this.showFCI()
  },
  methods: {

    selectFile() {
      this.$refs.refInputEl.$el.click()
    },
    changeProfile(e) {
      // eslint-disable-next-line prefer-destructuring
      this.image = e.target.files[0]
      const input = e.target
      if (input.files) {
        const reader = new FileReader()
        reader.onload = er => {
          this.FCIForm.image.url = er.target.result
        }
        // eslint-disable-next-line prefer-destructuring
        this.image = input.files[0]
        reader.readAsDataURL(input.files[0])
      }
    },
    showFCI() {
      if (this.$route.params.id) {
        axios.get(`companies/${this.$route.params.id}`).then(res => {
          this.FCIForm = res.data.FCI
        })
      } else {
        return false
      }
      return true
    },
    addFCI() {
      if (this.$route.params.id) {
        this.loader = true
        const formData = new FormData()

        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const key in this.FCIForm) {
          if (key !== 'image') {
            formData.append(key, this.FCIForm[key])
          }
        }
        if (this.image) {
          formData.append('image', this.image)
        }
        axios.post(`companies/${this.$route.params.id}`, formData).then(res => {
          if (res.status === 200) {
            this.$router.push({ name: 'companies' })
            this.$toasted.show('Updated Successfully', {
              position: 'top-center',
              duration: 3000,
            })
          }
        }).finally(() => {
          this.loader = false
        })
      } else {
        const formData = new FormData()

        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const key in this.FCIForm) {
          if (key !== 'image') {
            formData.append(key, this.FCIForm[key])
          }
        }
        if (this.image) {
          formData.append('image', this.image)
        }

        this.loader = true
        axios.post('companies', formData).then(res => {
          if (res.status === 200 || res.status === 201) {
            this.$router.push({ name: 'companies' })
            this.$toasted.show('Created Successfully', {
              position: 'top-center',
              duration: 3000,
            })
          }
        }).catch(error => {
          if (error.response.status === 500) {
            this.$toast({
              component: ToastificationContent,
              props: {
                title: 'Somthing Went Wrong',
                icon: 'BellIcon',
                variant: 'error',
              },
            })
          }
        }).finally(() => {
          this.loader = false
        })
      }
    },

  },

}
</script>

  <style lang="scss">

  @import '@core/scss/vue/libs/vue-select.scss';
  </style>
