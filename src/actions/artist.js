import * as types from '../actionTypes'

export const fetchArtistRequest = (accessToken,artistIds) => {
    return { type : types.FETCH_ARTIST_REQUEST , accessToken, artistIds }
}

export const fetchArtistSuccess = artists => {
    return { type : types.FETCH_ARTIST_SUCCESS , artists }
}  

export const fetchArtistFailure = () => {
    return { type : types.FETCH_ARTIST_FAILURE }
}  

export const setArtistIds = artistIds => {
    return { type: types.SET_ARTIST_IDS, artistIds }
}

export const setRecentlyPlayedArtists = artistIds => {
    return { type: types.SET_RECENTLY_PLAYED_ARTISTS, artistIds }
}