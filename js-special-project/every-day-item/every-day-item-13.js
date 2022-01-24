// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/455
// 闭包编程题 (字节）
// Done~~~
var foo = function(...args) {}  // 要求实现函数体
var f1 = foo(1, 2, 3); f1.getValue(); // 6
var f2 = foo(1)(2, 3); f2.getValue(); // 6
var f3 = foo(1)(2)(3)(4); f3.getValue(); // 10
// 1. 函数参数个数不确定
// 2. 支持链式调用 -> return foo
// 3. 函数所有参数进行累加

// 1. 存储所有传入的参数，数组
// 2. 传入的参数进行累加

// 方法1，在foo上新增变量存储
var foo = function(...args) {
  if (!Array.isArray(foo.arr)) {
    foo.arr = [];
  }
  foo.arr.push(...args);
  return foo;
};
Function.prototype.getValue = () => {
  return foo.arr.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
};
var f1 = foo(1, 2, 3); f1.getValue(); // 6
var f2 = foo(1)(2, 3); f2.getValue(); // 6
var f3 = foo(1)(2)(3)(4); f3.getValue(); // 10

// 方法2：闭包
var foo = function(...args) {
  // const fn = function () {
  //   const arg1 = Array.prototype.slice.call(arguments);
  //   args = args.concat(arg1);
  //   return foo(...args);
  // };
  const fn = (...arg1) => foo(...[...args, ...arg1]);
  fn.getValue = () => {
    return args.reduce((pre, cur) => pre + cur, 0);
  };
  return fn;
};
var f1 = foo(1, 2, 3); f1.getValue(); // 6
var f2 = foo(1)(2, 3); f2.getValue(); // 6
var f3 = foo(1)(2)(3)(4); f3.getValue(); // 10