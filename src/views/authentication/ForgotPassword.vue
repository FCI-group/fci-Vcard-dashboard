<template>
  <div>
    <div
      v-if="codeforget"
      class="auth-wrapper auth-v1 px-2"
    >
      <div class="auth-inner py-2">

        <!-- Forgot Password v1 -->
        <b-card class="mb-0">
          <b-link class="brand-logo">
            <!-- logo -->
            <vuexy-logo />
          </b-link>

          <b-card-title class="mb-1">
            Forgot Password? 🔒
          </b-card-title>
          <b-card-text class="mb-2">
            Enter your email or mobile number and we'll send you instructions to reset your password
          </b-card-text>

          <!-- form -->
          <validation-observer ref="simpleRules">
            <b-form
              class="auth-forgot-password-form mt-2"
              @submit.prevent
            >
              <!-- email -->
              <b-form-group
                label="Email"
                label-for="forgot-password-email"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  rules="required|email"
                >
                  <b-form-input
                    id="forgot-password-email"
                    v-model="userEmail"
                    :state="errors.length > 0 ? false:null"
                    name="forgot-password-email"
                    placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- submit button -->
              <b-button
                variant="primary"
                block
                type="submit"
                @click="resetMail()"
              >
                Send reset link
              </b-button>
            </b-form>
          </validation-observer>

          <b-card-text class="text-center mt-2">
            <b-link :to="{name:'login'}">
              <feather-icon icon="ChevronLeftIcon" /> Back to login
            </b-link>
          </b-card-text>

        </b-card>
        <!-- /Forgot Password v1 -->
      </div>
    </div>
    <verification-code v-if="code" />
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BCard, BLink, BCardText, BCardTitle, BFormGroup, BFormInput, BForm, BButton,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import verificationCode from './VerificationCode.vue'

export default {
  components: {
    VuexyLogo,
    BCard,
    BLink,
    BCardText,
    BCardTitle,
    BFormGroup,
    BFormInput,
    BButton,
    BForm,
    ValidationProvider,
    ValidationObserver,
    verificationCode,
  },
  data() {
    return {
      userEmail: '',
      // validation
      required,
      email,
      codeforget: true,
      code: false,
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.$router.push({ name: 'auth-reset-password-v1' })
        }
      })
    },
    resetMail() {
      this.code = true
      this.codeforget = false
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
