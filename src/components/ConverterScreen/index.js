import { connect } from 'react-redux'

import {
  fetchVideoInfo,
  removeVideo
} from '../../redux/actions'

import ConverterScreen from './ConverterScreen'

const mapState = state => ({
  videos: Object.values(state.videos)
})

const mapDispatch = dispatch => ({
  addVideos: videos => dispatch(fetchVideoInfo(videos)),
  removeVideo: path => dispatch(removeVideo(path))
})

export default connect(mapState, mapDispatch)(ConverterScreen)
