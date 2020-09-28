import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  Welcome,
  Login,
  SignUp,
  Projects,
  Project,
  CreateProject,
} from '../pages'
import { Spinner, Nav } from '../components'

const Router = () => {
  const [user, loading, error] = useAuthState(auth)
  if (loading) return <Spinner />
  if (error) return <div>oops... {error}</div>

  return (
    <BrowserRouter>
      <Nav loggedIn={user} />
      <Switch>
        {user ? (
          <>
            <Route path='/signup'>
              <Redirect to='/create' />
            </Route>
            <Route path='/login'>
              <Redirect to='/create' />
            </Route>
            <Route path='/projects'>
              <Projects />
            </Route>
            <Route path='/project/:id'>
              <Project />
            </Route>
            <Route path='/create'>
              <CreateProject />
            </Route>
          </>
        ) : (
          <>
            <Route path='/'>
              <Redirect to='/welcome' />
            </Route>
            <Route path='/welcome'>
              <Welcome />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  )
}

export default Router
