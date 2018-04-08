import { put , call } from 'redux-saga/effects'
import { fetchArtistSuccess , fetchArtistFailure , setArtistIds } from '../actions/artist'
import api from '../api'

export function * fetchArtistSaga(action) {
    try {
        const { accessToken , artistIds } = action
        const res = yield call(api.artists,accessToken,artistIds)
        yield put(fetchArtistSuccess(res))
    } catch(err) {
        yield put(fetchArtistFailure(err))
    }
} 
