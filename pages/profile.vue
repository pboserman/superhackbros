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
<<<<<<< HEAD
            <qrcode-vue :value="value" :size="size" level="H" class="center"></qrcode-vue>
=======
            <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
>>>>>>> 41601879a7d16e789b4cfe62af7302a58cedfc23
    </div>
              
            
    
    

  
    
    
  </div>
</template>


<script>
import {db} from '~/services/firebase.js'
import QrcodeVue from 'qrcode.vue'

export default {
data:() =>({
  value: 'http://localhost:3000/profile',
  size: 250,
  
  pers: {
      name: '',
      age: '',
      gender: '',
      ethnicity: '',
      country_of_origin: '',
      pregnancy_status: '',
      existing_conditions: [],
<<<<<<< HEAD
=======
      value: 'http://localhost:3000/profile',
      size: 300,
>>>>>>> 41601879a7d16e789b4cfe62af7302a58cedfc23
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

<style>
.center {
  float: right;
  
  margin-left: auto;
  margin-right: auto;
  width: 81%;
  box-sizing: border-box;
}
</style>