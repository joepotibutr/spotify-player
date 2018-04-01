import * as types from '../actionTypes'
import axios from 'axios'

export const fetchAlbumRequest = accessToken => {
    return { type : types.FETCH_ALBUM_REQUEST,accessToken }
}

export const fetchAlbumSuccess = albums => {
    return { type : types.FETCH_ALBUM_SUCCESS , albums }
}  

export const fetchAlbumFailure = () => {
    return { type : types.FETCH_ALBUM_FAILURE }
}  