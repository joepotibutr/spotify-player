import React from 'react'
import { connect } from 'react-redux'
import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';

import LikeIcon from '@material-ui/icons/Favorite';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';


// import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import DevicesIcon from '@material-ui/icons/Devices';
import VolumeUpIcon from '@material-ui/icons/VolumeUp'

// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import AddIcon from '@material-ui/icons/Add';

const ShuffleIcon = require('../../images/change.svg')
const RepeatIcon = require('../../images/repeat.svg')


class NowPlayingBar extends React.Component {
    render() {
        const lastSongPlayed = this.props.recentlySongs.length && this.props.recentlySongs[0].track
        console.log(this.props.recentlySongs.length && this.props.recentlySongs)

        return (
            <footer style={{ height: '86px',backgroundColor: '#282828' }}>
                <div style={{ padding: '0 16px', display: 'flex', height: '100%', alignItems:'center'}}>
                    <div style={{ width: '30%', minWidth: '180px', display: 'flex', alignItems:'center'}}>
                        <div style={{ overflow: 'hidden' }}>
                        {lastSongPlayed ?
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                                <div style={{
                                    minWidth:' 56px',
                                    minHeight:' 56px',
                                    boxShadow: '0 0 10px rgba(0,0,0,.3)'
                                }}><img style={{ width: '56px', height: '56px'}} src={lastSongPlayed.album.images[2].url} /></div>
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
                                                {lastSongPlayed.name}
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
                                                {lastSongPlayed.artists.length > 1 ? 
                                                lastSongPlayed.artists.map((artist, idx) => lastSongPlayed.artists.length - 1 === idx ? (
                                                    `${artist.name} `
                                                ) : `${artist.name}, `)
                                                :
                                                lastSongPlayed.artists[0].name}
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
                    <div  style={{ 
                        width: '40%',
                        flexDirection: 'column',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '722px'
                    }}>
                        <div style={{ 
                            marginBottom: '12px',
                            width: '224px',
                            justifyContent: 'space-between',
                            flexDlow: 'row nowrap',
                            display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                            <div style={{ 
                                    width: '32px', height: '32px',display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center', }}><span><img src={ShuffleIcon} style={{ width: '1em', }} /></span></div>
                            <div style={{ 
                                    width: '32px', height: '32px',display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center', }}><span><SkipPreviousIcon /></span></div>
                            <div style={{ 
                                    width: '32px', height: '32px',display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center', }}><span><PlayArrowIcon /></span></div>
                            <div style={{ 
                                    width: '32px', height: '32px',display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center', }}><span><SkipNextIcon /></span></div>
                            <div style={{ 
                                    width: '32px', height: '32px',display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center', }}><span><img src={RepeatIcon} style={{ width: '1em'}} /></span></div>
                        </div>

                        <div style={{ display: 'flex',width: '100%',
                     justifyContent: 'center',
                     alignItems: 'center',
                     fontFamily:  `'Varela Round', sans-serif `,
                    }}>
                            <div style={{
                                fontSize: '11px',
                                lineHeight: '16px',
                                letterSpacing: '.015em',
                                minWidth: '40px',
                                textAlign: 'center',
                            }}>2:49</div>
                            <div style={{
                                height: '12px',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <div style={{
                                    backgroundColor: '#404040',
                                    borderRadius: '2px',
                                    display: 'flex',
                                    height: '4px',
                                    width: '100%',
                                }}></div>
                            </div>
                            <div style={{
                                fontSize: '11px',
                                lineHeight: '16px',
                                letterSpacing: '.015em',
                                minWidth: '40px',
                                textAlign: 'center',
                            }}>0:34</div>
                        </div>
                    </div>
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
                                <div style={{ 
                                    width: '32px', height: '32px',display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center', }}><PlaylistPlayIcon /></div>
                                <div style={{ 
                                    width: '32px', height: '32px',display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center', }}><DevicesIcon  style={{
                                        width: '18px',
                                        height: '18px'
                                    }}/></div>
                                <div style={{ 
                                    display: 'flex', width: '136px',display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',}}>
                                    <div style={{ 
                                    width: '32px', height: '32px',display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center', }}><VolumeUpIcon  style={{
                                        width: '18px',
                                        height: '18px'
                                    }} /></div>
                                    
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
}))(NowPlayingBar)