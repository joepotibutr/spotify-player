import React from 'react'
import { connect } from 'react-redux'

class NowPlayingBar extends React.Component {
    render() {
        const lastSongPlayed = this.props.recentlySongs.length && this.props.recentlySongs[0].track
        console.log(this.props.recentlySongs.length && this.props.recentlySongs)

        return (
            <footer style={{ height: '90px' }}>
                <div style={{ padding: '0 16px', display: 'flex'}}>
                    <div style={{ width: '30%'}}>
                        {lastSongPlayed ? 
                            <img src={lastSongPlayed.album.images[2].url} /> : null
                        }
                    </div>
                    <div  style={{ width: '40%'}}>
                            center
                    </div>
                    <div  style={{ width: '30%'}}>
                                right
                    </div>
                </div>
            </footer>
        )
    }
}

export default connect(state => ({
    recentlySongs: (state.songReducer && state.songReducer.recentlySongs) || '',
}))(NowPlayingBar)