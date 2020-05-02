import React from 'react'
import { connect } from 'react-redux'
import ProgressBar from '../../ProgressBar'
import { TrackPlayerWrapper, CurrentTrackActions, IconWrapper } from './style'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

import { TRACK_STATE_PLAYING , TRACK_STATE_STOPPED , TRACK_STATE_PAUSED } from '../../../actionTypes'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const ShuffleIcon = require('../../../images/change.svg')
const RepeatIcon = require('../../../images/repeat.svg')
const PauseIcon = require('../../../images/pause.svg')



class TrackPlayerSection extends React.Component {

    renderPlayerButton = () => {
        const { currentTrackState, onPlay, onPause, onResume, loading } = this.props
        switch (currentTrackState) {
            case TRACK_STATE_PAUSED :
                return (<IconWrapper onClick={onResume}>
                    <CurrentTrackActions loading={0}>
                        <div/><div/><div/>
                        <PlayArrowIcon className="play-icon" />
                    </CurrentTrackActions>
                </IconWrapper>)
            case TRACK_STATE_PLAYING :
                return (<IconWrapper onClick={onPause}>
                    <CurrentTrackActions>
                        <img className="pause-icon" src={PauseIcon} style={{ width: '1em', }} />
                    </CurrentTrackActions>
                </IconWrapper>)
            case TRACK_STATE_STOPPED :
                return (<IconWrapper onClick={onPlay}>
                    <CurrentTrackActions loading={loading ? 1 : 0}>
                        <div/><div/><div/>
                        <PlayArrowIcon className="play-icon" />
                    </CurrentTrackActions>
                </IconWrapper>)
            default:
                return null
        }
    }

    render() {
        return (
            <TrackPlayerWrapper>
                <div style={{ 
                    marginBottom: '12px',
                    width: '224px',
                    justifyContent: 'space-between',
                    flexDlow: 'row nowrap',
                    display: 'flex', alignItems:'center'}}>
                    <IconWrapper><span><img className="shuffle-icon" src={ShuffleIcon} style={{ width: '1em', }} /></span></IconWrapper>
                    <IconWrapper><span><SkipPreviousIcon /></span></IconWrapper>
                    {this.renderPlayerButton()}
                    <IconWrapper><span><SkipNextIcon /></span></IconWrapper>
                    <IconWrapper><span><img className="repeat-icon" src={RepeatIcon} style={{ width: '1em'}} /></span></IconWrapper>
                </div>

                <div style={{ display: 'flex',width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        fontSize: '11px',
                        lineHeight: '16px',
                        letterSpacing: '.015em',
                        minWidth: '40px',
                        textAlign: 'center',
                    }}>
                        {/* {this.audio.currentTime} */}
                    </div>
                    <ProgressBar />
                    <div style={{
                        fontSize: '11px',
                        lineHeight: '16px',
                        letterSpacing: '.015em',
                        minWidth: '40px',
                        textAlign: 'center',
                    }}>0:34</div>
                </div>
            </TrackPlayerWrapper>
        )
    }
}

export default connect(state => ({
    currentTrackState: (state.playerReducer && state.playerReducer.currentTrackState) || '',
}))(TrackPlayerSection)

