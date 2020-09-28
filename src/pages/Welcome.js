import React from 'react'
import { Link } from 'react-router-dom'

import techLogo from '../assets/tech-logo.png'

const Welcome = () => {
  return (
    <main className='wrapper'>
      <section className='hero'>
        <h1 className='title'>Web Development Made Easy.</h1>
        <p className='lead'>Get your ideas up and running in seconds.</p>

        <section className='techs'>
          <img src={techLogo} alt='technologies' />
        </section>

        <section className='cta'>
          <Link className='cta-button' to='/signup'>
            Let's get started
          </Link>
        </section>
      </section>
    </main>
  )
}

export default Welcome
