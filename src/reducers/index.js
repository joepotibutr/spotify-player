import { combineReducers } from 'redux'
import tokenReducer from './token'
import albumReducer from './album'
import artistReducer from './artist'
import browseReducer from './browse'
import songReducer from './song'
import userReducer from './user'
import uiReducer from './ui'
import playlistReducer from './playlist'
import soundReducer from './sound'


export default combineReducers({
    tokenReducer,
    albumReducer,
    artistReducer,
    browseReducer,
    songReducer,
    userReducer,
    uiReducer,
    playlistReducer,
    soundReducer
})