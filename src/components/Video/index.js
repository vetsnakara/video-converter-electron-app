import { connect } from 'react-redux'

import {
  setFormat
} from '../../redux/actions'

import Video from './Video'

const mapDispatch = dispatch => ({
  setFormat: (path, format) => dispatch(setFormat(path, format))
})

export default connect(null, mapDispatch)(Video)
