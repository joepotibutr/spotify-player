import React from "react";
import { connect } from 'react-redux'
import SongList from "../SongList";
import AlbumList from "../AlbumList";
import ArtistList from "../ArtistList";
import BrowseView from "../BrowseView";

const MainView = ({ headerTitle }) => {
  return (
    <React.Fragment>
      {headerTitle === "Albums" ? (
        <AlbumList  />
      ) : headerTitle === "Artists" ? (
        <ArtistList />
      ) : headerTitle === "Browse" ? (
        <BrowseView />
      ) : (
        <SongList />
      )}
    </React.Fragment>
  )
}


export default connect(state => ({
    headerTitle: state.uiReducer.title
}))(MainView)