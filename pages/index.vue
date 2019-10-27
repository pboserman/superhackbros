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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { lookUpZipCode } from '~/services/medicineSearch'


export default {
  data: () => ({
    zipCode: {}
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
}
</script>

<style scoped>
.container {
  padding-top: 25vh;
}
</style>
