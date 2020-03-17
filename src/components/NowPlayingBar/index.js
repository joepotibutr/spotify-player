import React from 'react'
import { connect } from 'react-redux'

class NowPlayingBar extends React.Component {
    render() {
        const lastSongPlayed = this.props.recentlySongs.length && this.props.recentlySongs[0].track
        console.log(this.props.recentlySongs.length && this.props.recentlySongs)

        return (
            <footer style={{ height: '90px' }}>
                <div style={{ padding: '0 16px', display: 'flex', height: '100%'}}>
                    <div style={{ width: '30%', minWidth: '180px'}}>
                        {lastSongPlayed ?
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                                <div><img src={lastSongPlayed.album.images[2].url} /></div>
                                <div>
                                    <span>
                                        <a>
                                            {lastSongPlayed.name}
                                        </a>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <a>
                                            {lastSongPlayed.artists[0].name}
                                        </a>
                                    </span>
                                </div>
                            </div>
                        : null}
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