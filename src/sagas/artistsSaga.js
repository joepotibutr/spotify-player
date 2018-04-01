import { put , call } from 'redux-saga/effects'
import { fetchArtistSuccess , fetchArtistFailure } from '../actions/artist'
import api from '../api'


import axios from 'axios'

export function * fetchArtistSaga(action) {
    try {
        const res = yield axios.get(`https://api.spotify.com/v1/artists?ids=${action.artistIds}`,{ 
            headers : {
                'Authorization': 'Bearer ' + action.accessToken
            }}
        )
        console.log(res)
        yield put(fetchArtistSuccess(res))
    } catch(err) {
        yield put(fetchArtistFailure(err))
    }
} 
