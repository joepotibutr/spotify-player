import { put , call } from 'redux-saga/effects'
import { 
    fetchSongsSuccess,
    fetchSongsFailure,
    searchSongsSuccess,
    searchSongsFailure } from '../actions/song'
import uniqBy from 'lodash/uniqBy' 
import api from '../api'
import { setArtistIds } from '../actions/artist';

export function * fetchSongsSaga(action) {
    try {
        const res = yield call(api.songs.fetchSongs,action.accessToken)
        if(res.statusText === "Unauthorized") {
            window.location.href = './';
        }
        let artistIds = uniqBy(res, (item) => 
            item.track.artists[0].name).map(item => 
                item.track.artists[0].id).join(',')
        
        yield console.log(uniqBy(res,(item) => 
        item.track.artists[0].name))

        yield put(setArtistIds(artistIds))
        yield put(fetchSongsSuccess(res))
    } catch(err) {
        yield put(fetchSongsFailure(err))
    }
}


export function * searchSongsSaga(action) {
    const { accessToken , searchTerm } = action
    try {
        const res = yield call(api.songs.searchSongs,accessToken,searchTerm)
        if(res.statusText === "Unauthorized") {
            window.location.href = './';
        }
        yield put(searchSongsSuccess(res))
    } catch(err) {
        yield put(searchSongsFailure(err))
    }
}
