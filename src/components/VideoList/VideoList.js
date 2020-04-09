import React from 'react'
import { useHistory } from 'react-router-dom'

import Video from '../Video'

import './styles'
import { bem } from '../../utils'

const b = bem('video-list')

const VideoList = ({
  videos,
  onRemove
}) => {
  const history = useHistory()

  React.useEffect(() => {
    if (videos.length === 0) {
      history.push('/')
    }
  }, [videos])

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
