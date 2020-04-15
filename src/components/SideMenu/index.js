import React from 'react'
import { connect } from 'react-redux'
import { fetchAlbum } from '../../actions/album'
import { fetchArtist } from '../../actions/artist'
import { fetchRecentlyPlayedSongs } from '../../actions/song'
import { fetchSongs } from '../../actions/song'
import { updateHeaderTitle } from '../../actions/ui'
import { bindActionCreators } from 'redux'
import { viewType } from '../../constants'
import styled from 'styled-components'

import {IconWrapper} from '../NowPlayingBar'

import LikeIcon from '@material-ui/icons/Favorite';

const logo = require('../../images/Spotify_Logo_RGB_White.png')
const home = require('../../images/home.svg')
const search = require('../../images/search.svg')
const library = require('../../images/library.svg')
const plus = require('../../images/plus.svg')

const PlaylistAction = styled.li`
	display: flex;
	align-items: center;
	opacity:0.5;
	cursor:pointer;
	transition:.2s;

	&:hover {
		opacity:1;
	}
`

const NavigationLinkItem = styled.li`
 display: flex;
 align-items: center;
 color: rgb(255,255,255,0.5);
 margin-bottom:10px; 
 cursor:pointer;
 transition:.2s;

 img {
	width: 18px;
	height: 18px;
	filter: invert(0.5);
	transition:.2s;
}

	&:hover {
		color: rgb(255,255,255);
		img {
			filter:invert(1) !important;
		}
	}
`


const SideMenu = ({
	token,
	artistIds,
	fetchAlbum,
	fetchArtist,
	fetchRecentlyPlayedSongs,
	fetchSongs,
	updateHeaderTitle
}) => {

	const handleClick = (name)  => {
		updateHeaderTitle(name)
		// updateViewType(name)
	}

	// const handleBrowseClick = ()  => {
	// 	// updateHeaderTitle('Browse')
	// 	// updateViewType('Featured')
	// 	// fetchFeatured(token)
    // }
    
    const renderSideMenu = () => {
		const menu = [
			{
				name: viewType.RECENTLY_PLAYED,
				action: fetchRecentlyPlayedSongs
			},
			{
				name:viewType.SONGS,
				action: fetchSongs
			},
			{
				name: viewType.ALBUMS,
				action: fetchAlbum
			},
			{
				name: viewType.ARTISTS,
				action: fetchArtist,
				getArtists: true
			}
		]

		return menu.map(item => {
			return (
				<li key={ item.name }
					onClick={() => {
						item.getArtists ? item.action(token, artistIds) : item.action(token)
						handleClick(item.name) }
					}>
					<span>{ item.name } </span>
				</li>
			)
		})
	}

    return (
		<div>
			<div onClick={() => updateHeaderTitle(viewType.RECENTLY_PLAYED)}>
				<img style={{ cursor:'pointer', width: '132px', height: '40px' }} src={logo}/>
			</div>
			<div>
				<div>	
					<ul style={{ color: 'white', fontWeight: 'bold'}}>
						<NavigationLinkItem>
							<div>
								<IconWrapper>
									<img src={home}/>
								</IconWrapper>
							</div>
							<div style={{ marginLeft: '7px'}}>Home</div>
						</NavigationLinkItem>
						<NavigationLinkItem>
							<div>
								<IconWrapper>
									<img src={search}/>
								</IconWrapper>
							</div>
							<div  style={{ marginLeft: '7px'}}>Search</div>
						</NavigationLinkItem>
						<NavigationLinkItem >
							<div>
								<IconWrapper>
									<img src={library}/>
								</IconWrapper>
							</div>
							<div  style={{ marginLeft: '7px'}}>Your Library</div>
						</NavigationLinkItem>  
					</ul>
				</div>
			<div style={{ marginRight: '24px'}}><label>PLAYLISTS</label>
                <ul style={{ fontWeight: 'bold' }}>
                  	<PlaylistAction style={{ marginBottom: '10px'}}>
						<div>
							<div style={{ 
								width: '30px', 
								height: '30px',
								background: '#ffffff',
								display:'flex',
								justifyContent:'center',
								alignItems:'center'
								}} >
								<span style={{ width: '15px', height: '15px' }}>
									<img style={{ width: '15px', height: '15px' }} src={plus} />
								</span>
							</div>
						</div>
						<div style={{ marginLeft: '15px' }}>Create Playlist</div>
					</PlaylistAction>
                  	<PlaylistAction>
						<div>
							<div style={{ 
								width: '30px', 
								height: '30px', 
								background: 'green',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}><LikeIcon style={{ width: '18px', height: '18px'}}/></div>
						</div>
						<div onClick={() => {
							fetchSongs(token)
							updateHeaderTitle(viewType.LIKED_SONGS)
							}} style={{ marginLeft: '15px' }}>Liked Songs</div>
					</PlaylistAction>
                </ul>
			</div></div>
		</div>
    )
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