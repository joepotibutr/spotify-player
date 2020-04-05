import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { viewType } from '../../constants'
import LikeIcon from '@material-ui/icons/Favorite';


const PlaylistTrack = styled.li`
    height: 4.56em;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:hover {
        background-color: hsla(0,0%,100%,.1);
    }

`

const TrackDetailText = styled.span`


`

const LikedSongsCoverArt = styled.div`
    background:green;
    display:flex;
    justify-content:center;
    align-items:center;
    width: 50%;
    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`

// 12 3 4 
// 12 9 8

class PlaylistView extends React.Component {

    render() {
        const { playlists, headerTitle } = this.props
        const isUserLikedSongs = headerTitle === viewType.LIKED_SONGS
        const currentPlaylist =  playlists && playlists.find(playlist => 
            playlist.name === headerTitle)
           
        return (
            <div style={{ display: 'flex',height: '900px',paddingTop: '60px'}}>
                <div style={{ width:'30%'}}>
                    <div>
                        <div style={{  
                                width: 'auto',
                                minHeight: 'auto',
                                boxShadow: '0 0 10px rgba(0,0,0,.3)' }}>
                            <div style={{
                                   width: '100%',
                                   height: '100%'
                                }}>
                                {isUserLikedSongs ? 
                                <LikedSongsCoverArt >
                                <LikeIcon style={{ width: '18px', height: '18px'}}/>
                                </LikedSongsCoverArt> : 
                                <img style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundSize: 'contain',
                                    backgroundPosition: '50%',
                                    backgroundColor: '#000',
                                    backgroundRepeat: 'no-repeat',
                                }} 
                                src={currentPlaylist.images[0].url}/>}
                            </div>
                        </div>
                        <div><h1>{this.props.headerTitle}</h1></div>
                        <div><p>{isUserLikedSongs ? 'test' : currentPlaylist.owner.display_name}</p></div>
                        <div><p>{this.props.songs.length} SONGS</p></div>
                    </div>
                </div>
                <div style={{ width:'70%'}}>
                    {this.props.songs ? 
                    <ol>{this.props.songs.map(song => (
                        <PlaylistTrack key={song.track.id}>
                            <div style={{ display: 'flex'}}>
                                <div style={{ width: '5%' }}>F</div>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '80%'}}>
                                    <div> <h4 style={{ margin: 0 }}><TrackDetailText> {song.track.name} </TrackDetailText> </h4></div>
                                        <div style={{ display: 'flex' }}>
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
                                            </div>}
                                        </div>
                                        <div>
                                            <span>{song.track.album.name}</span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '10%' }}>...</div>
                                <div style={{ width: '5%' }}>3.33</div>
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