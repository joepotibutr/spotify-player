import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchRecentlyPlayedSongs, fetchSongs } from '../../actions/song'
import { fetchArtist, fetchRecentlyArtist } from '../../actions/artist'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { viewType } from '../../constants'

import styled from 'styled-components'

const TrackItem = styled.li`
    cursor:pointer;
    background: #282828;
    border-radius: 8px;
    padding: 20px 20px 16px;
    img {
        width: 100%;
        height: auto;
        border-radius:50%;
        box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2)
    }
    .play-btn {
        position:absolute;
        justify-content:center;
        align-items:center;
        width: 50px;
        height: 50px;
        background:red;
        display:none;
        border-radius:50%;
        transform: translateX(90px);
    }
    &:hover {
        .play-btn {
            display:flex;
        }
    }
`


class ArtistList extends React.Component {
    async componentWillReceiveProps(nextProps) {
        if (
            nextProps.token !== "" &&
            nextProps.viewType === viewType.RECENTLY_PLAYED
        ) {
            if (
                nextProps.fetchSongs &&
                !nextProps.songs.length
              ) {
                  await this.props.fetchSongs(nextProps.token)
              }
      
              if (
                  nextProps.fetchRecentlyPlayedSongs &&
                  !nextProps.recentlySongs.length
                ) {
                    await this.props.fetchRecentlyPlayedSongs(nextProps.token)
                }
                if(
                    nextProps.recentlySongs.length && 
                    nextProps.songs.length &&
                    !nextProps.fetchRecentlySongsFailure &&
                    !nextProps.fetchSongsFailure &&
                    !nextProps.fetchRecentlySongsRequest &&
                    !nextProps.fetchSongsRequest &&
                    nextProps.fetchArtistsRequest &&
                    nextProps.fetchRecentlyArtistsRequest
                ) {
                    // await this.props.fetchRecentlyArtist(nextProps.token,nextProps.recentlyPlayedArtistIds)
                    await this.props.fetchArtist(nextProps.token,nextProps.artistIds)
                }
        }
      }
    

    renderArtists = () => {
        return this.props.artistList && this.props.artistList.artists.map((artist, i) => i < 5 ? 
                <TrackItem key={i}>
                    <div style={{
                        marginBottom: '16px'
                    }}>
                        <img  src={artist.images[2].url}/>
                    </div>
                    <div>
                        <div className="play-btn"><PlayArrowIcon /></div>
                        <div>
                            <h4 style={{
                                fontSize: '14px',
                                lineHeight: '20px',
                                fontWeight: 700,
                                letterSpacing: '.24px',
                                color: '#fff'
                            }}>{artist.name}</h4>
                        </div>
                        <div>
                            <span>{artist.type.charAt(0).toUpperCase() + artist.type.slice(1)}</span>
                        </div>
                    </div>
                   
                </TrackItem>
         : null)
    }


    render() {
        return (
            <div style={{ height: '900px',paddingTop: '60px'}}>
                <h1 style={{ color: '#fff'}}>Recently played</h1>
                <ul style={{
                    display: 'grid',
                    gridGap: '16px',
                    gridTemplateColumns: 'repeat(auto-fill,minmax(164px,1fr))'
                }}>{this.props.songs && this.renderArtists()}</ul>
                <h2>Recommend Artist</h2>
            </div>
        )
    }
}



export default connect(state => ({
    token: (state.tokenReducer && state.tokenReducer.token) || '',

    fetchRecentlyArtistsRequest: state.artistReducer.fetchRecentlyArtistsRequest,
    fetchArtistsRequest: state.artistReducer.fetchArtistsRequest,

    artistIds: (state.artistReducer && state.artistReducer.artistIds) || '',
    recentlyPlayedArtistIds: (state.artistReducer && state.artistReducer.recentlyPlayedArtistIds) || '',

    artistList: (state.artistReducer && state.artistReducer.artistList) || '',
    
    recentlySongs: (state.songReducer && state.songReducer.recentlySongs) || '',
    songs: (state.songReducer && state.songReducer.songs) || '',

    fetchSongsFailure: state.songReducer.fetchSongsFailure,
    fetchSongsRequest: state.songReducer.fetchSongsRequest,
    
    fetchRecentlySongsFailure: state.songReducer.fetchRecentlySongsFailure,
    fetchRecentlySongsRequest: state.songReducer.fetchRecentlySongsRequest,
    viewType: state.uiReducer.title,
}),dispatch => bindActionCreators({ fetchRecentlyPlayedSongs, fetchArtist, fetchSongs, fetchRecentlyArtist }, dispatch))(ArtistList)