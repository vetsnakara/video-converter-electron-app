import React from 'react'
import { useDropzone } from 'react-dropzone'
import cn from 'classnames'

import './styles'

const Dropzone = ({ onSelect }) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject
  } = useDropzone({
    accept: 'video/*',
    onDrop: acceptedFiles => {
      if (acceptedFiles.length > 0) {
        onSelect(acceptedFiles)
      }
    }
  })

  const renderChildren = React.useCallback(() => {
    if (isDragReject) {
      return <h4>Uh oh, I don't know how to deal with that type of file!</h4>
    } else if (isDragActive) {
      return <h4>Omnomnom, let me have those videos!</h4>
    }

    return <h4>Drag and drop some files on me, or click to select.</h4>
  }, [isDragActive, isDragReject])

  return (
    <div {...getRootProps({
      className: cn(
        'dropzone',
        { 'dropzone--active': isDragActive },
        { 'dropzone--reject': isDragReject }
      )
    })}
    >
      <input {...getInputProps()} />
      {renderChildren()}
    </div>
  )
}

export default Dropzone
