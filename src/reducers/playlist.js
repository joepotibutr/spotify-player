import * as types from '../actionTypes'

export const playlistReducer = (state = {}, action) => {
    switch (action.type) {
  
    case types.FETCH_PLAYLIST_MENU_REQUEST:
      return {
        fetchPlaylistRequest: true,
        ...state
      }
  
    case types.FETCH_PLAYLIST_MENU_SUCCESS:
      return {
        playlistMenu: action.playlists,
        playlists: action.playlists,
        fetchPlaylistFailure: false,
        fetchPlaylistRequest: false,
        ...state
      }
  
    case types.ADD_PLAYLIST_ITEM:
      return {
        ...state,
        playlists: [
          ...state.playlists,
          action.playlist
        ]
      }
  
    case types.FETCH_PLAYLIST_MENU_FAILURE:
      return {
        fetchPlaylistFailure: true,
        fetchPlaylistRequest: false,
        ...state
      }
  
    default:
      return state
    }
  }
  
  export default playlistReducer