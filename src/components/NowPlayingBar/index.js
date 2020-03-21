import React from 'react'
import { connect } from 'react-redux'
import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';

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
                            <div><span>heart icon</span></div>
                            <div><span><PictureInPictureAltIcon /></span></div>
                        </div>
                    </div>
                    <div  style={{ width: '40%'}}>
                        <div>
                            <span>shuffle</span>
                            <span>previous</span>
                            <span>play</span>
                            <span>next</span>
                            <span>repeat</span>
                        </div>

                        <div>
                            <div>time played</div>
                            <div>line</div>
                            <div>duration time left</div>
                        </div>
                    </div>
                    <div  style={{ width: '30%'}}>
                            <div>playlist icon</div>
                            <div>device icon</div>
                            <div>
                                <div>speakre icon</div>
                                <div>volume</div>
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