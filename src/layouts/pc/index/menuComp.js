import React,{Component} from 'react';
import styles from './menuComp.less'
import router from 'umi/router'

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state={
      list: [
        {id: 1,name: '首页',url: '/a',icon: ''},
        {id: 2,name: '学习',url: '/a',icon: ''},
        {id: 3,name: '音乐',url: '/a',icon: ''},
        {id: 4,name: '视频',url: '/a',icon: ''},
        {id: 5,name: '趣图',url: '/a',icon: ''},
        {id: 6,name: '阅读',url: '/a',icon: ''},
        {id: 7,name: '生活',url: '/a',icon: ''},
        {id: 8,name: 'Me',url: '/a',icon: ''},
      ]
    }

    this.$refs={
      oUl: null
    }

  }



  render() {
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
          {this.state.list.map((item,i) => <li key={i} className={styles.menuItem}>{item.name}</li>)}
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

    // this.$refs.oUl
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
 
      let rate=0.003

      element.style.width=50+50*(200-dis)*rate+'px'
      element.style.height=50+50*(200-dis)*rate+'px'

    })
  }

  handleMouseLeave(e){
    let aLi=this.$refs.oUl.querySelectorAll('li')
    Array.prototype.slice.call(aLi).forEach((element)=>{
      element.style.width = '50px'
      element.style.height = '50px'
    })
  }
}
