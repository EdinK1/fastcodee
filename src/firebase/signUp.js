import { auth } from './firebase'

const signUp = (userName, email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      if (auth.currentUser) {
        auth.currentUser.updateProfile({
          displayName: userName,
        })
      }
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        alert('That email address is already in use!')
      }

      if (error.code === 'auth/invalid-email') {
        alert('That email address is invalid!')
      }
      console.error(error)
    })
}

export default signUp
