export const SET_FORMAT = 'SET_FORMAT'
export const ADD_VIDEOS = 'ADD_VIDEOS'
export const REMOVE_VIDEO = 'REMOVE_VIDEO'
export const REMOVE_ALL_VIDEOS = 'REMOVE_ALL_VIDEOS'
export const CONVERT_PROGRESS = 'CONVERT_PROGRESS'
export const CONVERT_COMPLETE = 'CONVERT_COMPLETE'

const addVideos = videos => ({
  type: ADD_VIDEOS,
  payload: {
    videos
  }
})

const convertProgress = (path, progress) => ({
  type: CONVERT_PROGRESS,
  payload: {
    path,
    progress
  }
})

const convertComplete = path => ({
  type: CONVERT_COMPLETE,
  payload: {
    path
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

export const setFormat = (path, format) => ({
  type: SET_FORMAT,
  payload: {
    path,
    format
  }
})

const convertion = onProgress => {
  return new Promise(resolve => {
    const totalTime = 5 * (1 + Math.random()) * 1000 // 5 - 10 seconds
    let currentTime = 0

    const updateTime = 100 // ms

    const interval = setInterval(() => {
      currentTime += updateTime

      let completed = Math.floor(currentTime / totalTime * 100)

      if (completed > 100) {
        completed = 100
      }

      onProgress(completed)

      if (completed >= 100) {
        clearInterval(interval)
        resolve()
      }
    }, updateTime)
  })
}

export const convertVideos = () => (dispatch, getState) => {
  const { videos } = getState()

  const onProgress = video =>
    progress => dispatch(convertProgress(video.path, progress))

  const onComplete = video =>
    () => dispatch(convertComplete(video.path))

  const notConvertedVideos =
    Object.values(videos).filter(({ completed }) => !completed)

  notConvertedVideos.forEach(video => {
    convertion(onProgress(video))
      .then(onComplete(video))
  }
  )
}
