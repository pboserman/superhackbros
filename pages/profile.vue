<template>
  <div>
      
    <h1><div class="has-text-centered">User Information</div></h1>
    <h2>
    <div>Name: {{pers.name}}</div>
    <div>Age: {{pers.age}}</div>
    <div>Gender: {{pers.gender}}</div>
    <div>Ethnicity: {{pers.ethnicity}}</div>
    <div>Country of Origin: {{pers.country_of_origin}}</div>
    <div>Pregnancy Status: {{pers.pregnancy_status}}</div>
    <div>Medical Conditions: {{pers.existing_conditions}}</div>
    </h2>
    <div class= "box has text-centered">
    <nuxt-link to="/profilePage">
    <button type="submit"  class="button is-primary">
              Edit</button>
              </nuxt-link>
              </div>
    <div>
            <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
    </div>
              
            
    
    

  
    
    
  </div>
</template>


<script>
import {db} from '~/services/firebase.js'
import QrcodeVue from 'qrcode.vue'

export default {
  
data:() =>({pers: {
      name: '',
      age: '',
      gender: '',
      ethnicity: '',
      country_of_origin: '',
      pregnancy_status: '',
      existing_conditions: [],
      value: 'http://localhost:3000/profile',
      size: 300,
  }}),
  methods: {
  readData() {
      let ref = db.collection('users').doc(this.user.uid)
      let snap = ref.onSnapshot(snap => {
        this.pers = snap.data().personInfo
      })   
  },
    
  },
  components: {
    QrcodeVue,
  },
  computed: {
    user() {
      
      return this.$store.state.users.user
    }
  },
  mounted(){
    this.readData()
  }

}
</script>