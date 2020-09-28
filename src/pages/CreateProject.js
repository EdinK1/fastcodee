import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth, firestore } from '../firebase'

const CreateProject = () => {
  const [title, setTitle] = useState('')
  let history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()

    firestore
      .collection('projects')
      .add({
        title,
        html: `<h3>Hello, World </h3>\n<p>Start editing to see some magic happen!</p>`,
        css: 'p { color: green }',
        js: "document.querySelector('h3').style.fontStyle = 'italic' ",
        createdAt: new Date(),
        author: auth.currentUser.uid,
      })
      .then(docRef => {
        history.push(`/project/${docRef.id}`)
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
      })
  }

  return (
    <main className='wrapper'>
      <h2 className='title'>Got an idea? Go wild!</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Your project title'
          required
        />
        <button type='submit'>Create Project</button>
      </form>
    </main>
  )
}

export default CreateProject
