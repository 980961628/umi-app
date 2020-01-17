### umiJS 框架折腾

### 关闭/开启eslint
.env 文件中修改 eslint项

### model 使用
##### 1、model使用流程

- 页面中 dispatch 派发一个effects
- effects中使用 call 发起异步请求，之后put一个reducers去修改state，reducers必须是同步函数
```
export default {
  state: {
    age: 100
  },
  reducers: {
    add(state,{payload}) {
      return {
        ...state,
        age: state.age+payload.num
      }
    }
  },
  effects: {
    *addAge({},{put,call}) {
      try {
        let {code,data}=yield call(getNum) //调用异步请求
        yield put({type: 'add',payload: {...data}})   // 调用reducers修改state
        return Promise.resolve(data) 
      } catch(e) {
        return Promise.reject(e)
      }
    }
  }
}
```
##### 2、dispath之后，怎么关闭loading？
 在effects函数中返回 promise即可。
```
 
  dispatch({type:...})
    .then(()=>{
      ...
    })
    .catch(()=>{
      ...
    })
```
