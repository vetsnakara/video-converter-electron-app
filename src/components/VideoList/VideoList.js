import React from 'react'

import Video from '../Video'

import './styles'
import { bem } from '../../utils'

const b = bem('video-list')

const VideoList = ({
  videos,
  onRemove
}) => {
  return (
    <div className={b()}>
      {videos.map(video => (
        <Video
          key={video.path}
          info={video}
          onRemove={() => onRemove(video.path)}
        />
      ))}
    </div>
  )
}

export default VideoList
