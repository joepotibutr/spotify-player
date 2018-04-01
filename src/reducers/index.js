import { combineReducers } from 'redux'
import tokenReducer from './token'
import albumReducer from './album'


export default combineReducers({
    tokenReducer,
    albumReducer
})