import * as types from '../actionTypes'
import { viewType } from '../constants'

const defaultState = {
    songPlaying: false,
    timeElapsed: 0,
    songId: 0,
    viewType: viewType.RECENTLY_PLAYED,
    songPaused: true
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
        songPlaying: true,
        songDetails: action.song,
        songId: action.song.id,
        timeElapsed: 0,
        songPaused: false
      }
  
    case types.STOP_SONG:
      return {
        ...state,
        songPlaying: false,
        songDetails: null,
        timeElapsed: 0,
        songPaused: true
      }
  
    case types.PAUSE_SONG:
      return {
        ...state,
        songPlaying: false,
        songPaused: true
      }
  
    case types.RESUME_SONG:
      return {
        ...state,
        songPlaying: true,
        songPaused: false
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