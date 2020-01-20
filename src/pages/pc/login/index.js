import React, { Component } from 'react'
import router from 'umi/router'
import styles from './login.less'

export default class LoginPage extends Component {

  render() {
    return (
      <div>
        <span className={styles.age}>Login</span>
        <button onClick={this.handleLogin} className={styles.name}>登录</button>
      </div>
    )
  }

  handleLogin = () => {
    router.push('/')
  }
}