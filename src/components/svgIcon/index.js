import React,{Component} from 'react';

export default class SvgIcon extends Component {
  render() {
    return (
      <svg aria-hidden="true" className='icon' style={this.props.styles}>
        <use xlinkHref={"#"+this.props.icon}></use>
      </svg>
    )
  }
}