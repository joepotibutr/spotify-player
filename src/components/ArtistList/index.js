import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchRecentlyPlayedSongs, fetchSongs } from '../../actions/song'
import { fetchArtist, fetchRecentlyArtist } from '../../actions/artist'
import { viewType } from '../../constants'


class ArtistList extends React.Component {
    async componentWillReceiveProps(nextProps) {
        if (
            nextProps.token !== "" &&
            nextProps.viewType === viewType.RECENTLY_PLAYED
        ) {
            if (
                !nextProps.fetchSongsError &&
                nextProps.fetchSongs &&
                !nextProps.songs.length
              ) {
                  await this.props.fetchSongs(nextProps.token)
              }
      
              if (
                  !nextProps.fetchRecentlySongsError &&
                  nextProps.fetchRecentlySongs &&
                  !nextProps.recentlySongs.length
                ) {
                    await this.props.fetchRecentlyPlayedSongs(nextProps.token)
                }

                if(
                    nextProps.recentlySongs.length && 
                    nextProps.songs.length 
                ) {
                    console.log(nextProps)
                    // await this.props.fetchRecentlyArtistt(nextProps.token,nextProps.recentlyPlayedArtistIds)
                    // await this.props.fetchArtistt(nextProps.token,nextProps.artistIds)
                }
        }
      }
    

    renderSongs = () => {
        return this.props.artistList && this.props.artistList.artists.map((artist, i) => {
            return (
                <li key={i}>
                    <div><img  src={artist.images[2].url}/></div>
                    <div>
                        <h3>{artist.name}</h3>
                    </div>
                    <div>
                        <p>{artist.type}</p>
                    </div>
                </li>
        )
        })
    }

    renderSongs2 = () => {
        return this.props.artistList && this.props.artistList.artists.map((artist, i) => {
            return (
                <li key={i}>
                    <div><img  src={artist.images[2].url}/></div>
                    <div>
                        <h3>{artist.name}</h3>
                    </div>
                    <div>
                        <p>{artist.type}</p>
                    </div>
                </li>
        )
        })
    }

    render() {
        return (
            <div>
                <h2>Recently Played</h2>
                {/* <ul>{this.props.songs && this.renderSongs()}</ul> */}
                <h2>Recommend Artist</h2>
                {/* <ul>{this.props.songs && this.renderSongs2()}</ul> */}
            </div>
        )
    }
}



export default connect(state => ({
    token: (state.tokenReducer && state.tokenReducer.token) || '',

    artistIds: (state.artistReducer && state.artistReducer.artistIds) || '',
    recentlyPlayedArtistIds: (state.artistReducer && state.artistReducer.recentlyPlayedArtistIds) || '',

    artistList: (state.artistReducer && state.artistReducer.artistList) || '',
    
    recentlySongs: (state.songReducer && state.songReducer.recentlySongs) || '',
    songs: (state.songReducer && state.songReducer.songs) || '',

    fetchSongsError: state.songReducer.fetchSongsFailure,
    fetchSongsRequest: state.songReducer.fetchSongsRequest,
    
    fetchRecentlySongsError: state.songReducer.fetchRecentlySongsFailure,
    fetchRecentlySongsRequest: state.songReducer.fetchRecentlySongsRequest,
    viewType: state.uiReducer.title,
}),dispatch => bindActionCreators({ fetchRecentlyPlayedSongs, fetchArtist, fetchSongs, fetchRecentlyArtist }, dispatch))(ArtistList)