import { put } from 'redux-saga/effects'
import { fetchUserSuccess , fetchUserFailure } from '../actions/user'


import axios from 'axios'

export function * fetchUserSaga(action) {
    try {
        const res = yield axios.get('https://api.spotify.com/v1/me/Songs',{ 
            headers : {
                'Authorization': 'Bearer ' + action.accessToken
            }}
        )
        console.log(res)
        yield put(fetchUserSuccess(res))
    } catch(err) {
        yield put(fetchUserFailure(err))
    }
} 
