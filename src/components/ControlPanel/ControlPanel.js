import React from 'react'
import { useHistory } from 'react-router-dom'

import { bem } from '../../utils'
import './styles'

import Button from '../Button'

const b = bem('control-panel')

const ControlPanel = ({
  onConvert,
  onCancel
}) => {
  const history = useHistory()

  const handleCancel = () => {
    onCancel()
    history.push('/')
  }

  return (
    <div className={b()}>
      <Button
        color='#26a69a'
        onClick={onConvert}
      >
        Convert
      </Button>
      <Button
        color='orangered'
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </div>
  )
}

export default ControlPanel
