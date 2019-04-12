// 第一个请求
// $.ajax({
//     url: 'url1',
//     success: function () {
//         // 第二个请求
//         $.ajax({
//             url: 'url2',
//             success: function () {
//                 // 第三个请求
//                 $.ajax({
//                     url: 'url3',
//                     success: function () {
//                         // 第四个请求
//                         $.ajax({
//                             url: 'url4',
//                             success: function () {
//                                 // 成功的回调
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// });
//
// const promise = new Promise((resolve, reject) => {
//     // 异步请求处理
//     if (/ 异步请求标识 /) {
//         resolve();
//     } else {
//         reject();
//     }
// });
//
// // 封装的原生get类型ajax请求
// function ajaxGetPromise(url) {
//     const promise = new Promise(function (resolve, reject) {
//         const handler = function () {
//             if (this.readyState !== 4) {
//                 return;
//             }
//             // 在状态码为200时,表示请求成功,执行resolve()方法
//             if (this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 // 在状态码不为200时,表示请求失败,reject()方法
//                 reject(new Error(this.statusText));
//             }
//         };
//         // 原生Ajax请求操作
//         const client = new XMLHttpRequest();
//         client.open("GET", url);
//         client.onreadystatechange = handler;
//         client.responseType = "json";
//         client.setRequestHeader("Accept", "application/json");
//         client.send();
//     });
//     return promise;
// }
//
//
// ajaxGetPromise('/testUrl').then((response) => {
//     console.log(response);
// });
//
// let promise = new Promise(function(resolve, reject) {
//     console.log('Promise');
//     resolve();
// });
//
// promise.then(function() {
//     console.log('resolved');
// });
//
// console.log('Hello');
//
// ajaxGetPromise(url1)
//     .then((response1) => ajaxGetPromise(url2))
//     .then((response2) => ajaxGetPromise(url3))
//     .then((response3) => ajaxGetPromise(url4))
//     .then((response4) => {
//         // 成功的回调
//     });

//
// const promise = new Promise((resolve, reject) => {
//     throw new Error('test');
//     null.name;
// });
// promise
//     .then()
//     .catch((err) => {
//         console.log('------');
//         console.log(err);
//     });


// const promise = new Promise((resolve, reject) => {
//     resolve(1);
//     throw new Error('test');
// });
// promise
//     .then((result) => {
//         console.log(result);  // 1
//     })
//     .catch((err) => {
//         console.log(err);
//     });
//
// const p = Promise.all([p1, p2, p3]);
//
// const p1 = new Promise((resolve, reject) => {
//     resolve('hello');
// })
//     .then(result => result)
//     .catch(e => e);
//
// const p2 = new Promise((resolve, reject) => {
//     throw new Error('报错了');
// })
//     .then(result => result)
//     .catch(e => e);
//
// Promise.all([p1, p2])
//     .then(result => console.log(result))
//     .catch(e => console.log(e));


// const p1 = new Promise((resolve, reject) => {
//     resolve('success');
// })
//     .then(result => result);
//     // .catch(e => e);
//
// const p2 = new Promise((resolve, reject) => {
//     throw new Error('error');
// })
//     .then(result => result);
//     // .catch(e => e);
//
// Promise.all([p1, p2])
//     .then(result => console.log(result)) // ['success', Error: error]
//     .catch(e => console.log(e));
//
// Promise.resolve('foo');
// // 等价于
// new Promise(resolve => resolve('foo'));

setTimeout(function () {
    console.log('three');
}, 0);

// Promise.resolve().then(function () {
//     console.log('two');
// });

new Promise((resolve, reject) => {
    resolve();
}).then(() => {
    console.log('two');
});

console.log('one');