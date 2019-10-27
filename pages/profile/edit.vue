<template>
  <div class="edit-profile">
    <div class="title has-text-centered">Edit Profile</div>
    <form @submit.prevent>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            v-model="newPers.name"
            class="input"
            type="text"
            placeholder="Full Name"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Age</label>
        <div class="control">
          <input
            v-model="newPers.age"
            class="input"
            type="Integer"
            placeholder="Age"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Gender</label>
        <div class="control">
          <div class="select">
            <select v-model="newPers.gender">
              <option>Male</option>
              <option>Female</option>
              <option>I'd Prefer Not To Say</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Ethnicity</label>
        <div class="control">
          <div class="select">
            <select v-model="newPers.ethnicity">
              <option v-for="(e, index) in ethnicities" :key="index">{{
                e
              }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Country of Origin</label>
        <div class="control">
          <div class="select">
            <select v-model="newPers.country_of_origin">
              <option v-for="(c, index) in countries" :key="index">{{
                c
              }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Pregnancy Status</label>
        <div class="control">
          <div class="select">
            <select v-model="newPers.pregnancy_status">
              <option>Not Pregnant</option>
              <option>Pregnant</option>
              <option>I'd Prefer Not To Say</option>
            </select>
          </div>
        </div>
      </div>
      <div class="select is-multiple">
        <label class="label">Existing Conditons</label>
        <select v-model="newPers.existing_conditions" multiple size="6">
          <option v-for="(c, index) in conditions" :key="index">{{ c }}</option>
        </select>
      </div>
      <div class="submit level is-mobile">
        <div class="level-item">
          <button type="submit" @click="addUser" class="button is-link">
            Submit
          </button>
        </div>
        <div class="level-item">
          <nuxt-link to="/profile" class="button is-outlined">
            Cancel
          </nuxt-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from '~/services/firebase.js'
export default {
  layout: 'profile',
  data: () => ({
    //#region

    ethnicities: [
      'African American',
      'Asian',
      'Hispanic or Latino',
      'Multiracial',
      'Native American',
      'White'
    ],
    conditions: [
      'ADHD',
      'Arthritis',
      'Asthma',
      'Autism',
      'Cancer',
      'Chlamydia',
      'Chronic Fatigue Syndrome',
      'COPD',
      'Diabetes',
      'Ebola',
      'Epilepsy',
      'Hepatitis',
      'Salmonella',
      'STI',
      'TB'
    ],
    countries: [
      'Afghanistan',
      'Albania',
      'Algeria',
      'American Samoa',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antarctica',
      'Antigua And Barbuda',
      'Argentina',
      'Armenia',
      'Aruba',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bermuda',
      'Bhutan',
      'Bolivia',
      'Bosnia And Herzegovina',
      'Botswana',
      'Bouvet Island',
      'Brazil',
      'British Indian Ocean Territory',
      'Brunei Darussalam',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cambodia',
      'Cameroon',
      'Canada',
      'Cape Verde',
      'Cayman Islands',
      'Central African Republic',
      'Chad',
      'Chile',
      'China',
      'Christmas Island',
      'Cocos (keeling) Islands',
      'Colombia',
      'Comoros',
      'Congo',
      'Congo, The Democratic Republic Of The',
      'Cook Islands',
      'Costa Rica',
      "Cote D'ivoire",
      'Croatia',
      'Cuba',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic',
      'East Timor',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Eritrea',
      'Estonia',
      'Ethiopia',
      'Falkland Islands (malvinas)',
      'Faroe Islands',
      'Fiji',
      'Finland',
      'France',
      'French Guiana',
      'French Polynesia',
      'French Southern Territories',
      'Gabon',
      'Gambia',
      'Georgia',
      'Germany',
      'Ghana',
      'Gibraltar',
      'Greece',
      'Greenland',
      'Grenada',
      'Guadeloupe',
      'Guam',
      'Guatemala',
      'Guinea',
      'Guinea-bissau',
      'Guyana',
      'Haiti',
      'Heard Island And Mcdonald Islands',
      'Holy See (vatican City State)',
      'Honduras',
      'Hong Kong',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran, Islamic Republic Of',
      'Iraq',
      'Ireland',
      'Israel',
      'Italy',
      'Jamaica',
      'Japan',
      'Jordan',
      'Kazakstan',
      'Kenya',
      'Kiribati',
      "Korea, Democratic People's Republic Of",
      'Korea, Republic Of',
      'Kosovo',
      'Kuwait',
      'Kyrgyzstan',
      "Lao People's Democratic Republic",
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libyan Arab Jamahiriya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Macau',
      'Macedonia, The Former Yugoslav Republic Of',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Marshall Islands',
      'Martinique',
      'Mauritania',
      'Mauritius',
      'Mayotte',
      'Mexico',
      'Micronesia, Federated States Of',
      'Moldova, Republic Of',
      'Monaco',
      'Mongolia',
      'Montserrat',
      'Montenegro',
      'Morocco',
      'Mozambique',
      'Myanmar',
      'Namibia',
      'Nauru',
      'Nepal',
      'Netherlands',
      'Netherlands Antilles',
      'New Caledonia',
      'New Zealand',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'Niue',
      'Norfolk Island',
      'Northern Mariana Islands',
      'Norway',
      'Oman',
      'Pakistan',
      'Palau',
      'Palestinian Territory, Occupied',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines',
      'Pitcairn',
      'Poland',
      'Portugal',
      'Puerto Rico',
      'Qatar',
      'Reunion',
      'Romania',
      'Russian Federation',
      'Rwanda',
      'Saint Helena',
      'Saint Kitts And Nevis',
      'Saint Lucia',
      'Saint Pierre And Miquelon',
      'Saint Vincent And The Grenadines',
      'Samoa',
      'San Marino',
      'Sao Tome And Principe',
      'Saudi Arabia',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Slovakia',
      'Slovenia',
      'Solomon Islands',
      'Somalia',
      'South Africa',
      'South Georgia And The South Sandwich Islands',
      'Spain',
      'Sri Lanka',
      'Sudan',
      'Suriname',
      'Svalbard And Jan Mayen',
      'Swaziland',
      'Sweden',
      'Switzerland',
      'Syrian Arab Republic',
      'Taiwan, Province Of China',
      'Tajikistan',
      'Tanzania, United Republic Of',
      'Thailand',
      'Togo',
      'Tokelau',
      'Tonga',
      'Trinidad And Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Turks And Caicos Islands',
      'Tuvalu',
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'United Kingdom',
      'United States',
      'United States Minor Outlying Islands',
      'Uruguay',
      'Uzbekistan',
      'Vanuatu',
      'Venezuela',
      'Vietnam',
      'Virgin Islands, British',
      'Virgin Islands, U.S.',
      'Wallis And Futuna',
      'Western Sahara',
      'Yemen',
      'Zambia',
      'Zimbabwe'
    ],
    //#endregion
    newPers: {
      name: '',
      age: '',
      gender: '',
      ethnicity: '',
      country_of_origin: '',
      pregnancy_status: '',
      existing_conditions: []
    },
    isError: false,
    errMsg: ''
  }),
  methods: {
    submit() {
      this.$store.dispatch('users/login', this.newPers).catch(error => {
        this.isError = true
        this.errMsg = error.code

        setTimeout(() => {
          this.isError = false
        }, 5000)
      })

      this.$router.push('/')
    },

    addUser() {
      let person = this.newPers
      person.name = person.name.replace(/^\w/, c => c.toUpperCase())
      //person.type = person.type.toUpperCase()

      let ref = db
        .collection('users')
        .doc(this.user.uid)
        .set({ personInfo: this.newPers }, { merge: true })
      this.newPers = {
        name: '',
        age: '',
        gender: '',
        ethnicity: '',
        country_of_origin: '',
        pregnancy_status: '',
        existing_conditions: []
      }
      this.addOpen = false
      this.submit()
    }
  },
  // mounted() {
  //   this.readData()
  // },
  computed: {
    user() {
      return this.$store.state.users.user
    }
  }
}
</script>

<style scoped>
.submit {
  padding-top: 20px;
}
</style>
