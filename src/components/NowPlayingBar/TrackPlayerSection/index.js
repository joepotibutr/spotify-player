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
    width: 32px; 
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CurrentTrackActions = styled.span` 
    border: 1px solid;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
` 


class TrackPlayerSection extends React.Component {
    
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
                    <IconWrapper><span><img src={ShuffleIcon} style={{ width: '1em', }} /></span></IconWrapper>
                    <IconWrapper><span><SkipPreviousIcon /></span></IconWrapper>
                    {songPlaying ? <IconWrapper onClick={pause}><CurrentTrackActions><img src={PauseIcon} style={{ width: '1em', }} /></CurrentTrackActions></IconWrapper>
                     : <IconWrapper onClick={() => play(currentTrack)}><CurrentTrackActions><PlayArrowIcon /></CurrentTrackActions></IconWrapper>}
                    <IconWrapper><span><SkipNextIcon /></span></IconWrapper>
                    <IconWrapper><span><img src={RepeatIcon} style={{ width: '1em'}} /></span></IconWrapper>
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