import * as types from '../actionTypes'

const defaultState = {
    artistIds: ''
  }
  
  export const artistsReducer = (state = defaultState, action) => {
  
    switch (action.type) {
  
    case types.SET_ARTIST_IDS:
      return {
        ...state,
        artistIds: action.artistIds
      }
  
    case types.FETCH_ARTIST_REQUEST:
      return {
        ...state,
        fetchArtistsRequest: true
      }
  
    case types.FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        artistList: action.artists,
        fetchArtistsFailure: false,
        fetchArtistsRequest: false
      }
  
    case types.FETCH_ARTIST_FAILURE:
      return {
        ...state,
        fetchArtistsFailure: true,
        fetchArtistsPending: false
      }
  
    default:
      return state
    }
  }
  
  export default artistsReducer