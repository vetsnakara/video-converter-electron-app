import { connect } from 'react-redux'

import {
  removeAllVideos,
  convertVideos
} from '../../redux/actions'

import ControlPanel from './ControlPanel'

const mapState = state => {
  const videos = Object.values(state.videos)

  const areAllCompleted = videos.every(({ completed }) => completed)
  const areSomeNotFinished = videos.some(({ progress }) => progress > 0 && progress < 100)

  return {
    areAllCompleted,
    areSomeNotFinished
  }
}

const mapDispatch = dispatch => ({
  onCancel: () => dispatch(removeAllVideos()),
  onConvert: () => dispatch(convertVideos())
})

export default connect(mapState, mapDispatch)(ControlPanel)
