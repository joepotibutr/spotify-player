import React from 'react'
import { connect } from 'react-redux'
// import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';

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
            <footer style={{ height: '89px',backgroundColor: '#282828' }}>
                <div style={{ padding: '0 16px', display: 'flex', height: '100%'}}>
                    <div style={{ width: '30%', minWidth: '180px', display: 'flex', alignItems:'center',justifyContent: 'space-between'}}>
                        <div style={{ overflow: 'hidden' }}>
                        {lastSongPlayed ?
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                                <div style={{
                                    minWidth:' 56px',
                                    minHeight:' 56px',
                                    boxShadow: '0 0 10px rgba(0,0,0,.3)'
                                }}><img style={{ width: '100%', height: '100%'}} src={lastSongPlayed.album.images[2].url} /></div>
                                <div style={{ 
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        fontWeight: 'bold',
                                        margin:'0 14px'
                                    }}>
                                    <div style={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        fontWeight: 'bold'
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
                                        textAlign: 'left'
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
                            {/* <div><span><PictureInPictureAltIcon style={{ width: '15px '}} /></span></div> */}
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
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                            <span><img src={ShuffleIcon} style={{ width: '1em', }} /></span>
                            <span><SkipPreviousIcon /></span>
                            <span><PlayArrowIcon /></span>
                            <span><SkipNextIcon /></span>
                            <span><img src={RepeatIcon} style={{ width: '1em'}} /></span>
                        </div>

                        <div style={{ display: 'flex',width: '100%',
                     justifyContent: 'center',
                     alignItems: 'center',
                    }}>
                            <div>00:00</div>
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
                            <div>00:00</div>
                        </div>
                    </div>
                    <div  style={{ width: '30%'}}>
                            <div><span><PlaylistPlayIcon /></span></div>
                            <div><span><DevicesIcon/></span></div>
                            <div style={{ display: 'flex'}}>
                                <div><span><VolumeUpIcon /></span></div>
                                
                                <div style={{
                                height: '12px',
                                position: 'relative',
                                width: '100%',
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
            </footer>
        )
    }
}

export default connect(state => ({
    recentlySongs: (state.songReducer && state.songReducer.recentlySongs) || '',
}))(NowPlayingBar)