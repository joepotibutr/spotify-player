import React from 'react'
import { connect } from 'react-redux'

class PlaylistView extends React.Component {

    render() {
        const currentPlaylist = this.props.playlists && this.props.playlists.find(playlist => 
            playlist.name === this.props.headerTitle)
            console.log('currentPlaylist',currentPlaylist)
        return (
            <div style={{ background: 'white'}}>
                <div>
                    <div style={{
                        minWidth: '180px',
                        minHeight: '180px'
                    }}>
                        <img style={{
                        width: '180px',
                        height: '180px'
                    }} 
                    src={currentPlaylist.images[0].url}/>
                    </div>
                    <div><h1>{this.props.headerTitle}</h1></div>
                </div>
                <div>
                    <ul></ul>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    headerTitle: state.uiReducer.title,
    songs: state.songReducer.songs ? state.songReducer.songs : '',
    playlists: state.playlistReducer.playlists,
}))(PlaylistView)