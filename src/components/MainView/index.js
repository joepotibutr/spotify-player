import React from "react";
import { connect } from 'react-redux'
import ArtistList from "../ArtistList";

const MainView = ({ headerTitle }) => {
  return (
    <div style={{ padding: '0 32px' }}>
        <div style={{ position: 'fixed ', background: 'rgb(18, 18, 18)', width: '100%'}}>
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