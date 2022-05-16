// https://www.jb51.net/article/213282.htm
// JavaScript使用promise处理多重复请求


let handleList = [] // 请求列表
/**
 * 模拟请求
 * @author waldon
 * @date 2020/6/9
 */
const httpRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`请求成功，时间戳为：${new Date().getTime()}`)
    }, 1000)
  })
}
/**
 * 请求的相关处理
 * @author waldon
 * @date 2020/6/9
 * @param {String} url -
 * @param {Object} requestObj - 请求参数
 * @returns {Promise} - 请求的promise
 */
function requestTest(url, requestObj = {}) {
  // 因为入参一般不会涉及到复杂类型，JSON.stringify进行序列化对比其实够用了
  // 有个局限性就是入参的顺序改变了就会影响判断，不过这种特殊的改变一般在重复请求中不会出现
  // 实在是有这种需求的，换成其他递归对比的api，lodash也有类似的api
  const sameHandle = handleList.find(
    (item) => item.url === url && JSON.stringify(item.requestObj) === JSON.stringify(requestObj)
  )
  if (sameHandle) {
    // 遇到相同请求直接返回之前请求的promise
    console.log(`存在重复请求，直接返回`)
    return sameHandle.handle
  }
  const handle = new Promise((resolve, reject) => {
    httpRequest()
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
      .finally(() => {
        // 无论请求结果如果，都需要把对应的请求移除掉
        handleList = handleList.filter(
          (item) =>
            item.url !== url && JSON.stringify(item.requestObj) !== JSON.stringify(requestObj)
        )
      })
  })
  handleList.push({ url, requestObj, handle })
  return handle
}

// *******************************我是华丽的分割线 开始使用*******************************
const params = {
  name: 'waldon'
}
requestTest('/ajax/sameUrl', params).then((res) => {
  console.log(`首次请求结果`, res)
  console.log(`handleList：`, handleList)
})
requestTest('/ajax/sameUrl', params).then((res) => {
  console.log(`重复请求结果`, res)
  console.log(`handleList：`, handleList) // 请求列表中始终只有一个请求
  setTimeout(() => {
    console.log(`请求完成后的handleList：`, handleList) // 请求完成handleList对应的请求会被清除
  }, 100)
})
setTimeout(() => {
  // 特意延迟500ms请求，因为我们设置了接口1s才返回，所以应该得到一样的结果
  requestTest('/ajax/sameUrl', params).then((res) => {
    console.log(`重复请求结果`, res)
    console.log(`handleList：`, handleList)
  })
}, 500)

