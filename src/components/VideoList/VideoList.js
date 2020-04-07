import React from 'react'

import Video from '../Video'

import './styles'
import { bem } from '../../utils'

const b = bem('video-list')

const VideoList = () => {
  return (
    <div className={b()}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  )
}

export default VideoList
