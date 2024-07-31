<template>
  <div>
    <div
      v-if="codeforget"
      class="auth-wrapper auth-v1 px-2"
    >
      <div class="auth-inner py-2">
        <!-- Reset Password v1 -->
        <b-card class="mb-0">

          <!-- logo -->
          <b-link class="brand-logo">
            <vuexy-logo />
          </b-link>

          <b-card-title class="mb-1">
            Reset Password 🔒
          </b-card-title>
          <b-card-text class="mb-2">
            Your new password must be different from previously used passwords
          </b-card-text>

          <!-- form -->
          <validation-observer
            ref="simpleRules"
            #default="{invalid}"
          >
            <b-form
              method="POST"
              class="auth-reset-password-form mt-2"
              @submit.prevent="validationForm"
            >

              <!-- password -->
              <b-form-group
                label="New Password"
                label-for="reset-password-new"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  vid="Password"
                  rules="required|password"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="reset-password-new"
                      v-model="password"
                      :type="password1FieldType"
                      :state="errors.length > 0 ? false:null"
                      class="form-control-merge"
                      name="reset-password-new"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="password1ToggleIcon"
                        @click="togglePassword1Visibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- confirm password -->
              <b-form-group
                label-for="reset-password-confirm"
                label="Confirm Password"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Confirm Password"
                  rules="required|confirmed:Password"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="reset-password-confirm"
                      v-model="cPassword"
                      :type="password2FieldType"
                      class="form-control-merge"
                      :state="errors.length > 0 ? false:null"
                      name="reset-password-confirm"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="password2ToggleIcon"
                        @click="togglePassword2Visibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- submit button -->
              <b-button
                block
                type="submit"
                variant="primary"
                :disabled="invalid"
                @click="send()"
              >
                Set New Password
              </b-button>
            </b-form>
          </validation-observer>
        </b-card>
        <!-- /Reset Password v1 -->
      </div>
    </div>
    <verification-code v-if="code" />
  </div>

</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import { required } from '@validations'
import VerificationCode from './VerificationCode.vue'

export default {
  components: {
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
    VerificationCode,
  },
  data() {
    return {
      userEmail: '',
      cPassword: '',
      password: '',
      // validation
      required,

      // Toggle Password
      password1FieldType: 'password',
      password2FieldType: 'password',
      code: false,
      codeforget: true,
    }
  },
  computed: {
    password1ToggleIcon() {
      return this.password1FieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    password2ToggleIcon() {
      return this.password2FieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    togglePassword1Visibility() {
      this.password1FieldType = this.password1FieldType === 'password' ? 'text' : 'password'
    },
    togglePassword2Visibility() {
      this.password2FieldType = this.password2FieldType === 'password' ? 'text' : 'password'
    },
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.code = true
          this.codeforget = false
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
