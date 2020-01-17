import {getNum} from '@/api'

export default {
  state: {
    name: 'zhugege',
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
        let {code,data}=yield call(getNum)
        yield put({type: 'add',payload: {...data}})
        return Promise.resolve(data)
      } catch(e) {
        return Promise.reject(e)
      }
    }
  }

}