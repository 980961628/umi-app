import React,{Component} from 'react'
import {connect} from 'dva'
import {Button} from 'antd'

@connect(({system}) => ({
  system
}))
class HomePage extends React.Component {

  render() {
    const {system}=this.props
    const style = {
      width:'100px',
      height:'1000px',
      backgroundColor:'#aaa',
    }
    return (
      <div>首页，welcome
        <p>{system.age}</p>
        <Button type="primary" onClick={this.handleClick}>+N</Button>
        <div style={style}></div>
      </div>
    )
  }

  handleClick=() => {
    const {dispatch}=this.props
    dispatch({
      type: "system/addAge",
    }).then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
  }
}

export default HomePage;