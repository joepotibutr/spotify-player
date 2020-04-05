import * as types from '../actionTypes'


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