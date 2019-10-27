<template>
  <div>
      
    <h1><div style="margin-top:5px;" class="has-text-centered">{{pers.name}}'s Information</div></h1>
    <h2>
    <div style="margin-top:25px;">Name: {{pers.name}}</div>
    <div style="margin-top:25px;">Age: {{pers.age}}</div>
    <div style="margin-top:25px;">Gender: {{pers.gender}}</div>
    <div style="margin-top:25px;">Ethnicity: {{pers.ethnicity}}</div>
    <div style="margin-top:25px;">Country of Origin: {{pers.country_of_origin}}</div>
    <div style="margin-top:25px;">Pregnancy Status: {{pers.pregnancy_status}}</div>
    <div style="margin-top:25px;">Medical Conditions: {{pers.existing_conditions}}</div>
    </h2>
  </div>
</template>

<script>
import {db} from '~/services/firebase.js'

export default {
    layout: 'login',
    
data:() =>({
  pers: {
      name: '',
      age: '',
      gender: '',
      ethnicity: '',
      country_of_origin: '',
      pregnancy_status: '',
      existing_conditions: [],
  }}),
  methods: {
  readData() {
      let ref = db.collection('users').doc(this.user.uid)
      let snap = ref.onSnapshot(snap => {
        this.pers = snap.data().personInfo
      })   
  },
    
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
.bold {
  font-weight: bold;
}
</style>