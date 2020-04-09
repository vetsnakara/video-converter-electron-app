/* global alert */

import React from 'react'
import { FaTimes as CloseIcon } from 'react-icons/fa'
import Color from 'color'

import IconButton from '../IconButton'
import Button from '../Button'

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
  progress = 0,
  completed,
  color = '#26a69a',
  compeleteElement
}) => {
  if (progress === 0) {
    return null
  }

  const percentage = `${progress}%`

  const overlayStyles = {
    width: percentage,
    backgroundColor: new Color(color).alpha(0.2).rgb().toString()
  }

  return (
    <div className={b('progress-bar')}>
      <div
        style={overlayStyles}
        className={b('progress-overlay')}
      />
      <span className={b('progress-status', { active: !completed })}>
        {compeleteElement
          ? progress < 100
            ? percentage
            : compeleteElement
          : percentage}
      </span>
    </div>
  )
}

const Video = ({
  info: {
    name,
    progress,
    convertTo,
    completed
  },
  onRemove,
  setFormat
}) => {
  const handleSelectFormat = ({ target: { value: format } }) => {
    setFormat(name, format)
  }

  return (
    <div className={b()}>
      <Progress
        progress={progress}
        completed={completed}
        compeleteElement={
          <Button
            color='#26a69a'
            className={b('open-folder-btn')}
            onClick={() => alert('Open folder on your computer')}
          >
            Open folder
          </Button>
        }
      />

      <div className={b('icon', { overlayed: completed })}>
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
