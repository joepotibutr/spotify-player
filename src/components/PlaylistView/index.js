import React from 'react'
import { connect } from 'react-redux'
import { viewType } from '../../constants'
import { play } from '../../actions/player'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { bindActionCreators } from 'redux'
import { 
    Outer, 
    LinkedText, 
    PlaylistTrack, 
    IconWrapper, 
    PlaylistViewLayout, 
} from './style'

import CurrentPlaylistHeader from './CurrentPlaylistHeader'

import { DotIcon } from '../shared'


const MusicalNoteIcon = require('../../images/musical-note.svg')


class PlaylistView extends React.Component {
    

    render() {
        const { playlists, headerTitle } = this.props
        const isUserLikedSongs = headerTitle === viewType.LIKED_SONGS
        const currentPlaylist =  playlists && playlists.find(playlist => 
            playlist.name === headerTitle)
           
        return (
            <PlaylistViewLayout>
                <CurrentPlaylistHeader
                    onPlay={this.props.onPlay}
                    isUserLikedSongs={isUserLikedSongs} 
                    currentPlaylist={currentPlaylist}
                    headerTitle={headerTitle}
                />
                <div className="grid-area-tracks">
                    {this.props.songs ? 
                    <ol style={{ padding: 0, margin:0  }}>{this.props.songs.map(song => (
                        <PlaylistTrack key={song.track.id} onClick={() => this.props.onPlay(song)}>
                            <div style={{ display: 'flex'}}>
                                <div  className="track-item-play">
                                   <IconWrapper>
                                        <img
                                        alt="musical"
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
                                                <DotIcon />
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