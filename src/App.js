import React, { Component } from 'react'
import queryString from 'query-string'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setToken } from './actions/token'
import { fetchUserRequest } from './actions/user'
import SideMenu from './components/SideMenu'
import UserPlaylists from './components/UserPlaylists'
import InstallAppLink from './components/InstallAppLink'
import NowPlayingBar from './components/NowPlayingBar'
import MainView from './components/MainView'
import GlobalStyled from './GobalStyled'
import styled from 'styled-components'
import { play,stop ,pause ,resume } from './actions/player'

const MainLayout = styled.div`
  background: #121212;
  
  .app-grid-layout {
    min-height: 100vh;
    width: 100%;
    height: 100vh;
    position: relative;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: auto 1fr;
    grid-template-areas:
    "nav         main-view"
    "now-playing now-playing";


    .nav {
      font-family:sans-serif;
      grid-area: nav;
      width: 230px;
      background: rgb(0,0,0,0.8);
    }

    .main-view {
      width: 100%;
      grid-area: main-view;
    }
    
    .now-playing {
      grid-area: now-playing;
      width: 100%;
      background: rgb(18, 18, 18);
    } 

  }

 `
class App extends Component {

    constructor(props) {
      super(props)
      this.state = {
          loading: false,
          authFailed: false
      }
      this.audio = new Audio()
      this.loadingTimeout

  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search)
      if(!parsed.access_token){
        window.location.href = `${process.env.REACT_APP_AUTH_API_URI}/login`
      } else {
        this.props.setToken(parsed.access_token)
      }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.token){
      this.props.fetchUserRequest(nextProps.token)
    }
  }

  onPlay = (currentTrack) => {
    // 1st time : checked
    // song ended :
    // new song : checked
    this.onStop()
    const url = currentTrack ? currentTrack.track.preview_url : 
      this.props.currentlyPlaying.track.preview_url
      
      this.audio.src = url
      if(!this.state.loading) {
        this.setState({ loading: true })
        this.loadingTimeout =  window.setTimeout(() => {
              this.setState({ loading: false })
              this.props.play(currentTrack)
              this.audio.play()
          }, 2000)
      }
  }

  onPause = () => {
      this.audio.pause()
      this.props.pause()
  }

  onResume = () => {
    this.props.resume()
    this.audio.play()
  }

  onStop = () => {
    this.props.stop()
  }

  UNSAFE_componentWillUnmount(){
    window.clearTimeout(this.loadingTimeout)
  }

  render(){
    return (
      <React.Fragment>
        <GlobalStyled />
         <MainLayout>
          <div className="app-grid-layout">
            <section className="nav">
                <SideMenu />
                <UserPlaylists />
                <InstallAppLink />
            </section>
            <section className="main-view">
                <MainView onPlay={this.onPlay}/>
            </section>
            <section className="now-playing">
              <NowPlayingBar
                loading={this.state.loading}
                onPlay={this.onPlay} 
                onPause={this.onPause} 
                onResume={this.onResume} 
              />
            </section>
          </div>
        </MainLayout>
      </React.Fragment>
    )
  }
}


export default connect(
  state => ({
    token : state.tokenReducer.token,
    currentlyPlaying: (state.songReducer && state.playerReducer.currentlyPlaying) || '',
}),
dispatch => bindActionCreators({
  play,pause,stop,resume,
  setToken,
  fetchUserRequest
},dispatch))(App)
