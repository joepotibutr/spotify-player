import React from "react";
import { connect } from 'react-redux'
import SongList from "../SongList";
import AlbumList from "../AlbumList";
import ArtistList from "../ArtistList";
import BrowseView from "../BrowseView";

const MainView = ({ headerTitle, audioControl, resumeSong, pauseSong }) => {
  return (
    <>
      {headerTitle === "Albums" ? (
        <AlbumList audioControl={audioControl} />
      ) : headerTitle === "Artists" ? (
        <ArtistList />
      ) : headerTitle === "Browse" ? (
        <BrowseView />
      ) : (
        <SongList
          resumeSong={resumeSong}
          pauseSong={pauseSong}
          audioControl={audioControl}
        />
      )}
    </>
  )
}


export default connect(state => ({
    headerTitle: state.uiReducer.title
}))(MainView)