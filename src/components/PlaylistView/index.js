import React from 'react'
import { connect } from 'react-redux'
import { viewType } from '../../constants'
import { play } from '../../actions/player'
import { bindActionCreators } from 'redux'
import { PlaylistViewLayout } from './style'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CurrentPlaylistHeader from './CurrentPlaylistHeader'
import PlaylistTracklist from './PlaylistTracklist'
import { Palette } from 'react-palette';


class PlaylistView extends React.Component {

    render() {
        const { playlists, headerTitle } = this.props
        const isUserLikedSongs = headerTitle === viewType.LIKED_SONGS
        const currentPlaylist =  playlists && playlists.find(playlist => 
            playlist.name === headerTitle)
         
        const playlistImageUrl = isUserLikedSongs ? ''  : 
            currentPlaylist.images.length ? currentPlaylist.images[0].url : ''
        return (
            <Palette src={playlistImageUrl}>
                {({data, loading }) => {
                    return loading ? <h2>LOADING</h2> :
                        (<PlaylistViewLayout 
                            vibrant={isUserLikedSongs ? '#3c3565' : 
                            currentPlaylist.images.length > 1 ? 
                            'darkgray' : data.vibrant}
                            mute={data.darkMuted}
                            >
                            <CurrentPlaylistHeader
                                isUserLikedSongs={isUserLikedSongs} 
                                currentPlaylist={currentPlaylist}
                                headerTitle={headerTitle}
                            />

                            <div className="grid-area-tracks">
                                <div className="playlist-actions"> 
                                    <div className="button-wrapper">
                                        <div className="play-btn" onClick={() => this.props.onPlay()}>
                                            <PlayArrowIcon />
                                        </div>
                                        <div className="three-dots">.....</div>
                                    </div>
                                </div>
                                {this.props.songs && 
                                <PlaylistTracklist 
                                    onPlay={this.props.onPlay} 
                                    songs={this.props.songs}
                                />}
                            </div>
                        </PlaylistViewLayout>)}
                }
            </Palette>
            
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