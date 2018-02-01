import React from 'react'


const SideMenu = () => {

	const handleClick = (name)  => {
		// updateHeaderTitle(name)
		// updateViewType(name)
	}

	const handleBrowseClick = ()  => {
		// updateHeaderTitle('Browse')
		// updateViewType('Featured')
		// fetchFeatured(token)
    }
    
    const renderSideMenu = () => {
		const menu = [
			{
				name: 'Recently Played',
				// action: fetchRecentlyPlayed
			},
			{
				name: 'Songs',
				// action: fetchSongs
			},
			{
				name: 'Albums',
				// action: fetchAlbums
			},
			{
				name: 'Artists',
				// action: fetchArtists,
				getArtists: true
			}
		]

		return menu.map(item => {
			return (
				<li key={ item.name }
					onClick={() => {
						// item.getArtists ? item.action(token, artistIds) : item.action(token)
						handleClick(item.name) }
					}>
					{ item.name }
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

export default SideMenu