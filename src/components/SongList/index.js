import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchSongsRequest } from '../../actions/song'


class SongList extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (
          nextProps.token !== "" &&
          nextProps.viewType === "Songs"
        ) {
          this.props.fetchSongsRequest(nextProps.token);
        }
      }
    

    renderSongs = () => {
        console.log('rendersong fired !!')
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
    songs: (state.songReducer && state.songReducer.songs) || '',
    viewType: state.uiReducer.title,
}),dispatch => bindActionCreators({ fetchSongsRequest }, dispatch))(SongList)