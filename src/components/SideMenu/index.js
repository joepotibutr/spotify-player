import React from 'react'
import { connect } from 'react-redux'
import { fetchAlbumRequest } from '../../actions/album'
import { fetchArtistRequest } from '../../actions/artist'
import { fetchRecentlyPlayedRequest } from '../../actions/song'
import { fetchSongsRequest } from '../../actions/song'
import { updateHeaderTitle } from '../../actions/ui'
import { bindActionCreators } from 'redux'

const SideMenu = ({
	token,
	artistIds,
	fetchAlbumRequest,
	fetchArtistRequest,
	fetchRecentlyPlayedRequest,
	fetchSongsRequest,
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
				name: 'Recently Played',
				action: fetchRecentlyPlayedRequest
			},
			{
				name: 'Songs',
				action: fetchSongsRequest
			},
			{
				name: 'Albums',
				action: fetchAlbumRequest
			},
			{
				name: 'Artists',
				action: fetchArtistRequest,
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
					<h1>{ item.name } </h1>
				</li>
			)
		})
	}

    return (
        <ul>
            <li>Browse</li>
            <li>Radio</li>
            <h3>Your Library</h3>  
            {renderSideMenu()}          
        </ul>
    )
}

export default connect(state => ({
	token : state.tokenReducer.token ? state.tokenReducer.token : '',
	artistIds : state.artistReducer.artistIds,
	title: state.uiReducer.title
}), dispatch => bindActionCreators({
	updateHeaderTitle,
	fetchAlbumRequest,
	fetchArtistRequest,
	fetchSongsRequest,
	fetchRecentlyPlayedRequest
}, dispatch))(SideMenu)