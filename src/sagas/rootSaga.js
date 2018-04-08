import { takeLatest } from 'redux-saga/effects'
import * as types from '../actionTypes'
import { fetchAlbumSaga } from './albumsSaga'
import { fetchArtistSaga } from './artistsSaga'
// import { fetchUserSaga } from './userSaga'
// import { fetchBrowseSaga } from './browseSaga'
// import { fetchPlaylistsSaga } from './playlistsSaga'
import { 
    fetchSongsSaga,
    searchSongsSaga
} from './songsSaga'



function *rootSaga() {
    yield takeLatest(types.FETCH_SONGS_REQUEST,fetchSongsSaga)
    yield takeLatest(types.FETCH_ALBUM_REQUEST,fetchAlbumSaga)
    yield takeLatest(types.FETCH_ARTIST_REQUEST,fetchArtistSaga)
    yield takeLatest(types.SEARCH_SONGS_REQUEST,searchSongsSaga)
}


export default rootSaga