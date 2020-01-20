import React,{Component} from 'react';
import styles from './index.less'
import MenuComp from './menuComp'

export default class AdminLayout extends Component {

  render() {
    return (
      <div className={styles.appWrapper}>
        <aside className={styles.appAside}>
          <MenuComp />
        </aside>
        <div className={styles.appMain}>
          {this.props.children}
        </div>
      </div>
    )
  }

}