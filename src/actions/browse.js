import * as types from '../actionTypes'
import axios from 'axios'


export const fetchCategorySuccess = categories => {
    return { type : types.FETCH_CATEGORY_SUCCESS , categories }
}
export const fetchCategoryFailure = () => {
    return { type : types.FETCH_CATEGORY_FAILURE }
}  


export const fetchNewReleasesSuccess = newReleases => {
    return { type : types.FETCH_NEW_RELEASES_SUCCESS , newReleases }
}  
export const fetchNewReleasesFailure = () => {
    return { type : types.FETCH_NEW_RELEASES_FAILURE }
}  


export const fetchFeaturedSuccess = featured => {
    return { type : types.FETCH_FEATURED_SUCCESS , featured }
}  
export const fetchFeaturedFailure = () => {
    return { type : types.FETCH_FEATURED_FAILURE }
}  