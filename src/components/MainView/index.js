import React from "react";
import { connect } from 'react-redux'
import ArtistList from "../ArtistList";
import PlaylistView from '../PlaylistView'
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
        <header style={{ opacity: this.state.opacity, zIndex:3, position: 'fixed ', background: 'rgb(18, 18, 18)', width: '100%', height: '80px'}}>
          <div>
            <span>{`<`}</span>
            <span>{`>`}</span>
          </div>
          <div>User</div>
        </header>
          {this.renderMainView()}
      </MainViewLayout>
    )
 }
}


export default connect(state => ({
    headerTitle: state.uiReducer.title,





    token : state.tokenReducer.token ? state.tokenReducer.token : '',
}))(MainView)