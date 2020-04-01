import React from "react";
import { connect } from 'react-redux'
import ArtistList from "../ArtistList";
import PlaylistView from '../PlaylistView'
import { viewType } from '../../constants'

const MainView = ({ headerTitle }) => {
  if (headerTitle === viewType.RECENTLY_PLAYED) {
    return (
      <div style={{ padding: '0 32px', height: 'calc(100vh - 90px)', overflowY: 'scroll' }}>
          <div style={{ position: 'fixed ', background: 'rgb(18, 18, 18)', width: '100%', height: '60px'}}>
            <span>{`<`}</span>
            <span>{`>`}</span>
          </div>
          <ArtistList />
      </div>
    )
  } else {
      return (
        <div style={{ padding: '0 32px', height: 'calc(100vh - 90px)', overflowY: 'scroll' }}>
          <div style={{ position: 'fixed ', background: 'rgb(18, 18, 18)', width: '100%', height: '60px'}}>
            <span>{`<`}</span>
            <span>{`>`}</span>
          </div>
          <div>
          <PlaylistView />
          </div>
      </div>
      )
  }
 
}


export default connect(state => ({
    headerTitle: state.uiReducer.title
}))(MainView)