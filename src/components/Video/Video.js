import React from 'react'
import { FaTimes as CloseIcon } from 'react-icons/fa'
import Color from 'color'

import IconButton from '../IconButton'

import './styles'
import { bem } from '../../utils'

const b = bem('video')

const VIDEO_FORMATS = [
  { value: 'avi', option: 'AVI' },
  { value: 'm4v', option: 'M4V raw MPEG-4' },
  { value: 'mov', option: 'MOV / QuickTime' },
  { value: 'mp4', option: 'MP4 / QuickTime' },
  { value: 'mpeg', option: 'MPEG' },
  { value: 'ogv', option: 'OGV' }
]

const Progress = ({
  completed = 0,
  color = '#26a69a'
}) => {
  if (completed === 0) {
    return null
  }

  const styles = {
    width: `${completed}%`,
    backgroundColor: new Color(color).alpha(0.2).rgb().toString()
  }

  return (
    <div className={b('progress')}>
      <div
        style={styles}
        className={b('progress-overlay')}
      />
      <span className={b('progress-completed')}>{`${completed}%`}</span>
    </div>
  )
}

const Video = ({
  info: { name, progress, convertTo },
  onRemove,
  setFormat
}) => {
  const handleSelectFormat = ({ target: { value: format } }) => {
    setFormat(name, format)
  }

  return (
    <div className={b()}>
      <Progress completed={progress} />
      <div className={b('icon')}>
        <IconButton
          component={CloseIcon}
          color='orangered'
          onClick={onRemove}
        />
      </div>
      <div className={b('info')}>
        <h4 className={b('title')}>{name}</h4>
        <p className={b('duration')}>Duration: 11:22:33</p>
      </div>
      <div className={b('controls')}>
        <select
          className={b('formats')}
          value={convertTo}
          onChange={handleSelectFormat}
        >
          {VIDEO_FORMATS.map(format => (
            <option
              key={format.value}
              value={format.value}
            >
              {format.option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Video
