export function getNum(params) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({
        code: 222,
        data: {
          num: Math.floor(Math.random()*10)
        }
      })
      // reject({
      //   code:999,
      //   msg:'error'
      // })
    },1000)
  })
}