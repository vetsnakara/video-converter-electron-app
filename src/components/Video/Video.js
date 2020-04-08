import React from 'react'
import { FaTimes as CloseIcon } from 'react-icons/fa'
import Color from 'color'

import IconButton from '../IconButton'

import './styles'
import { bem } from '../../utils'

const b = bem('video')

const Progress = ({
  completed = 0,
  color = 'green'
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
  info: { name, completed },
  onRemove
}) => {
  return (
    <div className={b()}>
      <Progress completed={completed} />
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
        <select className={b('formats')}>
          <option>AVI</option>
          <option>MPEG</option>
          <option>AVC</option>
        </select>
      </div>
    </div>
  )
}

export default Video
