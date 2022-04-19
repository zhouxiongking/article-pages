// https://blog.csdn.net/katherine5980/article/details/114882308
// 异步的错误无法被 try...catch 埔获，请修改

// 题目：下列操作中，异步的错误无法被 try...catch 埔获，请修改
const url = '/sample/api'
try {
  asyncAjaxGet(url, (response) => {
    response.data.children = 1; // 可能有异常，期望被捕获
  })
} catch(e) {
  // ....
}
 
// 答案:
function handle(url) {
  return new Promise((resolve) => asyncAjaxGet(url, resolve))
}
const response = await handle(url)
try {
  response.data.propA  // 这里如果response是undefined的话就能被catch到
} catch {
  //  错误处理
}