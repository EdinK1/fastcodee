import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from '../firebase'
import { useDocument } from 'react-firebase-hooks/firestore'
import { Editor, Spinner } from '../components'

const Project = () => {
  const { id } = useParams()

  const [value, loading, error] = useDocument(firestore.doc(`projects/${id}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  })

  const [html, setHtml] = useState()
  const [css, setCss] = useState()
  const [js, setJs] = useState()
  const [srcDoc, setSrcDoc] = useState()

  useEffect(() => {
    if (value?.data) {
      const data = value.data()
      setHtml(data.html)
      setCss(data.css)
      setJs(data.js)
    }
  }, [value])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html || ''}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, js])

  const handleSave = () => {
    firestore
      .doc(`projects/${id}`)
      .update({
        html,
        css,
        js,
        createdAt: new Date(),
      })
      .then(() => {
        alert('Updated successfully!')
      })
      .catch(error => {
        console.error('Error updating document: ', error)
      })
  }

  if (loading) return <Spinner />
  if (error) return <div>oops... {JSON.stringify(error)}</div>

  return (
    <div className='project-code'>
      <div className='save-btn-wrapper'>
        <button className='save-btn' onClick={handleSave}>
          Save
        </button>
      </div>
      <div className='pane top-pane'>
        <Editor
          language='xml'
          displayName='HTML'
          value={html}
          onChange={setHtml}
        />
        <Editor
          language='css'
          displayName='CSS'
          value={css}
          onChange={setCss}
        />
        <Editor
          language='javascript'
          displayName='JS'
          value={js}
          onChange={setJs}
        />
      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder='0'
          width='100%'
          height='100%'
        ></iframe>
      </div>
    </div>
  )
}

export default Project
