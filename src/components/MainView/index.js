import React from "react";
import { connect } from 'react-redux'
import ArtistList from "../ArtistList";

const MainView = ({ headerTitle }) => {
  return (
    <div style={{ padding: '0 32px', height: 'calc(100vh - 60px)', overflowY: 'scroll' }}>
        <div style={{ position: 'fixed ', background: 'rgb(18, 18, 18)', width: '100%', height: '60px'}}>
          <span>{`<`}</span>
          <span>{`>`}</span>
        </div>
        <ArtistList />
    </div>
  )
}


export default connect(state => ({
    headerTitle: state.uiReducer.title
}))(MainView)