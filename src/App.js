import React, { Component } from 'react'
import queryString from 'query-string'
import { connect } from 'react-redux'
import { setToken } from './actions/token'
import SideMenu from './components/SideMenu'
import UserPlaylists from './components/UserPlaylists'
import Artwork from './components/Artwork'
import Header from './components/Header'

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
      console.log('fetch new user')
    }
  }

  render(){
    return (
      <div>
        <div>
          <div>
            <SideMenu />
            <UserPlaylists />
            <Artwork />
          </div>
          <div>
            <Header />
            <div>
              {/* <MainHeader />
              <MainView /> */}
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
    token : state.token
}),
{setToken})(App)
