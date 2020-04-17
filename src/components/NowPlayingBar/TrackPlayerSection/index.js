import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { play,stop,pause,resume } from '../../../actions/player'

import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';


import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const ShuffleIcon = require('../../../images/change.svg')
const RepeatIcon = require('../../../images/repeat.svg')
const PauseIcon = require('../../../images/pause.svg')

export const IconWrapper = styled.div` 
    width: 34px; 
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    .shuffle-icon, .repeat-icon {
        filter:invert(0.5);
    }
`

const CurrentTrackActions = styled.span` 
    border: ${props => props.loading ? 'none' : '1px solid'};
    border-radius: 50%;
    width: 32px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    

    .pause-icon {
        filter:invert(0.8);
    }

    div {
        box-sizing: border-box;
        display: ${props => props.loading ? 'block' : 'none'};
        position: absolute;
        width: 32px;
        height: 32px;
        border: 2px solid #fff;
        border-radius: 50%;
        animation: loading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }
    .loading div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .loading div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .loading div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
` 


class TrackPlayerSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }

        this.audio = new Audio()
    }

    onPlay = (currentTrack) => {
        this.audio.src = currentTrack.track.preview_url
        if(!this.state.loading) {
            this.audio.pause()
            this.setState({ loading: true })
            window.setTimeout(() => {
                this.setState({ loading: false })
                this.props.play(currentTrack)
                this.audio.play()
            }, 2000)
        }
    }

    onPause = () => {
        this.audio.pause()
        this.props.pause()
    }
    
    render() {
        const { play,pause,resume,stop, songPlaying, currentlyPlaying,recentlySongs } = this.props

        const lastSongPlayed = recentlySongs.length && recentlySongs[0]

        const currentTrack = currentlyPlaying ? currentlyPlaying : lastSongPlayed

        

        return (
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
                    display: 'flex', alignItems:'center'}}>
                    <IconWrapper><span><img className="shuffle-icon" src={ShuffleIcon} style={{ width: '1em', }} /></span></IconWrapper>
                    <IconWrapper><span><SkipPreviousIcon /></span></IconWrapper>
                    {songPlaying ? <IconWrapper onClick={this.onPause}>
                        <CurrentTrackActions>
                            <img className="pause-icon" src={PauseIcon} style={{ width: '1em', }} />
                        </CurrentTrackActions>
                    </IconWrapper>
                     : 
                     <IconWrapper onClick={() => this.onPlay(currentTrack)}>
                        <CurrentTrackActions loading={this.state.loading}>
                            <div/><div/><div/>
                             <PlayArrowIcon className="play-icon" />
                        </CurrentTrackActions>
                    </IconWrapper>}
                    <IconWrapper><span><SkipNextIcon /></span></IconWrapper>
                    <IconWrapper><span><img className="repeat-icon" src={RepeatIcon} style={{ width: '1em'}} /></span></IconWrapper>
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
        )
    }
}

export default connect(state => ({
    recentlySongs: (state.songReducer && state.songReducer.recentlySongs) || '',
    songPlaying: (state.songReducer && state.playerReducer.songPlaying) || '',
    currentlyPlaying: (state.songReducer && state.playerReducer.currentlyPlaying) || '',
}),dispatch => bindActionCreators({
	play,pause,stop,resume
}, dispatch))(TrackPlayerSection)