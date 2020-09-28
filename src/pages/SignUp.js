import React, { useState } from 'react'
import { signUp } from '../firebase'

const SignUp = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = e => {
    e.preventDefault()
    signUp(userName, email, password)
  }

  return (
    <main className='wrapper'>
      <h1 className='title'>First time? Welcome!</h1>
      <form className='form' onSubmit={handleSignUp}>
        <input
          type='text'
          value={userName}
          placeholder='Your username'
          onChange={e => setUserName(e.target.value)}
          required
        />
        <input
          type='text'
          value={email}
          placeholder='Your email'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          value={password}
          placeholder='Your password'
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Create Account</button>
      </form>
    </main>
  )
}

export default SignUp
