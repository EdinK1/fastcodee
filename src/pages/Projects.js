import React from 'react'
import { Link } from 'react-router-dom'
import { auth, firestore } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { Spinner } from '../components'

const Projects = () => {
  const [value, loading, error] = useCollection(
    firestore
      .collection('projects')
      .where('author', '==', auth.currentUser.uid),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  )

  if (loading) return <Spinner />
  if (error) return <div>oops... {JSON.stringify(error)}</div>

  return (
    <main className='wrapper'>
      <h1 className='title'>Your projects</h1>
      <ul className='projects'>
        {value.docs.length < 1 ? (
          <>
            <h1 className='title'>No projects yet!</h1>
            <div className='create-link-wrapper'>
              <Link className='create-link' to='/create'>
                Create your first one!
              </Link>
            </div>
          </>
        ) : (
          value.docs.map(doc => {
            const { id } = doc
            const { title } = doc.data()

            return (
              <li key={id}>
                <Link className='project-title' to={`/project/${id}`}>
                  <p className='project'>{title}</p>
                </Link>
              </li>
            )
          })
        )}
      </ul>
      <footer className='total-projects'>
        <p>Total projects: {value.docs.length}</p>
      </footer>
    </main>
  )
}

export default Projects
