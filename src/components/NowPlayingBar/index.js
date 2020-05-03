import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { fetchRecentlyPlayedSongs } from '../../actions/song'

import TrackPlayerSection from './TrackPlayerSection'
import ProgressBar from '../ProgressBar'

import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';

import LikeIcon from '@material-ui/icons/Favorite';
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

    componentWillReceiveProps(nextProps) {
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
                            height: '30px'
                        }}>
                            <div><span><LikeIcon style={{ width: '15px '}} /></span></div>
                            <div><span><PictureInPictureAltIcon style={{ width: '15px '}} /></span></div>
                        </div>
                    </div>
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