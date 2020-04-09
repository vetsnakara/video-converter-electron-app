import { connect } from 'react-redux'

import {
  removeAllVideos,
  convertVideos
} from '../../redux/actions'

import ControlPanel from './ControlPanel'

const mapDispatch = dispatch => ({
  onCancel: () => dispatch(removeAllVideos()),
  onConvert: () => dispatch(convertVideos())
})

export default connect(null, mapDispatch)(ControlPanel)
