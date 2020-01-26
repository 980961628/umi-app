import React,{Component} from 'react';
import {Tabs,List,Avatar} from 'antd';
import styles from './index.less'

const data=[
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

export default class Name extends Component {

  constructor(props) {
    super(props);
    this.state={
      typeList: [
        {id: 1,name: 'Vue'},
        {id: 2,name: 'React'},
        {id: 3,name: 'Js'},
        {id: 4,name: 'Node'},
        {id: 5,name: 'Php'},
        {id: 6,name: 'Webpack'},
        {id: 7,name: 'Css'},
        {id: 8,name: '设计模式'},
        {id: 9,name: '其他'},
      ]
    }
  }
  render() {
    return (
      <Tabs
        defaultActiveKey="1"
      >
        {this.state.typeList.map(item => {
          return (
            <Tabs.TabPane
              tab={item.name}
              key={item.id}
            >
              <div className={styles.articleWrapper}>

                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </List.Item>
                  )}
                />

              </div>
            </Tabs.TabPane>
          )
        })}

      </Tabs>
    )
  }

}