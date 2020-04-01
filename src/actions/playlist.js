import * as types from '../actionTypes'


export const fetchPlaylistMenuRequest = (accessToken,userId) => {
    return { type : types.FETCH_PLAYLIST_MENU_REQUEST , accessToken, userId }
}  
export const fetchPlaylistMenuSuccess = playlists => {
    return { type : types.FETCH_PLAYLIST_MENU_SUCCESS , playlists }
}  
export const fetchPlaylistMenuFailure = () => {
    return { type : types.FETCH_PLAYLIST_MENU_FAILURE }
}  
export const addPlaylistItem = playlist => {
    return { type : types.ADD_PLAYLIST_ITEM , playlist }
} 



export const fetchPlaylistSongsRequest = (userId,playlistId,accessToken) => {
    return { type : types.FETCH_PLAYLIST_SONGS_REQUEST ,userId, playlistId, accessToken}
}  
export const fetchPlaylistSongsFailure = () => {
    return { type : types.FETCH_PLAYLIST_SONGS_FAILURE }
}  
export const fetchPlaylistSongsSuccess = songs => {
    return { type : types.FETCH_PLAYLIST_SONGS_SUCCESS , songs }
}  

