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

const ShuffleIcon = require('../../images/change.svg')
const RepeatIcon = require('../../images/repeat.svg')


class NowPlayingBar extends React.Component {
    render() {
        const lastSongPlayed = this.props.recentlySongs.length && this.props.recentlySongs[0].track
        console.log(this.props.recentlySongs.length && this.props.recentlySongs)

        return (
            <footer style={{ height: '89px' }}>
                <div style={{ padding: '0 16px', display: 'flex', height: '100%'}}>
                    <div style={{ width: '30%', minWidth: '180px'}}>
                        <div>
                        {lastSongPlayed ?
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                                <div><img src={lastSongPlayed.album.images[2].url} /></div>
                                <div>
                                    <span>
                                        <a>
                                            {lastSongPlayed.name}
                                        </a>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <a>
                                            {lastSongPlayed.artists[0].name}
                                        </a>
                                    </span>
                                </div>
                            </div>
                        : null}
                        </div>
                        <div style={{ display: 'flex'}}>
                            <div><span><LikeIcon /></span></div>
                            <div><span><PictureInPictureAltIcon /></span></div>
                        </div>
                    </div>
                    <div  style={{ width: '40%'}}>
                        <div>
                            <span><img src={ShuffleIcon} style={{ width: '30px'}} /></span>
                            <span><SkipPreviousIcon /></span>
                            <span><PlayArrowIcon /></span>
                            <span><SkipNextIcon /></span>
                            <span><img src={RepeatIcon} style={{ width: '30px'}} /></span>
                        </div>

                        <div>
                            <div>time played</div>
                            <div>line</div>
                            <div>duration time left</div>
                        </div>
                    </div>
                    <div  style={{ width: '30%'}}>
                            <div><span><PlaylistPlayIcon /></span></div>
                            <div><span><DevicesIcon/></span></div>
                            <div>
                                <div><span><VolumeUpIcon /></span></div>
                                <div><span  style={{ width: '39px', height: '2px', background: 'gray'}}/></div>
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