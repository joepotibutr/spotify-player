import React from "react";
import { connect } from 'react-redux'
import ArtistList from "../ArtistList";

const MainView = ({ headerTitle }) => {
  return (
    <div style={{ padding: '0 32px' }}>
        <ArtistList />
    </div>
  )
}


export default connect(state => ({
    headerTitle: state.uiReducer.title
}))(MainView)