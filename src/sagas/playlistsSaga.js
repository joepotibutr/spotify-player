import { put , call } from 'redux-saga/effects'
import { fetchAlbumSuccess , fetchAlbumFailure } from '../actions/album'
import api from '../api'


import axios from 'axios'

export function * fetchAlbumSaga(action) {
    try {
        const res = yield axios.get('https://api.spotify.com/v1/me/albums',{ 
            headers : {
                'Authorization': 'Bearer ' + action.accessToken
            }}
        )
        console.log(res)
        yield put(fetchAlbumSuccess(res))
    } catch(err) {
        yield put(fetchAlbumFailure(err))
    }
} 
