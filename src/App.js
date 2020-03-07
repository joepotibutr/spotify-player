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
import MainView from './components/MainView'

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
      <div>
        <div style={{
            display: 'flex',
            
          }}>
          <div style={{ padding: '24px', background: 'black'}}>
            <SideMenu />
            <UserPlaylists />
            <Artwork />
          </div>
          <div>
            <Header />
            <div>
              <MainView />
            </div>
          </div>
          <div>foot</div>
        </div>
      </div>
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
