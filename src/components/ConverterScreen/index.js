import { connect } from 'react-redux'

import {
  getVideoInfo
} from '../../redux/actions'

import ConverterScreen from './ConverterScreen'

const mapDispatch = dispatch => ({
  addVideos: videos => dispatch(getVideoInfo(videos))
})

export default connect(null, mapDispatch)(ConverterScreen)
