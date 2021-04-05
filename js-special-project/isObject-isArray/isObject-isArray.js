/**
 * 使用instanceof运算符
 * a instanceof Array
 * a instanceof Object
 */
function  getDataType(o) {
  if (o instanceof Array) {
    return 'Array';
  } else if (o instanceof Object) {
    return 'Object';
  } else {
    return 'param is not object type';
  }
}

var a = [];
var b = {};
console.log(getDataType(a));
console.log(getDataType(b));

/**
 * 判断构造函数
 */
function getDataType2(o) {
  var constructor = o.__proto__.constructor || o.constructor;
  if (constructor === Array) {
    return 'Array';
  } else if (constructor === Object) {
    return 'Object';
  } else {
    return 'param is not object type';
  }
}

var a = [];
var b = {};
console.log(getDataType2(a));
console.log(getDataType2(b));

/**
 * toString  [object Object]  [object Array]
 */
function getDataType3(o) {
  var result = Object.prototype.toString.call(o);
  if (result === '[object Array]') {
    return 'Array';
  } else if (result === '[object Object]') {
    return 'Object';
  } else {
    return 'param is not object type';
  }
}

var a = [];
var b = {};
console.log(getDataType3(a));
console.log(getDataType3(b));



