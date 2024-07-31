<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Verification Code -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <!-- logo -->
          <vuexy-logo />
        </b-link>

        <b-card-title class="mb-1">
          Verify your Code
        </b-card-title>

        <!-- form -->
        <validation-observer
          ref="simpleRules"
          #default="{invalid}"
        >
          <b-form
            class="auth-forgot-password-form mt-2"
            @submit.prevent="validationForm"
          >
            <!-- code -->
            <b-form-group
              label="Code"
              label-for="verify-code"
            >
              <validation-provider
                #default="{ errors }"
                name="code"
                rules="required"
              >
                <b-form-input
                  id="verify-code"
                  v-model="code"
                  type="number"
                  :state="errors.length > 0 ? false:null"
                  name="verify-code"
                  placeholder="123456"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- submit button -->
            <b-button
              variant="primary"
              block
              type="submit"
              :disabled="invalid"
            >
              Verify
            </b-button>
          </b-form>
          <span
            class="mt-1"
            type="button"
            :disabled="counting"
            @click="startCountdown"
          >
            <vue-countdown
              v-if="counting"
              v-slot="{ totalSeconds }"
              :time="60000"
              @end="onCountdownEnd"
            >
              Try again after {{ totalSeconds }} seconds
            </vue-countdown>
            <span v-else>Send code again</span>
          </span>
        </validation-observer>
      </b-card>
    <!-- /Forgot Password v1 -->
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import { required, email } from '@validations'
import VueCountdown from '@chenfengyuan/vue-countdown'

export default {
  components: {
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
    VueCountdown,
  },
  data() {
    return {
      code: '',
      // validation
      required,
      email,
      counting: false,
    }
  },
  created() {
    this.startCountdown()
  },
  methods: {
    startCountdown() {
      this.counting = true
    },
    onCountdownEnd() {
      this.counting = false
    },
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.$router.push({ name: 'auth-reset-password-v1' })
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
