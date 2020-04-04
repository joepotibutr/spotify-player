import React from 'react'
import { connect } from 'react-redux'
import { fetchAlbum } from '../../actions/album'
import { fetchArtist } from '../../actions/artist'
import { fetchRecentlyPlayedSongs } from '../../actions/song'
import { fetchSongs } from '../../actions/song'
import { updateHeaderTitle } from '../../actions/ui'
import { bindActionCreators } from 'redux'
import { viewType } from '../../constants'

import {IconWrapper} from '../NowPlayingBar'

const logo = require('../../images/Spotify_Logo_RGB_White.png')
const home = require('../../images/home.svg')
const search = require('../../images/search.svg')
const library = require('../../images/library.svg')

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
						<li style={{ display: 'flex', alignItems: 'center',color: 'rgb(255,255,255,0.5)' }}>
							<div>
								<IconWrapper>
									<img style={{
                                        width: '18px',
										height: '18px',
										filter: 'invert(1)'
                                    }} src={home}/>
								</IconWrapper>
							</div>
							<div>Home</div>
						</li>
						<li  style={{ display: 'flex', alignItems: 'center',color: 'rgb(255,255,255,0.5)' }}>
							<div>
								<IconWrapper>
									<img style={{
                                        width: '18px',
										height: '18px',
										filter: 'invert(1)'
                                    }} src={search}/>
								</IconWrapper>
							</div>
							<div>Search</div>
						</li>
						<li  style={{ display: 'flex', alignItems: 'center',color: 'rgb(255,255,255,0.5)' }}>
							<div>
								<IconWrapper>
									<img style={{
                                        width: '18px',
										height: '18px',
										filter: 'invert(1)'
                                    }} src={library}/>
								</IconWrapper>
							</div>
							<div>Your Library</div>
						</li>  
					</ul>
				</div>
			<div><label>PLAYLISTS</label>
                <ul style={{ fontWeight: 'bold' }}>
                  	<li style={{ display: 'flex', alignItems: 'center'}}>
						<div>
							<div style={{ width: '30px', height: '30px', background: 'red'}} />
						</div>
						<div style={{ marginLeft: '10px' }}>Create Playlist</div>
					</li>
                  	<li style={{ display: 'flex', alignItems: 'center'}}>
						<div>
							<div style={{ width: '30px', height: '30px', background: 'green'}} />
						</div>
						<div style={{ marginLeft: '10px' }}>Liked Songs</div>
					</li>
                </ul>
                <hr />
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