import React from 'react'
import { connect } from 'react-redux'


class SongList extends React.Component {

    renderSongs = () => {
        return this.props.songs.map((song, i) => (
                <li>
                    <div>
                        <p>{song.track.name}</p>
                    </div>
        
                    <div>
                        <p>{song.track.artists[0].name}</p>
                    </div>
                    <div>
                        <p>{song.track.album.name}</p>
                    </div>
                </li>
        ))
    }
    render() {
    console.log('song list',this.props)
        return (
            <div>
                <h2>song list</h2>
                {this.props.songs && this.renderSongs()}
            </div>
        )
    }
}



export default connect(state => ({
    token: (state.tokenReducer && state.tokenReducer.token) || '',
    songs: (state.songsReducer && state.songsReducer.songs) || '',
    viewType: state.uiReducer.viewType,
}),{})(SongList)