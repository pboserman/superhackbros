import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'

const config = {
  apiKey: 'AIzaSyC8JySEcaBYAiS0HUk0CWkkhUM11cwrixM',
  authDomain: 'superhackbros-b8a46.firebaseapp.com',
  databaseURL: 'https://superhackbros-b8a46.firebaseio.com',
  projectId: 'superhackbros-b8a46',
  storageBucket: 'superhackbros-b8a46.appspot.com',
  messagingSenderId: '1003110864941',
  appId: '1:1003110864941:web:40df1cc0d4fa1a5c6240a4',
  measurementId: 'G-WLN5JJM3V9'
}

!firebase.apps.length ? firebase.initializeApp(config) : ''

export const auth = firebase.auth()
export const db = firebase.firestore()
export const functions = firebase.functions()
