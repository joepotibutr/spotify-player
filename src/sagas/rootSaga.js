import { takeLatest } from 'redux-saga/effects'
import * as types from '../actionTypes'
import { fetchAlbumSaga } from './albumsSaga'
import { fetchArtistSaga } from './artistsSaga'

function *rootSaga() {
    yield takeLatest(types.FETCH_ALBUM_REQUEST,fetchAlbumSaga)
    yield takeLatest(types.FETCH_ARTIST_REQUEST,fetchArtistSaga)
}


export default rootSaga