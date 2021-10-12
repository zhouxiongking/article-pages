// 1. 什么是类数组？
// 1.1 对象类型，key是类似于数组索引
// 1.2 length
var obj = {
  length: 3,
  '0': 'a',
  '1': 'b',
  '2': 'c'
};
obj.slice();

// 2. 常见的类数组
// arguments
function fn(a, b) {
  console.log(arguments);
  console.log(arguments instanceof Array);
}
fn(1, 2);
// document.querySelectorAll

// 3. 类数组和数组的区别
// 类数组是一个对象类型，数组一个数组类型
[].slice();
obj.slice();
Array.prototype.slice
// call => 
var obj = {
  length: 3,
  '0': 'a',
  '1': 'b',
  '2': 'c'
};
var r = Array.prototype.slice.call(obj, 0, 1);

// 4. 类数组转换为数组的方法
// 4.1 借助于slice
var obj = {
  length: 3,
  '0': 'a',
  '1': 'b',
  '2': 'c'
};
var r1 = Array.prototype.slice.call(obj);
// 4.2 Array.from
var r3 = Array.from(obj);
// 4.3 扩展运算符...
function fn2(a, b) {
  console.log(arguments);
  console.log([...arguments]);
}
fn2(1, 2, 3);
