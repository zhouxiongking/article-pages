
var a;
if (!a) {}

// 1.判断一个变量是空对象
// 1.1 判断是否为null或者undefined
if (obj == null) {}  //obj为null或者undefined
if (obj === undefined) {} // 只能判断为undefined

// 1.2 判断空对象{}
// 使用for...in遍历，hasOwnProperty()方法，自身存在的属性
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
var a = {};
var b = {name: 'kingx'};
console.log(isEmpty(a));
console.log(isEmpty(b));

// 2.判断空数组
arr instanceof Array && arr.length === 0;

// 3.判断空字符串
str === '' || str.trim().length === 0;

// 4.判断为0或者NaN
!(Number(number) && number) === true

// !a === true
// null
// undefined
// ''
// 0 +0 -0
// NaN