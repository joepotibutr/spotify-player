import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { fetchRecentlyPlayedSongs } from '../../actions/song'

import TrackPlayerSection from './TrackPlayerSection'
import ProgressBar from '../ProgressBar'

import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';

import LikeIcon from '@material-ui/icons/Favorite';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { NowPlayingWrapper, CurrentTrackSection, EllipsisText } from './style'

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
                    <CurrentTrackSection>
                        {currentTrack ?
                        <React.Fragment>
                            <div className="current-track-wrapper">
                                <div className="current-track-cover-art">
                                    <div className="cover-art-wrapper" >
                                        <img 
                                            alt="album-cover" 
                                            className="track-cover-art"  
                                            src={currentTrack.track.album.images[2].url} 
                                        />
                                    </div>
                                    <div className="ellipsis-text-wrapper">
                                        <EllipsisText color="white">
                                            <span>
                                                <a>
                                                    {currentTrack.track.name}
                                                </a>
                                            </span>
                                        </EllipsisText>
                                        <EllipsisText>
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
                                        </EllipsisText>
                                    </div>
                                </div>
                            </div>
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center',
                                justifyContent:'center',
                                width: '80px',
                                height: '30px'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'center', width: '32px' }}>
                                    <span>
                                        <LikeIcon style={{ width: '17px '}} />
                                    </span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', width: '32px' }}>
                                    <span>
                                        <PictureInPictureAltIcon style={{ width: '17px '}} />
                                    </span>
                                </div>
                            </div>
                        </React.Fragment>
                        : null}
                    </CurrentTrackSection>
                    <TrackPlayerSection
                        onPlay={() => this.props.onPlay(currentTrack)} 
                        onPause={this.props.onPause} 
                        onResume={this.props.onResume} 
                        loading={this.props.loading}
                    />
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