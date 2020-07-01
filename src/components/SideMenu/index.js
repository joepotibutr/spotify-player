import React from 'react'
import { connect } from 'react-redux'
import { fetchAlbum } from '../../actions/album'
import { fetchArtist } from '../../actions/artist'
import { fetchRecentlyPlayedSongs } from '../../actions/song'
import { fetchSongs } from '../../actions/song'
import { updateHeaderTitle } from '../../actions/ui'
import { bindActionCreators } from 'redux'
import { viewType, Navigation } from '../../constants'
import { 
	UserPlaylistActionsLayout,
	SideMenuLayout,
	PlaylistAction,
	NavigationLinkItem
} from './style'

import {IconWrapper} from '../NowPlayingBar'
import LikeIcon from '@material-ui/icons/Favorite';

const logo = require('../../images/Spotify_Logo_RGB_White.png')
const plus = require('../../images/plus.svg')




class SideMenu extends React.Component {
	
	renderNavigation = () => {
		return Navigation.map(item => (
			<NavigationLinkItem
				onClick={() => item.title === viewType.USER_LIBRARY && 
					this.props.updateHeaderTitle(item.title)}
				active={this.props.title === item.title}
			>
				<div>
					<IconWrapper>
						<img alt={item.icon} src={item.icon}/>
					</IconWrapper>
				</div>
				<div style={{ marginLeft: '7px'}}>{item.title}</div>
			</NavigationLinkItem>
		))
	}


	render() {
		const { title, token } = this.props
		return (
			<SideMenuLayout>
				<div className="logo" onClick={() => updateHeaderTitle(viewType.USER_LIBRARY)}>
					<img alt="logo" src={logo}/>
				</div>
				<div>
					<div>	
						<ul style={{ color: 'white', fontWeight: 'bold'}}>
							{this.renderNavigation()}						
						</ul>
					</div>
					<UserPlaylistActionsLayout >
						<label className="playlist-header">PLAYLISTS</label>
						<ul style={{
							marginBottom: '13px'
						}}>
							<PlaylistAction style={{ marginBottom: '10px'}}>
								<div className="create-playlist" >
									<span style={{ width: '15px', height: '15px' }}>
										<img alt="add" style={{ width: '15px', height: '15px' }} src={plus} />
									</span>
								</div>
								<div style={{ marginLeft: '15px', color:'white' }}>Create Playlist</div>
							</PlaylistAction>
							<PlaylistAction active={title === viewType.LIKED_SONGS ? 1 : 0}>
								<div className="liked-songs"><LikeIcon style={{ filter: 'brightness(2)', width: '18px', height: '18px'}}/></div>
								<div onClick={() => {
									fetchSongs(token)
									updateHeaderTitle(viewType.LIKED_SONGS)
									}} style={{ marginLeft: '15px', color:'white' }}>Liked Songs</div>
							</PlaylistAction>
						</ul>
					</UserPlaylistActionsLayout>
				</div>
			</SideMenuLayout>
		)
	}
}

export default connect(state => ({
	token : state.tokenReducer.token ? state.tokenReducer.token : '',
	artistIds : state.artistReducer.artistIds,
	title: state.uiReducer.title
}), dispatch => bindActionCreators({
	updateHeaderTitle,
	fetchAlbum,
	fetchArtist,
	fetchSongs,
	fetchRecentlyPlayedSongs
}, dispatch))(SideMenu)