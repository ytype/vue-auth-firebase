import * as firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyAe0XvH7MIsFbJdZE7T4sTukSla_ODxUVA',
  authDomain: 'vue-auth-a4964.firebaseapp.com',
  databaseURL: 'https://vue-auth-a4964.firebaseio.com',
  projectId: 'vue-auth-a4964',
  storageBucket: 'vue-auth-a4964.appspot.com',
  messagingSenderId: '750312755273',
  appId: '1:750312755273:web:c3b494b6bbdf618ce0af98',
  measurementId: 'G-T5G9H0M1MD'
})
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    this.$store.dispatch('autoSignIn', user)
  }
})
// eslint-disable-next-line no-console
console.log('init firebase')
