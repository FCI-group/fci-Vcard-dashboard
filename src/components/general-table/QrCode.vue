<template>
  <div>
    <div @click="openModal">
      <img
        src="../../assets/images/icons/qr-code-scan-icon.svg"
        class="ml-1 cursor-pointer"
        width="40px"
        alt="qr_code"
      >
    </div>
    <b-card
      v-if="showModalQRcode"
      v-model="showModalQRcode"
      class="qr-code"
    >
      <div class="qrcode-btn">
        <b-btn
          style="background-color: #0665f1 !important; border: 0px !important"
          @click="closeModal"
        >
          X
        </b-btn>
      </div>

      <div
        ref="qrCode"
        class="qr-code-content"
      >
        <div class="container">
          <div v-if="hasClass('dark-layout')">
            <qrcode-vue
              :value="generateQRCodeValue"
              :size="size"
              level="H"
              :background="'#212121ff'"
              :foreground="'#0564f2ff'"
            />
          </div>
          <div v-else>
            <qrcode-vue
              :value="generateQRCodeValue"
              :size="size"
              level="H"
              :background="'#f7f7f7ff'"
              :foreground="'#0564f2ff'"
            />
          </div>
        </div>

        <h2>
          {{ itemName }}
        </h2>
      </div>
    </b-card>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  components: {
    QrcodeVue,
  },
  props: {
    itemId: {
      type: Number,
      default: () => 0,
    },
    itemName: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      size: 200,
      showModalQRcode: false,
      showDark: false,
    }
  },
  computed: {
    generateQRCodeValue() {
      // Use the route params to dynamically generate the QR code value
      return `https://contact-FCI.tmam.app/${this.itemId}`
    },
  },
  mounted() {
    // Add event listener for clicks on the document
    document.addEventListener('click', this.handleClickOutside)
  },
  methods: {
    openModal(event) {
      event.stopPropagation()
      this.showModalQRcode = true
    },
    closeModal() {
      this.showModalQRcode = false
    },
    handleClickOutside(event) {
      // Check if the click originated from within the modal
      if (this.$refs.qrCode && !this.$refs.qrCode.contains(event.target)) {
        // Clicked outside the modal, so close it
        this.closeModal()
      }
    },
    hasClass(className) {
      // Check if the element has the specified class
      return document.querySelector(`.${className}`) !== null
    },
  },
}
</script>
<style scoped>
.qr-code {
  z-index: 1000;
  position: fixed;
  height: 500px;
  width: 30%;
  left: 35%;
  top: 3%;
  margin-top: 100px;
  background-color: #f7f7f7ff;
  display: flex;
  align-items: center;
  border-radius: 10px;
}
.dark-layout .qr-code {
  background-color: #212121ff;

}
.qrcode-btn {
  position: absolute;
  right: 15px;
  top: 15px;
}
.qr-code-content {
  margin: 140px 0% 0% 0%;
}
.qr-code-content h2 {
  color: #0665f1;
  margin: 18% 0% 0% 30px;
  text-align: center;
}
.container {
  position: relative;
  width: 200px;
  height: 200px;
}
.container::before {
  content: "";
  position: absolute;
  top: 25%;
  left: 30%;
  width: 103px;
  height: 103px;
  border-radius: 50%;
  background-size: cover;
  z-index: 0;
}
.dark-layout .container::before {
  content: "";
  position: absolute;
  top: 25%;
  left: 30%;
  width: 103px;
  height: 103px;
  border-radius: 50%;
  background-size: cover;
  z-index: 0;
}

@media only screen and (max-width: 1100px) {
  .qr-code {
  width: 80%;
  left: 10%;
}
}
</style>
