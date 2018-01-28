import React, { Component } from 'react'
import queryString from 'query-string'
import { connect } from 'react-redux'
import { setToken } from './actions/token'

class App extends Component {
  componentDidMount() {
    let parsed = queryString.parse(window.location.search)
    if(!parsed.access_token){
      console.log('need auth')
      window.location.href = 'https://accounts.spotify.com/en/authorize?response_type=code&client_id=8574538fd9964f1bb64221a6baef55e5&scope=user-read-private%20user-read-email&redirect_uri=http:%2F%2Flocalhost:8888%2Fcallback'
    }
    else {
      this.props.setToken(parsed.access_token)
    }
  }

  render(){
    return (
      <div>eiei</div>
    )
  }
}


export default connect(state => ({
  token : state.token
}),{setToken})(App)
