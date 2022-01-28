// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/471
// Done~~~
// JS 异步笔试题
var date = new Date();
console.log(1, new Date() - date);
// 2-3 同步代码，直接执行输出 1

setTimeout(() => {
  console.log(2, new Date() - date);
}, 500);
// 6-8 宏任务队列，输出2

// .then()立即执行
const fn = console.log(3, new Date() - date); // 3
// // fn -> undefined
Promise.resolve().then(fn);
// Promise.resolve().then(() => {
//   console.log(3, new Date() - date); // 添加到微任务队列里
// });

while (new Date() - date < 1000) {} // 等待一秒
console.log(4, new Date() - date);
// 16-17 同步代码，输出4
// 1 3 等待一秒输出4，输出2

setTimeout(() => {
  console.log(2, new Date() - date);
}, 500);
