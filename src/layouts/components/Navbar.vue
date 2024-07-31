<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>
    <!-- Left Col -->
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">
      <dark-Toggler class="d-none d-lg-block" />
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <!-- <notification-dropdown /> -->

      <b-nav-item-dropdown
        right
        toggle-class="d-flex align-items-center dropdown-user-link"
        class="dropdown-user"
      >
        <template #button-content>
          <div class="d-sm-flex d-none user-nav">
            <p class="user-name font-weight-bolder mb-0">
              {{ accountForm.name }}
            </p>

          </div>
          <b-avatar
            size="40"
            variant="light-primary"
            badge
            :src="accountForm.avatar_url"
            class="badge-minimal"
            badge-variant="success"
          />
        </template>

        <!--  <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="MailIcon"
            class="mr-50"
          />
          <span>Inbox</span>
        </b-dropdown-item> -->

        <!-- <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="CheckSquareIcon"
            class="mr-50"
          />
          <span>Task</span>
        </b-dropdown-item> -->

        <!-- <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="MessageSquareIcon"
            class="mr-50"
          />
          <span>Chat</span>
        </b-dropdown-item> -->

        <!-- <b-dropdown-divider /> -->

        <b-dropdown-item
          link-class="d-flex align-items-center"
          @click="logout"
        >
          <feather-icon
            size="16"
            icon="LogOutIcon"
            class="mr-50"
          />
          <span>Logout</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>
// import { getAuth, signOut } from 'firebase/auth'

import {
  BLink, BNavbarNav, BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
} from 'bootstrap-vue'
import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'
import { mapGetters } from 'vuex'
import countries from './countries.vue'
import NotificationDropdown from './NotificationDropdown.vue'

export default {
  components: {
    BLink,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    // eslint-disable-next-line vue/no-unused-components
    BDropdownDivider,
    BAvatar,
    // eslint-disable-next-line vue/no-unused-components
    countries,

    // Navbar Components
    DarkToggler,
    // eslint-disable-next-line vue/no-unused-components
    NotificationDropdown,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      countries: {},
      country_id: 1,
    }
  },
  computed: {
    ...mapGetters({
      accountForm: 'login/userInfo',
    }),

  },
  mounted() {
  },

  methods: {
    logout() {
      // const auth = getAuth()
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('user_info')
      this.$router.push({ name: 'login' })
    },

    // getUser() {
    //   const { userInfo } = this.$store.getters.login.userInfo
    //   this.accountForm = userInfo
    //   console.log(userInfo)
    // },
  },
}
</script>

<style scoped>
span.balance {
    font-size: 16px;
    padding-top: 5px;
    font-weight: bold;
}
</style>
