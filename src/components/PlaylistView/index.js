import React from 'react'
import { connect } from 'react-redux'
import { viewType } from '../../constants'
import { play } from '../../actions/player'
import LikeIcon from '@material-ui/icons/Favorite';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { bindActionCreators } from 'redux'
import { 
    Outer, 
    LinkedText, 
    PlaylistTrack, 
    DotIcon, 
    IconWrapper, 
    PlaylistViewLayout, 
    LikedSongsCoverArt
} from './style'


const MusicalNoteIcon = require('../../images/musical-note.svg')


class PlaylistView extends React.Component {
    

    render() {
        const { playlists, headerTitle } = this.props
        const isUserLikedSongs = headerTitle === viewType.LIKED_SONGS
        const currentPlaylist =  playlists && playlists.find(playlist => 
            playlist.name === headerTitle)
           
        return (
            <PlaylistViewLayout>
                <header className="grid-area-playlist">
                    <div className="current-playlist">
                        <div className="playlist-cover-art">
                                <div className="cover-image-wrapper">
                                {isUserLikedSongs ? 
                                <LikedSongsCoverArt >
                                    <LikeIcon style={{ width: '18px', height: '18px'}}/>
                                </LikedSongsCoverArt> : 
                                <img className="playlist-cover-image"
                                src={currentPlaylist.images[0].url}/>}
                            </div>
                        </div>
                        <div className="playlist-body">
                            <div className="playlist-entity">
                                <div className="playlist-title"><h2>{this.props.headerTitle}</h2></div>
                                <div ><span className="by">By </span><span className="playlist-owner">{isUserLikedSongs ? 'test' : currentPlaylist.owner.display_name}</span></div>
                            </div>
                            <div className="playlist-actions">
                                <div className="button-wrapper">
                                    <div className="play-button">
                                        <button onClick={() => this.props.onPlay()}>PLAY</button>
                                    </div>
                                    <div>LIKED</div>
                                    <div>.....</div>
                                </div>
                            </div>
                            <div className="total-songs"><p>{this.props.songs.length} SONGS</p></div>
                        </div>
                    </div>
                </header>
                <div className="grid-area-tracks">
                    {this.props.songs ? 
                    <ol style={{ padding: 0, margin:0  }}>{this.props.songs.map(song => (
                        <PlaylistTrack key={song.track.id} onClick={() => this.props.onPlay(song)}>
                            <div style={{ display: 'flex'}}>
                                <div  className="track-item-play">
                                   <IconWrapper>
                                        <img
                                        className="musical-icon"
                                        src={MusicalNoteIcon} />
                                        <PlayArrowIcon className="play-icon" />
                                   </IconWrapper>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '75%'}}>
                                    <LinkedText> <h4 style={{ margin: '0 0 5px 0',color: 'white' }}> {song.track.name} </h4></LinkedText>
                                        <div style={{ display: 'flex'}}>
                                            <Outer style={{ marginRight:'5px' }}>
                                            {song.track.artists.length > 1 ?
                                                <LinkedText>
                                                    <span>{song.track.artists.map((artist, idx) => song.track.artists.length - 1 === idx ? (
                                                                    `${artist.name} `
                                                                ) : `${artist.name}, `)}
                                                    </span>
                                                </LinkedText> : 
                                            <LinkedText>
                                                <span key={song.track.artists[0].id}>{song.track.artists[0].name}</span>
                                            </LinkedText>}
                                        </Outer>
                                        <div style={{ margin: '0 8px 0 5px',display: 'flex',alignItems: 'center' }}><DotIcon /></div>
                                        <Outer>
                                            <LinkedText>
                                                <span>{song.track.album.name}</span>
                                            </LinkedText>
                                        </Outer>
                                    </div>
                                </div>
                                <div className="track-item-options" ></div>
                                <div className="track-item-duration">3.33</div>
                            </div>
                        </PlaylistTrack>
                    ))}</ol> : 
                    null}
                </div>
            </PlaylistViewLayout>
        )
    }
}

export default connect(state => ({
    headerTitle: state.uiReducer.title,
    songs: state.songReducer.songs ? state.songReducer.songs : '',
    playlists: state.playlistReducer.playlists,
}),dispatch => bindActionCreators({
	play,
}, dispatch))(PlaylistView)