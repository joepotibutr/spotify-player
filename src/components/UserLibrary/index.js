import React from 'react'
import { connect } from 'react-redux'
import { UserLibraryLayout } from './style'
import { libraryView } from '../../constants'
import { fetchSongs } from '../../actions/song'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { CollectionItem,LikedTrackPlaylist } from './style'

import { DotIcon } from '../shared'

const MusicNoteIcon = require('../../images/note.svg')
class UserLibrary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.token && !nextProps.songs.length) {
            this.props.fetchSongs(nextProps.token)
        }
    }

    renderViewType = () => {
        const { songs } = this.props
        switch(this.props.library) {
            case libraryView.PLAYLISTS :
               return (
               <React.Fragment>
                    <LikedTrackPlaylist>
                        <div className="liked-track-wrapper">
                            <div className="liked-track-text-list">
                                <p className="sample-liked-songs">
                                {songs && songs.map(song => (
                                        <React.Fragment key={song.track.id}>
                                            <span style={{ color: 'white', marginRight: '5px'}}>{song.track.artists[0].name}</span>
                                            <span>{song.track.name}</span>
                                            <DotIcon />
                                        </React.Fragment>
                                ))}
                                </p>
                            </div>
                            <div className="featured-playlist">
                                <h1>Liked Songs</h1>
                                <h3>{songs && songs.length} liked songs</h3>
                            </div>
                        </div>
                        <div className="play-btn"><PlayArrowIcon /></div>
                    </LikedTrackPlaylist>
                    {this.renderCollectionItem(this.props.playlists)}
                </React.Fragment>)
            default :
               return null
        }
    }

    renderCollectionItem = (items) => {
        return items && items.map((item, i) => {
            const collectionDetail = item.description || `By ${item.owner.display_name}`
            
            return <CollectionItem key={i}>
                        <div className="cover-art">
                            {item.images.length ?  <img alt="cover" className="item-cover" src={item.images[0].url}/> : 
                            <div className="empty-playlist">
                                <img alt="empty-playlist" className="empty-icon" src={MusicNoteIcon} />
                            </div>}
                        </div>
                        <div className="item-detail">
                            <div className="play-btn"><PlayArrowIcon /></div>
                            <div className="item-title">
                                <h4>{item.name}</h4>
                            </div>
                            <div className="item-description">
                                <span>{collectionDetail}</span>
                            </div>
                        </div>
                    </CollectionItem>
                })
    }

    render() {
        return (
        <UserLibraryLayout>
            <h1>{this.props.library}</h1>
            <ul className="collection-layout">
                {this.renderViewType()}
            </ul>
        </UserLibraryLayout>
        )
    }
}

export default connect(state => ({
    songs: (state.songReducer && state.songReducer.songs) || '',
    token: state.tokenReducer.token,
    playlists: state.playlistReducer.playlists,
    library: state.uiReducer.library 
}), (dispatch) => ({
    fetchSongs: (accessToken) => dispatch(fetchSongs(accessToken))
}) )(UserLibrary)