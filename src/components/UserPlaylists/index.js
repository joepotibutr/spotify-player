import React , { Component } from 'react'
import { bindActionCreators } from "redux";
import { fetchPlaylistsMenu, 
   // fetchPlaylistSongs
 } from '../../actions/playlist';
import { connect } from 'react-redux'

class UserPlaylists extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.userId !== "" && nextProps.token !== "") {
          this.props.fetchPlaylistsMenu(nextProps.userId, nextProps.token);
        }
      }
    renderPlaylists() {
        return this.props.playlistMenu.map(playlist => {
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
        console.log(this.props)
        return (
            <div>
                <h3>Playlists</h3>
            </div>
        )
    }
}

export default connect(state => ({
    userId: state.userReducer.user ? state.userReducer.user.id : '',
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    playlistMenu: state.playlistReducer.playlistMenu ? state.playlistReducer.playlistMenu : ''
}), dispatch => 
    bindActionCreators({
        fetchPlaylistsMenu,
       // fetchPlaylistSongs
    }, dispatch)
)(UserPlaylists)