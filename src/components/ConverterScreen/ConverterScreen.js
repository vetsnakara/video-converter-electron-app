import React from 'react'

import Container from '../Container'
import Dropzone from '../Dropzone'
import VideoList from '../VideoList'
import ControlPanel from '../ControlPanel'

import { bem } from '../../utils'
import './styles'

const b = bem('converter')

const ConverterScreen = () => {
  return (
    <Container>
      <div className={b()}>
        <section className={b('select')}>
          <Dropzone />
        </section>
        <section className={b('video-list')}>
          <VideoList />
        </section>
        <section className={b('control-panel')}>
          <ControlPanel />
        </section>
      </div>
    </Container>
  )
}

export default ConverterScreen
