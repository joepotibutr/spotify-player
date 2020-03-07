import React from "react";
import { connect } from 'react-redux'
import ArtistList from "../ArtistList";

const MainView = ({ headerTitle }) => {
  return (
        <ArtistList />
  )
}


export default connect(state => ({
    headerTitle: state.uiReducer.title
}))(MainView)