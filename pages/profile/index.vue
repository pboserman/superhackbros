<template>
  <div>
    <h1><div class="title has-text-centered">User Information</div></h1>
    <div class="user-info">
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
    <br />
    <div class="level is-mobile is-spaced">
      <nuxt-link class="level-item" to="/profile/edit">
        <button
          type="submit"
          class="button is-info is-outlined has-text-weight-bold"
        >
          Edit
        </button>
      </nuxt-link>
      <nuxt-link class="level-item" to="/profile/qr">
        <button type="submit" class="button is-outlined has-text-weight-bold">
          QR Code
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { db } from '~/services/firebase.js'

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
  methods: {
    readData() {
      let ref = db.collection('users').doc(this.user.uid)
      let snap = ref.onSnapshot(snap => {
        this.pers = snap.data().personInfo
      })
    }
  },
  computed: {
    user() {
      return this.$store.state.users.user
    }
  },
  mounted() {
    this.readData()
  }
}
</script>

<style>
.center {
  float: right;

  margin-left: auto;
  margin-right: auto;
  width: 81%;
  box-sizing: border-box;
}
.user-info {
  padding-left: 10px;
  padding-top: 30px;
}
.user-info div {
  padding-bottom: 20px;
}
</style>
