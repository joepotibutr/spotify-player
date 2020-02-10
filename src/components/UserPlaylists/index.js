import React , { Component } from 'react'
import { bindActionCreators } from "redux";
import { fetchPlaylistMenuRequest, 
   // fetchPlaylistSongs
 } from '../../actions/playlist';
import { connect } from 'react-redux'

class UserPlaylists extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.userId !== "" && nextProps.token !== "") {
          this.props.fetchPlaylistMenuRequest(nextProps.token, nextProps.userId);
        }
      }

    
    renderPlaylists() {
        return this.props.playlistMenu.map(playlist => {
          console.log(playlist)
          const getPlaylistSongs = () => {
            this.props.fetchPlaylistSongs(
              playlist.owner.id,
              playlist.id,
              this.props.token
            )
            this.props.updateHeaderTitle(playlist.name);
          }
        })
    }
    render() {
      const { playlistMenu } = this.props
        return (
            <div>
                <h3>Playlists</h3>
                {playlistMenu.length && <ul>{playlistMenu.map(playlist => (
                  <li key={playlist.uri}>{playlist.name}</li>
                ))}</ul>}
            </div>
        )
    }
}

export default connect(state => {
    return {
        userId: state.userReducer.user ? state.userReducer.user.id : '',
        token: state.tokenReducer.token ? state.tokenReducer.token : '',
        playlistMenu: state.playlistReducer.playlistMenu ? state.playlistReducer.playlistMenu : ''
    }
} , dispatch => 
    bindActionCreators({
      fetchPlaylistMenuRequest,
       // fetchPlaylistSongs
    }, dispatch)
)(UserPlaylists)