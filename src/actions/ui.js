import * as types from '../actionTypes'

export const updateHeaderTitle = title => {
    return { type: types.UPDATE_HEADER_TITLE, title } 
}