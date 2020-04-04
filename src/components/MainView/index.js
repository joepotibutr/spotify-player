import React from "react";
import { connect } from 'react-redux'
import ArtistList from "../ArtistList";
import PlaylistView from '../PlaylistView'
import { viewType } from '../../constants'

class MainView extends React.Component {

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.headerTitle !== nextProps.headerTitle) {
  //     window.scrollTo(0, 0)
  //   }
  // }

 render() {
  if (this.props.headerTitle === viewType.RECENTLY_PLAYED) {
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
          <div style={{ height: '900px',paddingTop: '60px'}}>
          <PlaylistView />
          </div>
      </div>
      )
  }
 }
 
}


export default connect(state => ({
    headerTitle: state.uiReducer.title
}))(MainView)