import { put , call } from 'redux-saga/effects'
import { 
    fetchPlaylistMenuSuccess,
    fetchPlaylistMenuFailure,
    fetchPlaylistSongsSuccess,
    fetchPlaylistSongsFailure,
    createPlaylistSuccess,
    createPlaylistFailure
} from '../actions/playlist'
import { updateHeaderTitle } from '../actions/ui'
import api from '../api'
import uniqBy from 'lodash/uniqBy'

export function * createPlaylistSaga(action) {
    try {
        const { accessToken, userId } = action
        const res = yield call(api.playlist.createPlaylist,accessToken, userId, {name: 'wowo'})
        yield put(createPlaylistSuccess(res))
        yield put(updateHeaderTitle(res.name))
    } catch(err) {
        const { response } = err
        if (response.statusText === "Unauthorized") {
            window.location.href = './'
        }
        yield put(createPlaylistFailure(err))
    }
}


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
        const { userId,playlistId,accessToken } = action
        const res = yield call(api.playlist.fetchPlaylistSongs,userId,playlistId,accessToken)
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
