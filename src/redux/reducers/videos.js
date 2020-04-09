import {
  ADD_VIDEOS,
  SET_FORMAT,
  REMOVE_VIDEO,
  REMOVE_ALL_VIDEOS,
  CONVERT_COMPLETE,
  CONVERT_PROGRESS
} from '../actions/videos'

const initState = {}

const videosReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_VIDEOS:
      return action.payload.videos.reduce((state, video) => {
        state[video.path] = {
          ...video,
          convertTo: 'avi',
          progress: 0,
          completed: false,
          outputDir: '',
          error: null

        }

        return state
      }, { ...state })
    case SET_FORMAT:
      return {
        ...state,
        [action.payload.path]: {
          ...state[action.payload.path],
          convertTo: action.payload.format
        }
      }
    case CONVERT_COMPLETE:
      return {
        ...state,
        [action.payload.path]: {
          ...state[action.payload.path],
          completed: true
        }
      }
    case CONVERT_PROGRESS:
      return {
        ...state,
        [action.payload.path]: {
          ...state[action.payload.path],
          progress: action.payload.progress
        }
      }
    case REMOVE_VIDEO:
      return Object.entries(state)
        .reduce((newState, [key, value]) =>
          key !== action.payload.path
            ? { ...newState, [key]: value }
            : newState,
        {})
    case REMOVE_ALL_VIDEOS:
      return initState
    default:
      return state
  }
}

export default videosReducer
