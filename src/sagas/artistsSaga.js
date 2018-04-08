import { put , call } from 'redux-saga/effects'
import { fetchArtistSuccess , fetchArtistFailure } from '../actions/artist'
import api from '../api'

export function * fetchArtistSaga(action) {
    try {
        const { accessToken , artistIds } = action
        const res = yield call(api.artists,accessToken,artistIds)
        yield put(fetchArtistSuccess(res))
    } catch(err) {
        const { response } = err
        if(response.statusText === "Unauthorized") {
            window.location.href = './'
        }
        yield put(fetchArtistFailure(err))
    }
} 
