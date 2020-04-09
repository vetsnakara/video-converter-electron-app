import React from 'react'
import { useHistory } from 'react-router-dom'

import { bem } from '../../utils'
import './styles'

import Button from '../Button'

const b = bem('control-panel')

const ControlPanel = ({
  onConvert,
  onCancel,
  areAllCompleted,
  areSomeNotFinished
}) => {
  const history = useHistory()

  const handleCancel = () => {
    onCancel()
    history.push('/')
  }

  return (
    <div className={b()}>
      <Button
        onClick={onConvert}
        disabled={areAllCompleted || areSomeNotFinished}
        type='success'
      >
        Convert
      </Button>
      <Button
        onClick={handleCancel}
        disabled={areSomeNotFinished}
        type='danger'
      >
        Cancel
      </Button>
    </div>
  )
}

export default ControlPanel
