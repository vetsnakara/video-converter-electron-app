import { connect } from 'react-redux'

import { fetchVideoInfo } from '../../redux/actions'

import VideoSelectScreen from './VideoSelectScreen'

const mapDispatch = dispatch => ({
  addVideos: videos => dispatch(fetchVideoInfo(videos))
})

export default connect(null, mapDispatch)(VideoSelectScreen)
