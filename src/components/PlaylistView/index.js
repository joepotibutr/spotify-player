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
    songs: state.songsReducer.songs ? state.songsReducer.songs : '',
    playlists: state.playlistReducer.playlists,
}))(PlaylistView)