import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchRecentlyPlayedRequest, fetchSongsRequest } from '../../actions/song'
import { fetchArtistRequest } from '../../actions/artist'
import { viewType } from '../../constants'


class ArtistList extends React.Component {
    async componentWillReceiveProps(nextProps) {
        if (
          nextProps.token !== "" &&
          !nextProps.fetchSongsError &&
          nextProps.fetchSongsRequest &&
          !nextProps.songs.length &&
          nextProps.viewType === viewType.RECENTLY_PLAYED
          
        ) {
            // await this.props.fetchSongsRequest(nextProps.token)
            // await this.props.fetchArtistRequest(nextProps.token, nextProps.artistIds)
        }

        if (
            nextProps.token !== "" &&
            !nextProps.fetchRecentlySongsError &&
            nextProps.fetchRecentlySongsRequest &&
            nextProps.viewType === viewType.RECENTLY_PLAYED
            
          ) {
              console.log('thiscase')
              await this.props.fetchRecentlyPlayedRequest(nextProps.token)
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
    render() {
        return (
            <div>
                <h2>Recently Played</h2>
                <ul>{this.props.songs && this.renderSongs()}</ul>
                <h2>Recommend Artist</h2>
                <ul>{this.props.songs && this.renderSongs()}</ul>
            </div>
        )
    }
}



export default connect(state => ({
    token: (state.tokenReducer && state.tokenReducer.token) || '',
    artistIds: (state.artistReducer && state.artistReducer.artistIds) || '',
    recentlyPlayedArtistIds: (state.artistReducer && state.artistReducer.recentlyPlayedArtistIds) || '',
    artistList: (state.artistReducer && state.artistReducer.artistList) || '',
    songs: (state.songReducer && state.songReducer.songs) || '',
    fetchSongsError: state.songReducer.fetchSongsFailure,
    fetchSongsRequest: state.songReducer.fetchSongsRequest,
    
    fetchRecentlySongsError: state.songReducer.fetchRecentlySongsFailure,
    fetchRecentlySongsRequest: state.songReducer.fetchRecentlySongsRequest,
    viewType: state.uiReducer.title,
}),dispatch => bindActionCreators({ fetchRecentlyPlayedRequest, fetchArtistRequest, fetchSongsRequest }, dispatch))(ArtistList)