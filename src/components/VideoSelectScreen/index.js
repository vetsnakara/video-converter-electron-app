import { connect } from 'react-redux'

import { getVideoInfo } from '../../redux/actions'

import VideoSelectScreen from './VideoSelectScreen'

const mapDispatch = dispatch => ({
  addVideos: videos => dispatch(getVideoInfo(videos))
})

export default connect(null, mapDispatch)(VideoSelectScreen)
