import React from 'react'
import { connect } from 'react-redux'

const PlaylistView = ({ headerTitle }) => {
    return (
        <div style={{ background: 'white'}}>
            <h1>{headerTitle}</h1>
        </div>
    )
}

export default connect(state => ({
    headerTitle: state.uiReducer.title,
    songs: state.songReducer.songs ? state.songReducer.songs : '',
    playlists: state.playlistReducer.playlists,
}))(PlaylistView)