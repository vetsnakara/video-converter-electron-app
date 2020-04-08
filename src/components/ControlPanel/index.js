import { connect } from 'react-redux'

import {
  removeAllVideos
} from '../../redux/actions'

import ControlPanel from './ControlPanel'

const mapDispatch = dispatch => ({
  onCancel: () => dispatch(removeAllVideos())
})

export default connect(null, mapDispatch)(ControlPanel)
