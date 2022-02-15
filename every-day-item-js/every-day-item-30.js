// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/158
// Done~~~
// 修改下面代码，顺序输出0-99
// 要求：
// 1、只能修改 setTimeout 到 Math.floor(Math.random() * 1000 的代码
// 2、不能修改 Math.floor(Math.random() * 1000
// 3、不能使用全局变量

function print(n) {
  setTimeout(() => {
    console.log(n);
  }, Math.floor(Math.random() * 1000));
}
for (var i = 0; i < 100; i++) {
  print(i);
}
// 1. 立即执行函数
// 2. setTimeout第三个参数
// 1. 立即执行函数 (() => {})()
function print(n) {
  setTimeout((() => {
    console.log(n);
    return () => {};
  })(), Math.floor(Math.random() * 1000));
}

// 2. 立即执行函数-call
for (var i = 0; i < 100; i++) {
  print(i);
}
function print(n) {
  setTimeout((() => {
    console.log(n);
  }).call(null, []), Math.floor(Math.random() * 1000));
}

// 3. setTimeout第三个参数
function print(n) {
  setTimeout(() => {
    console.log(n);
  }, 1, Math.floor(Math.random() * 1000));
}
for (var i = 0; i < 100; i++) {
  print(i);
}

