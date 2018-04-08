import * as types from '../actionTypes'


export const fetchSongsRequest = accessToken => {
  return { type: types.FETCH_SONGS_REQUEST , accessToken }
}
export const fetchSongsSuccess = songs => {
    return { type: types.FETCH_SONGS_SUCCESS , songs }
}
export const fetchSongsFailure = () => {
    return { type: types.FETCH_SONGS_FAILURE }
}



export const searchSongsRequest = (accessToken,searchTerm) => {
    return { type: types.SEARCH_SONGS_REQUEST }
}
export const searchSongsSuccess = songs => {
    return { type: types.SEARCH_SONGS_SUCCESS , songs }
}
export const searchSongsFailure = () => {
    return { type: types.SEARCH_SONGS_FAILURE }
}


export const fetchRecentlyPlayedRequest = () => {
  return { type: types.FETCH_RECENTLY_PLAYED_REQUEST }
}
export const fetchRecentlyPlayedSuccess = songs => {
  return { type: types.FETCH_RECENTLY_PLAYED_SUCCESS , songs }
}
export const fetchRecentlyPlayedFailure = () => {
  return { type: types.FETCH_RECENTLY_PLAYED_FAILURE }
}



export const playSong = song => {
  return { type: types.PLAY_SONG , song }
}

export const stopSong = () => {
  return { type: types.STOP_SONG }
}

export const pauseSong = () => {
  return { type: types.PAUSE_SONG }
}

export const resumeSong = () => {
  return { type: types.RESUME_SONG }
}

export const increaseSongTime = time => {
  return { type: types.INCREASE_SONG_TIME , time }
}

export const updateViewType = view => {
  return { type: types.UPDATE_VIEW_TYPE , view }
}