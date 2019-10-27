<template>
  <div class="container">
    <div class="columns is-centered is-mobile">
      <div class="column is-two-thirds is-vcentered is-mobile">
        <div class="title">Search</div>
        <div class="field has-addons">
          <div class="control">
            <input
              class="input is-small"
              type="text"
              placeholder="Look for medicine"
            />
          </div>
          <div class="control">
            <a class="button is-info is-small">
              Search
            </a>
          </div>
          <div>{{ zipCode }}</div>
          <div>
            <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { lookUpZipCode } from '~/services/medicineSearch'
import QrcodeVue from 'qrcode.vue'

export default {
  data: () => ({
    zipCode: {},
    value: 'http://localhost:3000/profile',
    size: 300,
  }),
  methods: {
    getZipCode() {
      lookUpZipCode().then(zip => {
        this.zipCode = zip
        console.log(zip)
      })
    }
  },
  mounted() {
    this.getZipCode()
  },
  components: {
    QrcodeVue,
  },
}
</script>

<style scoped>
.container {
  padding-top: 25vh;
}
</style>
