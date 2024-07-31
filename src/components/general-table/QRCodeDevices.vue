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
        class="qr-code-content px-1 py-1"
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
        <h4>
          {{ itemSerialNumber }}
        </h4>
      </div>
      <div style="display: flex; align-items: center; justify-content: center">
        <b-btn @click="downloadQRCode">
          Download QR Code
        </b-btn>
      </div>
    </b-card>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import html2canvas from 'html2canvas'

export default {
  components: {
    QrcodeVue,
  },
  props: {
    itemId: {
      type: String,
      default: () => 0,
    },
    itemName: {
      type: String,
      default: () => '',
    },
    itemSerialNumber: {
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
    downloadQRCode() {
      html2canvas(this.$refs.qrCode).then(canvas => {
        const link = document.createElement('a')
        link.href = canvas.toDataURL('image/png')
        link.download = `${this.itemName}-QRCode.png`
        link.click()
      })
    },
  },
}
</script>

<style scoped>
.qr-code {
  z-index: 1000;
  position: fixed;
  height: auto;
  width: auto;
  left: 40%;
  top: 20%;
  padding: 5vh 5vw;
  /* margin-top: 100px; */
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
  margin: 5vh 0% 0% 0%;
}
.qr-code-content h2,
h4 {
  color: #0665f1;
  margin: 4% 0px !important;
  text-align: center;
}
.container {
  position: relative;
  width: auto;
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
