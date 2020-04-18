import * as types from '../actionTypes'
import { viewType } from '../constants'

const defaultState = {
    currentlyPlaying: null,
    isSongStopped: true,
    timeElapsed: 0,
    viewType: viewType.RECENTLY_PLAYED,
    isSongPaused: false
  }
  
  export const playerReducer = (state = defaultState, action) => {
    switch (action.type) {
    case types.UPDATE_VIEW_TYPE:
      return {
        ...state,
        viewType: action.view
      }
  
    case types.PLAY_SONG:
      return {
        ...state,
        isSongStopped: false,
        currentlyPlaying: action.song,
        timeElapsed: 0,
        isSongPaused: false
      }
  
    case types.STOP_SONG:
      return {
        ...state,
        isSongStopped: true,
        currentlyPlaying: null,
        timeElapsed: 0,
        isSongPaused: false
      }
  
    case types.PAUSE_SONG:
      return {
        ...state,
        isSongStopped: false,
        isSongPaused: true
      }
  
    case types.RESUME_SONG:
      return {
        ...state,
        isSongStopped: false,
        isSongPaused: false
      }
  
    case types.INCREASE_SONG_TIME:
      return {
        ...state,
        timeElapsed: action.time
      }
  
    default:
      return state
    }
  
  }
  
  export default playerReducer