import React from "react";
import { connect } from 'react-redux'
import ArtistList from "../ArtistList";
import PlaylistView from '../PlaylistView'
import { viewType } from '../../constants'
import axios from 'axios'

import styled from 'styled-components'

const MainViewLayout = styled.div`
  padding: 0 32px;
  height: calc(100vh - 90px);
  overflow-y: scroll;
`

class MainView extends React.Component {

  // async componentWillReceiveProps(nextProps) {
  //   // if (this.props.headerTitle !== nextProps.headerTitle) {
  //   //   window.scrollTo(0, 0)
  //   // }

  //   if(nextProps.token) {
  //     const {data} = await axios.get('https://api.spotify.com/v1/me/player/devices',{ 
  //     headers : { 'Authorization': 'Bearer ' + nextProps.token }
  //   })
  //     const res = await axios.get('https://api.spotify.com/v1/recommendations/available-genre-seeds',{ 
  //     headers : { 'Authorization': 'Bearer ' + nextProps.token }
  // })
  // console.log('device=',data,res)
  //   }
  // }



  renderMainView = () => {
    switch (this.props.headerTitle) {
      case viewType.RECENTLY_PLAYED :
        return <ArtistList />
      default: 
        return <PlaylistView />
    }
  }

 render() {
    return (
      <MainViewLayout>
        <div style={{ zIndex:3, position: 'fixed ', background: 'rgb(18, 18, 18)', width: '100%', height: '60px'}}>
          <span>{`<`}</span>
          <span>{`>`}</span>
          <button onClick={() => {
            window.location.href = 'https://www.spotify.com/logout/'
            // window.location.href = 'http://localhost:3000'
            }}>Logout</button>
        </div>
          {this.renderMainView()}
      </MainViewLayout>
    )
 }
}


export default connect(state => ({
    headerTitle: state.uiReducer.title,





    token : state.tokenReducer.token ? state.tokenReducer.token : '',
}))(MainView)