import React from 'react'
import { withRouter } from 'react-router-dom'

import Dropzone from '../Dropzone'
import Container from '../Container'

const VideoSelectScreen = ({ history }) => {
  const handleSelect = selectedFiles => {
    history.push('/convert')
  }

  return (
    <Container>
      <Dropzone onSelect={handleSelect} />
    </Container>
  )
}

export default withRouter(VideoSelectScreen)
