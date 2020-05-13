import React from 'react'
import { connect } from 'react-redux'
import { fetchAlbum } from '../../actions/album'
import { fetchArtist } from '../../actions/artist'
import { fetchRecentlyPlayedSongs } from '../../actions/song'
import { fetchSongs } from '../../actions/song'
import { updateHeaderTitle } from '../../actions/ui'
import { bindActionCreators } from 'redux'
import { viewType, Navigation } from '../../constants'
import styled from 'styled-components'

import {IconWrapper} from '../NowPlayingBar'

import LikeIcon from '@material-ui/icons/Favorite';

const logo = require('../../images/Spotify_Logo_RGB_White.png')

const plus = require('../../images/plus.svg')


const UserPlaylistActionsLayout = styled.div`
 	margin: 20px 24px 0 24px;
	border-bottom: 1px solid rgb(255,255,255,.1);

	 
	.playlist-header {
		font-size: 11px;
    	letter-spacing: 2px;
	}

`

const SideMenuLayout = styled.div`

	.logo {
		padding:24px 0 0 24px;
		margin-bottom: 20px;

		img {
			cursor:pointer;
			width: 132px; 
			height: 40px;
		}
	}

`

const PlaylistAction = styled.li`
	display: flex;
	align-items: center;
	opacity: ${props => props.active ? 1 : 0.7};
	cursor:pointer;
	transition:.3s;
	font-weight: bold;

	.create-playlist {
		width: 32px; 
		height: 32px;
		background: #ffffff;
		display:flex;
		justify-content:center;
		align-items:center;
	}

	.liked-songs {
		width: 32px;
		height: 32px;
		background: linear-gradient(158deg, rgba(70,12,245,1) 0%, rgba(142,141,230,1) 100%);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&:hover {
		opacity:1;
	}
`

const NavigationLinkItem = styled.li`
	display: flex;
	align-items: center;
	color: ${props => props.active ? 'rgb(255,255,255,1)' : 'rgb(255,255,255,0.5)'} ;
	margin-bottom:10px; 
	cursor:pointer;
	transition:.2s;
	padding: 5px 5px 5px 17px;
    background: ${props => props.active ? '#282828' : 'transparent'};
    margin: 0 8px 0 8px;
    border-radius: 4px;

 img {
	width: 18px;
	height: 18px;
	filter: ${props => props.active ? 'invert(1)' : 'invert(0.5)'};
	transition:.2s;
}

	&:hover {
		color: rgb(255,255,255);
		img {
			filter:invert(1) !important;
		}
	}
`

class SideMenu extends React.Component {


	
	renderNavigation = () => {
		return Navigation.map(item => (
			<NavigationLinkItem>
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