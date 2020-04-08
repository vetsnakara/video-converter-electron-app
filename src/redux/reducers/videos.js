import {
  ADD_VIDEOS,
  REMOVE_VIDEO
} from '../actions/videos'

const initState = {}

const videosReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_VIDEOS:
      return action.payload.videos.reduce((state, video) => {
        state[video.path] = {
          ...video,
          completed: 0
        }

        return state
      }, { ...state })
    case REMOVE_VIDEO:
      return Object.entries(state)
        .reduce((newState, [key, value]) =>
          key !== action.payload.path
            ? { ...state, [key]: value }
            : state,
        {})
    default:
      return state
  }
}

export default videosReducer
