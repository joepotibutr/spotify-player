import * as types from '../actionTypes'

const defaultState = {
    title: 'Songs'
  }
  
  export const uiReducer = (state = defaultState, action) => {
    switch (action.type) {
  
    case types.UPDATE_HEADER_TITLE:
      return {
        ...state,
        title: action.title
      }
  
    default:
      return state
    }
  
  }
  
  export default uiReducer