import React from 'react'
import { useHistory } from 'react-router-dom'

import Dropzone from '../Dropzone'
import Container from '../Container'

const VideoSelectScreen = ({
  addVideos
}) => {
  const history = useHistory()

  const handleSelect = selectedFiles => {
    const videos = selectedFiles.map(
      ({ name, path, size, type }) => ({ name, path, size, type })
    )

    addVideos(videos)

    history.push('/convert')
  }

  return (
    <Container>
      <Dropzone onSelect={handleSelect} />
    </Container>
  )
}

export default VideoSelectScreen
