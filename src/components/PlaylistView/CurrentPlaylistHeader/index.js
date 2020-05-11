import React from 'react'
import LikeIcon from '@material-ui/icons/Favorite';
import { LikedSongsCoverArt, CurrentPlaylistHeaderWrapper } from './style'

const CurrentPlaylistHeader = ({ 
    isUserLikedSongs, 
    currentPlaylist, 
    headerTitle, 
}) => {
    return (
            <CurrentPlaylistHeaderWrapper>
                <div className="current-playlist">
                    <div className="playlist-cover-art">
                            <div className="cover-image-wrapper">
                            {isUserLikedSongs ? 
                            <LikedSongsCoverArt >
                                <LikeIcon style={{ minWidth: '70px', maxWidth: '80px', filter:'brightness(2)', width: '7vw', height: 'auto'}}/>
                            </LikedSongsCoverArt> : 
                            <img alt="playlist-cover" className="playlist-cover-image"
                            src={currentPlaylist.images[0].url}/>}
                        </div>
                    </div>
                    <div className="playlist-body">
                        <div className="playlist-entity">
                            <div>{(currentPlaylist && currentPlaylist.type) || 'playlist'}</div>
                            <div className="playlist-title"><h2>{headerTitle}</h2></div>
                            <div><span className="playlist-owner">{isUserLikedSongs ? 'ist' : currentPlaylist.owner.display_name}</span></div>
                        </div>
                    </div>
                </div>
               
            </CurrentPlaylistHeaderWrapper>
    )
}

export default CurrentPlaylistHeader