import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { viewType } from '../../constants'
import { play } from '../../actions/player'
import LikeIcon from '@material-ui/icons/Favorite';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { bindActionCreators } from 'redux'


const MusicalNoteIcon = require('../../images/musical-note.svg')

const Outer = styled.div`
    display:flex;
    overflow: hidden;
    text-overflow: ellipsis;
    

    
    &:hover {
        text-decoration:underline;
        color:white;
        cursor:pointer;
    }
    color:gray;
    font-weight:bold;
    transition:.2s;
        
`

const LinkedText = styled.div`

white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.015em;
    text-align: left;


`

const PlaylistTrack = styled.li`
    overflow:hidden;
    height: 4.56em;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition:.1s;
    cursor:default;

    .track-item-play {
        width:40px;
    }

    .track-item-options {
        width:10%;
        cursor:pointer;
    }

    .track-item-duration {
        width:5%;
    }

    .musical-icon {
        min-width:15px;
        min-height:15px;
        filter:invert(0.5);
    }
    .play-icon {
        display:none;
        min-width:15px;
        min-height:15px;
    }

    &:hover {
        background-color: hsla(0,0%,100%,.1);
        .musical-icon {
            display:none;
        }
        .play-icon {
            display:block;
        }
    }

`

const IconWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;



`

const TrackDetailText = styled.span`
    color:white;

`


const PlaylistViewLayout = styled.div`
    height: 900px;
    padding-top:60px;
    display:grid;
    grid-template-columns: 30% 70%;
    grid-template-areas: "left right";

    .grid-area-left {
        grid-area: left;
        position:fixed;
        max-width: 20%;
    }
`

const LikedSongsCoverArt = styled.div`
    background:green;
    display:flex;
    justify-content:center;
    align-items:center;
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
        const { playlists, headerTitle, play } = this.props
        const isUserLikedSongs = headerTitle === viewType.LIKED_SONGS
        const currentPlaylist =  playlists && playlists.find(playlist => 
            playlist.name === headerTitle)
           
        return (
            <PlaylistViewLayout>
                <div className="grid-area-left">
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
                <div  style={{ gridArea: 'right'}}>
                    {this.props.songs ? 
                    <ol style={{ padding: 0 }}>{this.props.songs.map(song => (
                        <PlaylistTrack key={song.track.id} onClick={() => play(song)}>
                            <div style={{ display: 'flex'}}>
                                <div  className="track-item-play">
                                   <IconWrapper>
                                        <img
                                        className="musical-icon"
                                        src={MusicalNoteIcon} />
                                        <PlayArrowIcon className="play-icon" />
                                   </IconWrapper>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '80%'}}>
                                    <div> <h4 style={{ margin: 0 }}><TrackDetailText> {song.track.name} </TrackDetailText> </h4></div>
                                        <div style={{ display: 'flex'}}>
                                            <Outer style={{ marginRight:'5px' }}>
                                            {song.track.artists.length > 1 ?
                                                <LinkedText>
                                                    <span>{song.track.artists.map((artist, idx) => song.track.artists.length - 1 === idx ? (
                                                                    `${artist.name} `
                                                                ) : `${artist.name}, `)}
                                                    </span>
                                                </LinkedText> : 
                                            <LinkedText>
                                                <span key={song.track.artists[0].id}>{song.track.artists[0].name}</span>
                                            </LinkedText>}
                                        </Outer>
                                        <div style={{ marginRight:'5px' }}>.</div>
                                        <Outer>
                                            <LinkedText>
                                                <span>{song.track.album.name}</span>
                                            </LinkedText>
                                        </Outer>
                                    </div>
                                </div>
                                <div className="track-item-options" >...</div>
                                <div className="track-item-duration">3.33</div>
                            </div>
                        </PlaylistTrack>
                    ))}</ol> : 
                    null}
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