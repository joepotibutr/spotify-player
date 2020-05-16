import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import CurrentTrack from './CurrentTrack'
import { fetchRecentlyPlayedSongs } from '../../actions/song'

import TrackPlayerSection from './TrackPlayerSection'
import ProgressBar from '../ProgressBar'

// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { NowPlayingWrapper } from './style'

import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import DevicesIcon from '@material-ui/icons/Devices';
import VolumeUpIcon from '@material-ui/icons/VolumeUp'


export const IconWrapper = styled.div` 
width: 32px; 
height: 30px;
display: flex;
justify-content: start;
align-items: center;
`


class NowPlayingBar extends React.Component {

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.token && !nextProps.recentlySongs.length) {
            this.props.fetchRecentlyPlayedSongs(nextProps.token)
        }
    }

    render() {
        const { currentlyPlaying,recentlySongs } = this.props

        const lastSongPlayed = recentlySongs.length && recentlySongs[0]

        const currentTrack = currentlyPlaying ? currentlyPlaying : lastSongPlayed


        return (
            <NowPlayingWrapper>
                <div className="current-track-action-bar">
                    <CurrentTrack currentTrack={currentTrack} />
                    <TrackPlayerSection
                        onPlay={() => this.props.onPlay(currentTrack)} 
                        onPause={this.props.onPause} 
                        onResume={this.props.onResume} 
                        loading={this.props.loading}
                    />
                    <div className="volumn-control-bar">
                        <div className="control-bar-container">
                            <IconWrapper>
                                <PlaylistPlayIcon />
                            </IconWrapper>
                            <IconWrapper>
                                <DevicesIcon className="icon"  style={{
                                    width: '18px',
                                    height: '18px'
                                }}/>
                            </IconWrapper>
                            <div className="volume-bar">
                                <IconWrapper>
                                    <VolumeUpIcon className="icon"  style={{
                                    width: '18px',
                                    height: '18px'
                                }} />
                                </IconWrapper>
                                <ProgressBar />
                            </div>
                        </div>
                    </div>
                </div>
            </NowPlayingWrapper>
        )
    }
}

export default connect(state => ({
    token: state.tokenReducer.token,
    recentlySongs: (state.songReducer && state.songReducer.recentlySongs) || '',
    currentlyPlaying: (state.playerReducer && state.playerReducer.currentlyPlaying) || '',
}), dispatch => ({
    fetchRecentlyPlayedSongs: (accessToken) => dispatch(fetchRecentlyPlayedSongs(accessToken))
}))(NowPlayingBar)