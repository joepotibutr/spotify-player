import React from 'react'
import { connect } from 'react-redux'
import { UserLibraryLayout } from './style'
import { libraryView } from '../../constants'
// import { fetchArtist } from '../../actions/artist'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
                <li key={i}>
                    <div style={{
                        marginBottom: '16px'
                    }}>
                       {item.images.length ?  <img  src={item.images[0].url}/> : 'blank'}
                    </div>
                    <div>
                        <div className="play-btn"><PlayArrowIcon /></div>
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
                   
                </li>)
    }

    render() {
        return (
        <UserLibraryLayout>
            <h3>{this.props.library}</h3>
            <ul style={{
                    display: 'grid',
                    gridGap: '16px',
                    gridTemplateColumns: 'repeat(auto-fill,minmax(164px,1fr))'
                }}>{this.renderViewType()}
            </ul>
        </UserLibraryLayout>
        )
    }
}

export default connect(state => ({
    playlists: state.playlistReducer.playlists,
    library: state.uiReducer.library 
}))(UserLibrary)