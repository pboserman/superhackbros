<template>
  <div>
    <h1 v-if="exists">
      <div style="margin-top:5px;" class="has-text-centered">
        {{ pers.name }}'s Information
      </div>
    </h1>
    <h1 v-if="!exists">
      <div style="margin-top:5px;" class="has-text-centered">
        No data found for this patient
      </div>
    </h1>
    <div v-if="exists" class="user-info">
      <div>
        <span class="has-text-weight-bold">Name: </span
        ><span>{{ pers.name }}</span>
      </div>
      <div>
        <span class="has-text-weight-bold">Age: </span
        ><span>{{ pers.age }}</span>
      </div>
      <div>
        <span class="has-text-weight-bold">Gender: </span
        ><span>{{ pers.gender }}</span>
      </div>
      <div>
        <span class="has-text-weight-bold">Ethnicity: </span
        ><span>{{ pers.ethnicity }}</span>
      </div>
      <div>
        <span class="has-text-weight-bold">Country of Origin: </span
        ><span>{{ pers.country_of_origin }}</span>
      </div>
      <div>
        <span class="has-text-weight-bold">Pregnancy Status: </span
        ><span>{{ pers.pregnancy_status }}</span>
      </div>
      <div>
        <span class="has-text-weight-bold">Medical Conditions: </span
        ><span>{{ pers.existing_conditions.join(', ') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '~/services/firebase.js'
export default {
  layout: 'login',

  data: () => ({
    pers: {
      name: '',
      age: '',
      gender: '',
      ethnicity: '',
      country_of_origin: '',
      pregnancy_status: '',
      existing_conditions: []
    },
    exists: true
  }),
  methods: {
    readData() {
      let ref = db.collection('qr').doc(this.$route.query.id)
      let snap = ref.onSnapshot(snap => {
        if (snap.exists) {
          this.exists = true
          this.pers = snap.data()
        } else {
          this.exists = false
        }
      })
    }
  },
  mounted() {
    this.readData()
  }
}
</script>

<style scoped>
.bold {
  font-weight: bold;
}
.user-info {
  padding-left: 10px;
  padding-top: 30px;
}
.user-info div {
  padding-bottom: 20px;
}
</style>
