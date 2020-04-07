import React from 'react'

import { bem } from '../../utils'
import './styles'

import Button from '../Button'

const b = bem('control-panel')

const ControlPanel = () => {
  return (
    <div className={b()}>
      <Button>
        Convert
      </Button>
      <Button>
        Cancel
      </Button>
    </div>
  )
}

export default ControlPanel
