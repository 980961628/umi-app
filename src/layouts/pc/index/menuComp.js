import React,{Component} from 'react';
import {Tooltip} from 'antd';

import styles from './menuComp.less'

import SvgIcon from '@/components/svgIcon'

import Link from 'umi/link';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state={
      list: [
        {id: 1,name: '首页',url: '/',icon: 'icon-React'},
        // {id: 2,name: '学习',url: '/a',icon: 'icon-beiwanglu'},
        {id: 2,name: '学习',url: '/nodes',icon: 'icon-Vue'},
        {id: 3,name: '音乐',url: '/b',icon: 'icon-yinle1'},
        {id: 4,name: '视频',url: '/c',icon: 'icon-shipin'},
        {id: 5,name: '趣图',url: '/d',icon: 'icon-zhaopianPhoto'},
        {id: 6,name: '阅读',url: '/e',icon: 'icon-AppleBook'},
        {id: 7,name: '游戏',url: '/f',icon: 'icon-gamepad'},
        {id: 8,name: '生活',url: '/g',icon: 'icon-shaloudaojishi'},
        {id: 9,name: '设置',url: '/setting',icon: 'icon-shezhigengxin'},
      ]
    }

    this.$refs={
      oUl: null
    }

  }

  render() {
    const IconStyles={width: '100%',height: '100%'};
    return (
      <div
        className={styles.menuWrapper}
      >
        <ul
          onMouseMove={e => this.handleMouseMove(e)}
          onMouseLeave={e => this.handleMouseLeave(e)}
          className={styles.menuBox}
          ref={ref => this.$refs.oUl=ref}
        >
          {this.state.list.map((item,i) => {
            return (
              <li
                key={i}
                className={styles.menuItem}
              >
                <Tooltip placement="right" title={item.name}>
                  <Link to={item.url}>
                    <SvgIcon icon={item.icon} styles={IconStyles} />
                  </Link>
                </Tooltip>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    // console.log(this.$refs.oUl)
    // window.addEventListener('mousemove',this.handleClick,false)
  }


  handleMouseMove(e) {
    let mouseX=e.clientX
    let mouseY=e.clientY

    let aLi=this.$refs.oUl.querySelectorAll('li')
    Array.prototype.slice.apply(aLi).forEach((element,i) => {
      // 获取每个元素的中心点
      let {x,y}=element.getBoundingClientRect()
      let left=x+element.offsetWidth/2
      let top=y+element.offsetWidth/2

      // 中心点距离鼠标的距离
      // let dis=Math.sqrt(Math.pow(mouseX-left,2)+Math.pow(mouseY-top,2))
      // console.log(i,dis)

      let dis=Math.abs(mouseY-top);

      dis=dis>200? 200:dis;

      let rate=0.004

      element.style.width=50*(1+(200-dis)*rate)+'px'
      element.style.height=50*(1+(200-dis)*rate)+'px'

    })
  }

  handleMouseLeave(e) {
    let aLi=this.$refs.oUl.querySelectorAll('li')
    Array.prototype.slice.call(aLi).forEach((element) => {
      element.style.width='50px'
      element.style.height='50px'
    })
  }

}
