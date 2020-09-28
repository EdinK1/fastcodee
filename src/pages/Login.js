import React, { useState } from 'react'
import { logIn } from '../firebase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    logIn(email, password)
  }
  return (
    <main className='wrapper'>
      <h1 className='title'>Welcome back!</h1>
      <form className='form' onSubmit={handleLogin}>
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
        <button type='submit'>Let's go</button>
      </form>
    </main>
  )
}

export default Login
