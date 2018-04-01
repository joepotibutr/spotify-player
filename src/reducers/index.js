import { combineReducers } from 'redux'
import tokenReducer from './token'
import albumReducer from './album'
import artistReducer from './artist'


export default combineReducers({
    tokenReducer,
    albumReducer,
    artistReducer
})