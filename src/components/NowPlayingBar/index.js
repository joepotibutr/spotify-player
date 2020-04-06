import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import TrackPlayerSection from './TrackPlayerSection'

import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';

import LikeIcon from '@material-ui/icons/Favorite';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import DevicesIcon from '@material-ui/icons/Devices';
import VolumeUpIcon from '@material-ui/icons/VolumeUp'

// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import AddIcon from '@material-ui/icons/Add';



export const IconWrapper = styled.div` 
width: 32px; 
height: 32px;
display: flex;
justify-content: center;
align-items: center;
`


class NowPlayingBar extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.audioRef = React.createRef();
    //   }

    render() {
        const { currentlyPlaying,recentlySongs } = this.props

        const lastSongPlayed = recentlySongs.length && recentlySongs[0]

        const currentTrack = currentlyPlaying ? currentlyPlaying : lastSongPlayed


        return (
            <footer style={{ height: '86px',backgroundColor: '#282828' }}>
                <div style={{ padding: '0 16px', display: 'flex', height: '100%', alignItems:'center'}}>
                    <div style={{ width: '30%', minWidth: '180px', display: 'flex', alignItems:'center'}}>
                        <div style={{ overflow: 'hidden' }}>
                        {currentTrack ?
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                                <div style={{
                                    minWidth:' 56px',
                                    minHeight:' 56px',
                                    boxShadow: '0 0 10px rgba(0,0,0,.3)'
                                }}><img style={{ width: '56px', height: '56px'}} src={currentTrack.track.album.images[2].url} /></div>
                                <div style={{ 
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        margin:'0 14px'
                                    }}>
                                    <div style={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        fontWeight: '400',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        letterSpacing: '.015em',
                                        color: '#fff',
                                        textAlign: 'left',
                                    }}>
                                        <span>
                                            <a>
                                                {currentTrack.track.name}
                                            </a>
                                        </span>
                                    </div>
                                    <div  style={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        fontSize: '12px',
                                        lineHeight: '16px',
                                        letterSpacing: '.015em',
                                        textAlign: 'left',
                                    }}>
                                        <span>
                                            <a>
                                                {currentTrack.track.artists.length > 1 ? 
                                                currentTrack.track.artists.map((artist, idx) => currentTrack.track.artists.length - 1 === idx ? (
                                                    `${artist.name} `
                                                ) : `${artist.name}, `)
                                                :
                                                currentTrack.track.artists[0].name}
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        : null}
                        </div>
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            justifyContent:'center',
                            width: '32px',
                            height: '32px'
                        }}>
                            <div><span><LikeIcon style={{ width: '15px '}} /></span></div>
                            <div><span><PictureInPictureAltIcon style={{ width: '15px '}} /></span></div>
                        </div>
                    </div>
                    <TrackPlayerSection />
                    <div  style={{ 
                        width: '30%',
                        minWidth: '180px', 
                        display: 'flex', 
                        justifyContent: 'flex-end',
                        }}>
                            <div style={{ width: '180px' ,display: 'flex', 
                        justifyContent: 'flex-end',
                        flexDirection: 'row',
                        alignItems: 'center'}}>
                                <IconWrapper><PlaylistPlayIcon /></IconWrapper>
                                <IconWrapper><DevicesIcon  style={{
                                        width: '18px',
                                        height: '18px'
                                    }}/></IconWrapper>
                                <div style={{ 
                                    display: 'flex', width: '136px',display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',}}>
                                    <IconWrapper><VolumeUpIcon  style={{
                                        width: '18px',
                                        height: '18px'
                                    }} /></IconWrapper>
                                    
                                    <div style={{
                                    height: '12px',
                                    position: 'relative',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <div style={{
                                        backgroundColor: '#404040',
                                        borderRadius: '2px',
                                        display: 'flex',
                                        height: '4px',
                                        width: '100%',
                                    }}></div></div>
                                </div>
                            </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default connect(state => ({
    recentlySongs: (state.songReducer && state.songReducer.recentlySongs) || '',
    songPlaying: (state.songReducer && state.playerReducer.songPlaying) || '',
    currentlyPlaying: (state.songReducer && state.playerReducer.currentlyPlaying) || '',
}))(NowPlayingBar)