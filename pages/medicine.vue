<template>
  <div>
    <Title />
    <br />
    <div class="title">My Medication</div>
    <table class="table is-striped is-fullwidth is-hoverable">
      <thead>
        <th>Medicine</th>
        <th>Dosage (mg)</th>
        <th>Type</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="(medicine, index) in medicines" :key="index">
          <td>{{ medicine.name }}</td>
          <td>{{ medicine.dosage }}</td>
          <td>{{ medicine.type }}</td>
          <td>
            <span
              @click="() => removeMedicine(index)"
              class="icon is-small has-text-danger"
              ><i class="fa fa-times"
            /></span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="add-med">
      <button v-if="!addOpen" @click="addOpen = true" class="button">
        Add Medicine
      </button>
    </div>
    <form v-if="addOpen" @submit.prevent>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            v-model="newMed.name"
            class="input"
            placeholder="Enter the name of the medicine"
          />
        </div>
      </div>
      <label class="label">Dosage</label>
      <div class="field has-addons">
        <p class="control">
          <input
            v-model="newMed.dosage"
            class="input"
            type="text"
            placeholder="Enter a dosage"
          />
        </p>
        <p class="control">
          <a class="button is-static">
            mg
          </a>
        </p>
      </div>
      <div class="field">
        <label class="label">Type</label>
        <p class="control">
          <input
            v-model="newMed.type"
            class="input"
            type="text"
            placeholder="Enter a type"
          />
        </p>
      </div>
      <div class="buttons">
        <button @click="addMedicine" class="button is-left is-link">Add</button>
        <button @click="addOpen = false" class="button is-right">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from '~/services/firebase.js'
import Title from '~/components/Title.vue'

export default {
  components: {
    Title
  },
  data: () => ({
    medicines: [],
    newMed: {
      name: '',
      type: '',
      dosage: 0
    },
    addOpen: false
  }),
  methods: {
    readData() {
      let ref = db.collection('users').doc(this.user.uid)
      let snap = ref.onSnapshot(snap => {
        this.medicines = snap.data().medicines
      })
    },
    addMedicine() {
      let medicine = this.newMed
      medicine.name = medicine.name.replace(/^\w/, c => c.toUpperCase())
      medicine.type = medicine.type.toUpperCase()
      this.medicines.push(medicine)
      let ref = db
        .collection('users')
        .doc(this.user.uid)
        .set({ medicines: this.medicines }, { merge: true })
      this.newMed = {
        name: '',
        dosage: 0,
        type: ''
      }
      this.addOpen = false
    },
    removeMedicine(idx) {
      this.medicines.splice(idx, 1)
      db.collection('users')
        .doc(this.user.uid)
        .set({ medicines: this.medicines }, { merge: true })
    }
  },
  mounted() {
    this.readData()
  },
  computed: {
    user() {
      return this.$store.state.users.user
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 50px;
  padding-bottom: 100px;
}
tr .icon {
  cursor: pointer;
}
form {
  padding-left: 2%;
  padding-right: 2%;
}
.add-med {
  padding-left: 2%;
}
</style>
