export const ADD_VIDEO = 'ADD_VIDEO'
export const ADD_VIDEOS = 'ADD_VIDEOS'
export const REMOVE_VIDEO = 'REMOVE_VIDEO'
export const REMOVE_ALL_VIDEOS = 'REMOVE_ALL_VIDEOS'
export const VIDEO_PROGRESS = 'VIDEO_PROGRESS'
export const VIDEO_COMPLETE = 'VIDEO_COMPLETE'

const addVideos = videos => ({
  type: ADD_VIDEOS,
  payload: {
    videos
  }
})

export const removeVideo = path => ({
  type: REMOVE_VIDEO,
  payload: {
    path
  }
})

export const removeAllVideos = () => ({
  type: REMOVE_ALL_VIDEOS
})

export const getVideoInfo = videos => dispatch => {
  dispatch(addVideos(videos))
}
