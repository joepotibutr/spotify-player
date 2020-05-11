import React from 'react'
import { connect } from 'react-redux'
import { viewType } from '../../constants'
import { play } from '../../actions/player'
import { bindActionCreators } from 'redux'
import { 
    Outer, 
    LinkedText, 
    PlaylistTrack, 
    IconWrapper, 
    PlaylistViewLayout, 
} from './style'

import CurrentPlaylistHeader from './CurrentPlaylistHeader'
import PlaylistTracklist from './PlaylistTracklist'



class PlaylistView extends React.Component {

    render() {
        const { playlists, headerTitle } = this.props
        const isUserLikedSongs = headerTitle === viewType.LIKED_SONGS
        const currentPlaylist =  playlists && playlists.find(playlist => 
            playlist.name === headerTitle)
           
        return (
            <PlaylistViewLayout>
                <CurrentPlaylistHeader
                    isUserLikedSongs={isUserLikedSongs} 
                    currentPlaylist={currentPlaylist}
                    headerTitle={headerTitle}
                />
                 <div className="playlist-actions"> 
                    <div className="button-wrapper">
                        <div className="play-button">
                            <button onClick={() => this.props.onPlay()}>PLAY</button>
                        </div>
                        <div>.....</div>
                    </div>
                </div>
                <div className="grid-area-tracks">
                    {this.props.songs && 
                        <PlaylistTracklist 
                            onPlay={this.props.onPlay} 
                            songs={this.props.songs}
                        />}
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