import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'


const PlaylistTrack = styled.li`
    height: 4.56em;
    &:hover {
        background-color: hsla(0,0%,100%,.1);
    }

`

const TrackDetailText = styled.span`


`
class PlaylistView extends React.Component {

    render() {
        const currentPlaylist = this.props.playlists && this.props.playlists.find(playlist => 
            playlist.name === this.props.headerTitle)
            console.log('currentPlaylist',currentPlaylist)
        return (
            <div style={{ display: 'flex'}}>
                <div style={{ width:'50%'}}>
                    <div style={{ position:'fixed'}}>
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
                        <div><p>{this.props.songs.length} SONGS</p></div>
                    </div>
                </div>
                <div style={{ width:'50%'}}>
                    {this.props.songs ? 
                    <ol>{this.props.songs.map(song => (
                        <PlaylistTrack key={song.track.id}>
                            <div> <h4><TrackDetailText> {song.track.name} </TrackDetailText> </h4></div>
                            <div>
                                {song.track.artists.length > 1 ?
                                <div>
                                    <span>{song.track.artists.map((artist, idx) => song.track.artists.length - 1 === idx ? (
                                                    `${artist.name} `
                                                ) : `${artist.name}, `)}
                                    </span>
                            </div> : 
                            <div>
                                <span key={song.track.artists[0].id}>{song.track.artists[0].name}</span>
                            </div>
                        }</div>
                        <div>
                            <span>{song.track.album.name}</span>
                        </div>
                        </PlaylistTrack>
                    ))}</ol> : 
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