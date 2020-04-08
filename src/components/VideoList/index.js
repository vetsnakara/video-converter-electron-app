import { connect } from 'react-redux'

import {
  removeVideo
} from '../../redux/actions'

import VideoList from './VideoList'

const mapState = state => ({
  videos: Object.values(state.videos)
})

const mapDispatch = dispatch => ({
  onRemove: path => dispatch(removeVideo(path))
})

export default connect(mapState, mapDispatch)(VideoList)
