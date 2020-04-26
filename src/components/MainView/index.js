import React from "react";
import { connect } from 'react-redux'
import ArtistList from "../ArtistList";
import PlaylistView from '../PlaylistView'
import MainHeader from '../MainHeader'
import { viewType } from '../../constants'

import styled from 'styled-components'

const MainViewLayout = styled.div`
  padding: 0 32px;
  height: calc(100vh - 90px);
  overflow-y: scroll;
`

class MainView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          opacity: 0,
      };
    } 


  onScroll = (e) => {
      if (e.target.scrollTop < 400) {
          const opacity = e.target.scrollTop / 300
          this.setState({
              opacity
          })
      }
  }

  componentDidMount() {
      window.addEventListener('scroll', this.onScroll,true);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
  }




  renderMainView = () => {
    switch (this.props.headerTitle) {
      case viewType.RECENTLY_PLAYED :
        return <ArtistList />
      default: 
        return <PlaylistView onPlay={this.props.onPlay}/>
    }
  }

 render() {
    return (
      <MainViewLayout>
        <MainHeader opacity={this.state.opacity} />
          {this.renderMainView()}
      </MainViewLayout>
    )
 }
}


export default connect(state => ({
    headerTitle: state.uiReducer.title,





    token : state.tokenReducer.token ? state.tokenReducer.token : '',
}))(MainView)