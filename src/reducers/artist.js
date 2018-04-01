import * as types from '../actionTypes'

const defaultState = {
    artistIds : ''
}


export const artistReducer = (state = defaultState,action) => {
    switch(action.type){
        case types.FETCH_ARTIST_REQUEST :
            return {
                ...state,
                fetchingArtist : true
            }
        case types.SET_ARTIST_IDS :
            return {
                ...state,
                artistIds : action.artistIds
            }
        default : return state
    } 
}


export default artistReducer