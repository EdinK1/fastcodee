import { auth } from './firebase'

const logIn = (email, password) => {
  auth.signInWithEmailAndPassword(email, password).catch(error => {
    if (error.code === 'auth/invalid-email') {
      alert('Invalid email!')
    }

    if (error.code === 'auth/wrong-password') {
      alert('Wrong password!')
    }

    if (error.code === 'auth/user-not-found') {
      alert('No user was found with the given email!')
    }

    console.error(error)
  })
}

export default logIn
