import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyBhp2xyMEjipuBXQIqU7fL8c1Wq2RP9gZM',
  authDomain: 'fastcode-3ea61.firebaseapp.com',
  databaseURL: 'https://fastcode-3ea61.firebaseio.com',
  projectId: 'fastcode-3ea61',
  storageBucket: 'fastcode-3ea61.appspot.com',
  messagingSenderId: '753035423742',
  appId: '1:753035423742:web:b348a0f07bb585c1c49aaf',
})

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore }
