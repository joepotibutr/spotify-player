import React, { Component } from 'react'
import queryString from 'query-string'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setToken } from './actions/token'
import { fetchUserRequest } from './actions/user'
import SideMenu from './components/SideMenu'
import UserPlaylists from './components/UserPlaylists'
import Artwork from './components/Artwork'
import Header from './components/Header'
import NowPlayingBar from './components/NowPlayingBar'
import MainView from './components/MainView'
import GlobalStyled from './GobalStyled'

class App extends Component {
  componentDidMount() {
    let parsed = queryString.parse(window.location.search)
    if(!parsed.access_token){
      window.location.href = 'http://localhost:8888/login'
    }
    else {
      this.props.setToken(parsed.access_token)
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.token){
      this.props.fetchUserRequest(nextProps.token)
    }
  }

  render(){
    return (
      <React.Fragment>
        <GlobalStyled />
         <div  style={{ background: '#121212'}}>
          <div style={{
            minHeight: '100vh',
            width: '100%',
            height: '100vh',
            position: 'relative',
            display: 'grid',
            gridTemplateRows: '1fr auto',
            gridTemplateColumns: 'auto 1fr',
            gridTemplateAreas:
            `"nav         main-view"
            "now-playing now-playing"`
            }}>
            <section style={{ gridArea: 'nav', width: '230px', background: 'rgb(0,0,0,0.8)' }}>
              <div style={{padding: '24px'}}>
                <SideMenu />
                <UserPlaylists />
                <Artwork />
              </div>
            </section>
            <section style={{ width: '100%',gridArea: 'main-view', }}>
                <MainView />
            </section>
            <section style={{ gridArea: 'now-playing',width: '100%',background: 'rgb(18, 18, 18)'}}>
              <NowPlayingBar />
            </section>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default connect(
  state => ({
    token : state.tokenReducer.token,
}),
dispatch => bindActionCreators({
  setToken,
  fetchUserRequest
},dispatch))(App)
