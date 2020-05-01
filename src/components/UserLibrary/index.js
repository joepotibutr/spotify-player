import React from 'react'
import { connect } from 'react-redux'
import { UserLibraryLayout } from './style'
import { libraryView } from '../../constants'
// import { fetchArtist } from '../../actions/artist'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { CollectionItem } from './style'

const MusicNoteIcon = require('../../images/note.svg')
class UserLibrary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }



    renderViewType = () => {

        switch(this.props.library) {
            case libraryView.PLAYLISTS :
               return this.renderCollectionItem(this.props.playlists)
            default :
               return null
        }
    }

    renderCollectionItem = (items) => {
        return items && items.map((item, i) => 
                <CollectionItem key={i}>
                    <div style={{
                        marginBottom: '16px'
                    }}>
                       {item.images.length ?  <img className="collection-cover" src={item.images[0].url}/> : 
                        <div className="empty-playlist"><img className="empty-icon" src={MusicNoteIcon} /></div> 
                    }
                    </div>
                    <div>
                        {/* <div className="play-btn"><PlayArrowIcon /></div> */}
                        <div>
                            <h4 style={{
                                fontSize: '14px',
                                lineHeight: '20px',
                                fontWeight: 700,
                                letterSpacing: '.24px',
                                color: '#fff'
                            }}>{item.name}</h4>
                        </div>
                        <div>
                            <span>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                        </div>
                    </div>
                   
                </CollectionItem>)
    }

    render() {
        return (
        <UserLibraryLayout>
            <h3>{this.props.library}</h3>
            <ul className="collection-layout">
                {this.renderViewType()}
            </ul>
        </UserLibraryLayout>
        )
    }
}

export default connect(state => ({
    playlists: state.playlistReducer.playlists,
    library: state.uiReducer.library 
}))(UserLibrary)