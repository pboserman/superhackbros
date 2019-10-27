<template>
  <div>
    <div class="title has-text-centered">Personal QR Code</div>
    <div class="level qr-code">
      <qrcode-vue
        :value="value"
        :size="size"
        level="H"
        class="level-item"
      ></qrcode-vue>
    </div>
    <p class="help has-text-centered">
      Show your hospital this QR Code to get you patient history filled out
      automatically
    </p>
    <br />
    <div class="level is-mobile is-spaced">
      <nuxt-link class="level-item" to="/profile">
        <button type="submit" class="button is-outlined has-text-weight-bold">
          Return
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { db } from '~/services/firebase.js'
import QrcodeVue from 'qrcode.vue'

export default {
  layout: 'profile',
  data: () => ({
    value: 'http://localhost:3000/profile',
    size: 250,

    pers: {
      name: '',
      age: '',
      gender: '',
      ethnicity: '',
      country_of_origin: '',
      pregnancy_status: '',
      existing_conditions: []
    }
  }),
  components: {
    QrcodeVue
  },
  computed: {
    user() {
      return this.$store.state.users.user
    }
  }
}
</script>

<style scoped>
.qr-code {
  padding-top: 50px;
}
</style>
