import React from 'react'

import Dropzone from '../Dropzone'

const VideoSelectScreen = () => {
  const handleSelect = selectedFiles => {
    console.log('selectedFiles:', selectedFiles)
  }

  return <Dropzone onSelect={handleSelect} />
}

export default VideoSelectScreen
