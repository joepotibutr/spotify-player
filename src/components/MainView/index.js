import React from "react";
import { connect } from 'react-redux'
import AlbumList from "../AlbumList";
import ArtistList from "../ArtistList";

const MainView = ({ headerTitle }) => {
  return (
    <React.Fragment>
        <AlbumList  />

        <ArtistList />
    </React.Fragment>
  )
}


export default connect(state => ({
    headerTitle: state.uiReducer.title
}))(MainView)