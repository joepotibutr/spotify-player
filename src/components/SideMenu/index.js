import React from 'react'
import { connect } from 'react-redux'
import { fetchAlbumRequest } from '../../actions/album'
import { fetchArtistRequest } from '../../actions/artist'


const SideMenu = ({
	token,
	artistIds,
	fetchAlbumRequest,
	fetchArtistRequest
}) => {

	const handleClick = (name)  => {
		// updateHeaderTitle(name)
		// updateViewType(name)
	}

	// const handleBrowseClick = ()  => {
	// 	// updateHeaderTitle('Browse')
	// 	// updateViewType('Featured')
	// 	// fetchFeatured(token)
    // }
    
    const renderSideMenu = () => {
		const menu = [
			// {
			// 	name: 'Recently Played',
			// 	// action: fetchRecentlyPlayed
			// },
			// {
			// 	name: 'Songs',
			// 	// action: fetchSongs
			// },
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
						item.action(token)
						item.getArtists ? item.action(token, artistIds) : item.action(token)
						handleClick(item.name) }
					}>
					{ item.name } eiei
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
	artistIds : state.artistReducer.artistIds
}),{
	fetchAlbumRequest,
	fetchArtistRequest
})(SideMenu)