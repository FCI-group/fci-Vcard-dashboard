<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Login v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <img
            v-img
            :src="require('@/assets/images/logo/logo.png')"
            width="200"
          >
        </b-link>
        <b-card-title class="mb-1">
          Welcome to FCI! 👋
        </b-card-title>
        <b-card-text class="mb-2">
          Please sign-in to your account and start the adventure
        </b-card-text>
        <span
          v-if="loginError"
          class="text-danger"
        > {{ loginError }}  </span>
        <!-- form -->
        <validation-observer
          ref="loginForm"
          #default="{invalid}"
        >
          <b-form
            class="auth-login-form mt-2"
            @submit.prevent
          >

            <!-- email -->
            <b-form-group
              label-for="email"
              label="Email / Mobile Number"
            >
              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              >
                <b-form-input
                  id="email"
                  v-model="loginData.email"
                  name="login-email"
                  :state="errors.length > 0 ? false:null"
                  placeholder=""
                  autofocus
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group>
              <div class="d-flex justify-content-between">
                <label for="password">Password</label>
                <b-link :to="{name:'forgot-password'}">
                  <small>Forgot Password?</small>
                </b-link>
              </div>
              <validation-provider
                #default="{ errors }"
                name="Password"
                rules="required"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid':null"
                >
                  <b-form-input
                    id="password"
                    v-model="loginData.password"
                    :type="passwordFieldType"
                    class="form-control-merge"
                    :state="errors.length > 0 ? false:null"
                    name="login-password"
                    placeholder="Password"
                  />

                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="passwordToggleIcon"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- submit button -->
            <b-button
              v-if="loader === false"
              variant="primary"
              type="submit"
              block
              :disabled="invalid"
              @click="signin()"
            >
              <span>Sign in</span>
            </b-button>
            <b-button
              v-if="loader"
              variant="primary"
              disabled
              block
              class="mr-1"
            >
              <b-spinner
                small
                type="grow"
              />
              Loading...
            </b-button>
          </b-form>
        </validation-observer>
      </b-card>
      <!-- /Login v1 -->
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
// eslint-disable-next-line no-unused-vars
import {
  BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BCardText, BCardTitle, BForm, BButton, BCard,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
// import axios from 'axios'
import { mapState } from 'vuex'
import store from '@/store/index'

export default {
  components: {
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BCardText,
    BCardTitle,
    BForm,
    BCard,
    BButton,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: '',
      loginData: {
        password: '',
        email: '',
      },
      required,
      email,
      // loading: this.$store.state.login.loader,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
    ...mapState('login', [
      'loader',
      'loginError',
    ]),
  },
  mounted() {
    if (
      localStorage.getItem('accessToken') !== null
        && this.$route.path === '/login'
    ) {
      this.$router.push('/') // redirect to home
    }
  },
  methods: {
    signin() {
      this.$store.dispatch('login/login', this.loginData)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
.loader {
  transform: translate(-50%, -50%);
 border: 10px solid #f3f3f3; /* Light grey */
 border-top: 8px solid #3498db; /* Blue */
 border-radius: 50%;
 width: 45px;
 height: 45px;
 animation: spin 2s linear infinite;
 }

 @keyframes spin {
     0% { transform: rotate(0deg); }
     100% { transform: rotate(360deg); }
  }
</style>
