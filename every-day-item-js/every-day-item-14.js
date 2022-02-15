// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/389
// 字节编程题
// Done~~~~
// 1. 题目的输出结果是什么？ // 一秒后立即输出1，4，9
// 2. 如果想要每秒输出一个结果，可以怎么改造？
//  注意：不可修改square方法

// forEach原理：https://262.ecma-international.org/5.1/#sec-15.4.4.18

const list = [1, 2, 3];
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
}
// function test() {
//   // forEach 
//   list.forEach(async x => {
//     const res = await square(x);
//     console.log(res);
//   });
//   // 改写
//   (async (x) => {
//     const res = await square(x);
//     console.log(res);
//   })(1);
//   (async (x) => {
//     const res = await square(x);
//     console.log(res);
//   })(2);
//   (async (x) => {
//     const res = await square(x);
//     console.log(res);
//   })(3);
// }
// test();
// 方法1：for循环  for 同一个代码块，同时使用await
// async function test() {
//   for(let i = 0; i < list.length; i++) {
//     const res = await square(list[i]);
//     console.log(res);
//   }
// }
// await test();

// 方法2：for of
// async function test() {
//   for (let item of list) {
//     const res = await square(item);
//     console.log(res);
//   }
// }
// await test();

// 方法3：Promise Axios
let promise = Promise.resolve();
function test(i) {
  if (i === list.length) return;
  promise = promise.then(async() => {
    const res = await square(list[i]);
    console.log(res);
  });
  test(i + 1);
}
test(0);

// 方法4
const list = [1, 2, 3];
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
}
function test(){ 
  list.forEach(async(x,i) => { 
    while (i-- >= 0) {
      var res = await square(x);
    }
    console.log(res) }) 
}
test();