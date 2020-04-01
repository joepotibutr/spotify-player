import React from 'react'
import { connect } from 'react-redux'

class PlaylistView extends React.Component {

    render() {
        const currentPlaylist = this.props.playlists && this.props.playlists.find(playlist => 
            playlist.name === this.props.headerTitle)
            console.log('currentPlaylist',currentPlaylist)
        return (
            <div style={{ background: 'white',display: 'flex'}}>
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
                    <div><p>{currentPlaylist.owner.display_name}</p></div>
                </div>
                <div>
                    {this.props.songs ? 
                    <ul>{this.props.songs.map(song => (
                        <li key={song.track.id}>
                            <div> <h4> {song.track.name} </h4></div>
                            <div>{song.track.artists.length > 1 ?
                                <div>
                                    {song.track.artists.map(artist => 
                                    <span key={artist.id}>{artist.name}</span>)}
                            </div> : 
                            <div>
                                <span key={song.track.artists[0].id}>{song.track.artists[0].name}</span>
                            </div>
                        }</div>
                        <div>
                            <span>{song.track.album.name}</span>
                        </div>
                        </li>
                    ))}</ul> : 
                    null}
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