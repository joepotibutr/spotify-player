import React from 'react'
import LikeIcon from '@material-ui/icons/Favorite';
import { LikedSongsCoverArt, CurrentPlaylistHeaderWrapper } from './style'

const CurrentPlaylistHeader = ({ 
    isUserLikedSongs, 
    currentPlaylist, 
    headerTitle, 
    onPlay, 
}) => {
    return (
            <CurrentPlaylistHeaderWrapper>
                <div className="current-playlist">
                    <div className="playlist-cover-art">
                            <div className="cover-image-wrapper">
                            {isUserLikedSongs ? 
                            <LikedSongsCoverArt >
                                <LikeIcon style={{ width: '18px', height: '18px'}}/>
                            </LikedSongsCoverArt> : 
                            <img alt="playlist-cover" className="playlist-cover-image"
                            src={currentPlaylist.images[0].url}/>}
                        </div>
                    </div>
                    <div className="playlist-body">
                        <div className="playlist-entity">
                            <div className="playlist-title"><h2>{headerTitle}</h2></div>
                            <div ><span className="by">By </span><span className="playlist-owner">{isUserLikedSongs ? 'test' : currentPlaylist.owner.display_name}</span></div>
                        </div>
                        <div className="playlist-actions">
                            <div className="button-wrapper">
                                <div className="play-button">
                                    <button onClick={() => onPlay()}>PLAY</button>
                                </div>
                                <div>.....</div>
                            </div>
                        </div>
                    </div>
                </div>
            </CurrentPlaylistHeaderWrapper>
    )
}

export default CurrentPlaylistHeader