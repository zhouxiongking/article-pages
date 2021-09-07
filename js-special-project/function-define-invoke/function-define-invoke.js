// 1. 函数声明
function sum (num1, num2) {
  return num1 + num2;
}

// 2. 函数表达式
var a = 1;
var sum2 = function(num1, num2) {
  return num1 + num2;
};

var sum3 = function foo(num1, num2) {
  return num1 + num2;
};

console.log(foo(1, 2));

// 3. Function构造函数
var sum4 = new Function('num1', 'num2', 'return num1 + num2');
console.log(sum4(1, 2));

// 并不推荐使用Function构造函数来定义函数
// 1.每次都会生成新的对象，占据内存空间，没有复用性
// 2.不遵循典型的作用域
var y = 'global';
function fn() {
  var y = 'local';
  return new Function('return y');
}
console.log(fn()());