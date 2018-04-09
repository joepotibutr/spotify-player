import { put , call } from 'redux-saga/effects'
import { 
    fetchPlaylistMenuSuccess,
    fetchPlaylistMenuFailure,
    fetchPlaylistSongsSuccess,
    fetchPlaylistSongsFailure
} from '../actions/playlist'
import api from '../api'
import uniqBy from 'lodash/uniqBy'


export function * fetchPlaylistMenuSaga(action) {
    try {
        const { accessToken , userId } = action
        const res = yield call(api.playlist.fetchPlaylistMenu,accessToken,userId)
        yield put(fetchPlaylistMenuSuccess(res))
    } catch(err) {
        const { response } = err
        if(response.statusText === "Unauthorized") {
            window.location.href = './'
        }
        yield put(fetchPlaylistMenuFailure(err))
    }
} 

export function * fetchPlaylistSongsSaga(action) {
    try {
        const { accessToken , userId , playlistId } = action
        const res = yield call(api.playlist.fetchPlaylistSongs,accessToken,userId,playlistId)
        const removeDuplicated = uniqBy(res,item => item.track.id)
        yield put(fetchPlaylistSongsSuccess(removeDuplicated))
    } catch(err) {
        const { response } = err
        if(response.statusText === "Unauthorized") {
            window.location.href = './'
        }
        yield put(fetchPlaylistSongsFailure(err))
    }
} 
