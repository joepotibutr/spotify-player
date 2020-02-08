import * as types from '../actionTypes'


export const fetchPlaylistMenuRequest = (accessToken,userId) => {
    return { type : types.FETCH_PLAYLIST_MENU_REQUEST , accessToken }
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


export const fetchPlaylistsMenu = (userId, accessToken) => {
    return dispatch => {
      const request = new Request(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: new Headers({
          'Authorization': 'Bearer ' + accessToken
        })
      });
  
      dispatch(fetchPlaylistMenuRequest());
  
      fetch(request).then(res => {
        if(res.statusText === "Unauthorized") {
          window.location.href = './';
        }
        return res.json();
      }).then(res => {
        dispatch(fetchPlaylistMenuSuccess(res.items));
      }).catch(err => {
        dispatch(fetchPlaylistMenuFailure(err));
      });
    };
  };


export const fetchPlaylistSongsRequest = (accessToken,userId,playlistId) => {
    return { type : types.FETCH_PLAYLIST_SONGS_REQUEST , accessToken }
}  
export const fetchPlaylistSongsFailure = () => {
    return { type : types.FETCH_PLAYLIST_SONGS_FAILURE }
}  
export const fetchPlaylistSongsSuccess = songs => {
    return { type : types.FETCH_PLAYLIST_SONGS_SUCCESS , songs }
}  

