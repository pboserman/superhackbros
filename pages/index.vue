<template>
  <div class="container">
    <Title show-welcome />
    <br />
    <div class="columns is-centered is-mobile">
      <div class="column is-two-thirds is-vcentered is-mobile">
        <div class="subtitle is-6 has-text-weight-bold">
          Search for Medicine Near You
        </div>
        <div class="field has-addons">
          <div class="control">
            <input
              v-model="medicine"
              class="input is-small"
              type="text"
              placeholder="Look for medicine"
            />
          </div>
          <div class="control">
            <a @click="getMedicine" class="button is-info is-small">
              Search
            </a>
          </div>
        </div>
      </div>
    </div>
    <table
      class="table is-fullwidth is-striped is-hoverable"
      v-if="results.length"
    >
      <thead>
        <th>Store</th>
        <th>Price</th>
        <th>Count</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in results" :key="idx">
          <td>{{ item.source }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.count }}</td>
          <td>
            <a
              target="_blank"
              :href="item.link"
              class="button is-small is-link is-outlined"
            >
              Directions
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  getMedicineNearMe,
  getStoreCoordinates
} from '~/services/medicineSearch'
import Title from '~/components/Title.vue'

export default {
  components: { Title },
  data: () => ({
    zipCode: null,
    medicine: '',
    results: [],
    coords: []
  }),
  methods: {
    getMedicine() {
      getMedicineNearMe(this.medicine).then(locations => {
        locations = locations.data
        Promise.all(
          locations.map(i => {
            return getStoreCoordinates(i.source)
          })
        ).then(values => {
          locations.forEach((loc, i) => {
            loc.link = `https://www.google.com/maps/place/${values[i].data}`
          })
          this.results = locations
        })
      })
    }
  }
}
</script>

<style scoped></style>
