import React, { Component } from 'react'
import router from 'umi/router'

export default class LoginPage extends Component {

  render() {
    return (
      <div>Login
        <button onClick={this.handleLogin}>登录</button>

      </div>
    )
  }

  handleLogin = () => {
    router.push('/')
  }
}