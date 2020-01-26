import React,{Component} from 'react';
import {TransitionGroup,CSSTransition} from "react-transition-group";

import styles from './index.less'

import MenuComp from './menuComp'

import router from 'umi/router'


class AdminLayout extends Component {

  render() {
    const {location}=this.props

    return (
      <div className={styles.appWrapper}>
        {/* 左侧菜单 */}
        <aside className={styles.appAside}>
          <MenuComp
            menuClick={(menu) => this.handleMenuClick(menu)}
          />
        </aside>
        <div className={styles.appMain}>
          <TransitionGroup>
            <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
              {this.props.children}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    )
  }

  handleMenuClick(menu) {
    const {location}=this.props
    if(location.pathname!=menu.url) {
      router.push(menu.url)
    }
  }

}


export default AdminLayout


// export default withRouter(
//   ({ location }) =>

//     <TransitionGroup>
//       <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
//         { children }
//       </CSSTransition>
//     </TransitionGroup>
// )