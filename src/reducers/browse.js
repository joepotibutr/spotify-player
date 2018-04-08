import * as types from '../actionTypes'

export const browseReducer = (state = {}, action) => {
    switch (action.type) {
    case types.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        view: action.categories.items,
        fetchCategoriesError: false
      }
  
    case types.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        fetchCategoriesFailure: true
      }
  
    case types.FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        view: action.newReleases.items,
        fetchNewReleasesFailure: false
      }
  
    case types.FETCH_NEW_RELEASES_FAILURE:
      return {
        ...state,
        fetchNewReleasesError: true
      }
  
    case types.FETCH_FEATURED_SUCCESS:
      return {
        ...state,
        view: action.featured.items,
        fetchFeaturedFailure: false
      }
  
    case types.FETCH_FEATURED_FAILURE:
      return {
        ...state,
        fetchFeaturedFailure: true
      }
  
    default:
      return state
    }
  }
  
  export default browseReducer