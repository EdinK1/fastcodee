import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import logo from '../assets/logo.svg'

const Nav = ({ loggedIn }) => {
  return (
    <header className='header'>
      <nav>
        <ul className='nav'>
          <Link to={loggedIn ? '/create' : '/welcome'}>
            <div className='brand'>
              <img className='brand-logo' src={logo} alt='logo' />
              <span className='brand-name'>Fastcode</span>
            </div>
          </Link>
          {loggedIn ? (
            <div className='nav-logged'>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
              <li>
                <button className='logout-btn' onClick={() => auth.signOut()}>
                  Log Out
                </button>
              </li>
            </div>
          ) : (
            <li>
              <Link to='/login'>Log In</Link>
              <span className='seperator'> or </span>
              <Link to='/signup'>Sign Up</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
