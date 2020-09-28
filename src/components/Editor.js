import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/xq-dark.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

const Editor = ({ displayName, language, value, onChange }) => {
  const [open, setOpen] = useState(true)

  const handleChange = (editor, data, value) => {
    onChange(value)
  }

  return (
    <div className={`editor-wrapper ${open ? '' : 'collapsed'}`}>
      <div className='editor-title'>
        {displayName}
        <button onClick={() => setOpen(s => !s)}>O/C</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'xq-dark',
          lineNumbers: true,
        }}
      />
    </div>
  )
}

export default Editor
