// 1. 查找一个数组里面，第一个满足条件的值，并进行返回
var arr = [1, 2, 3, 4];
arr.find(function(currentValue, index, arr) {

}, thisArgs);

// 2. 找出大于2的第一个数
var arr = [1, 2, 3, 4, 3];
arr.find(function(currentValue) {
  console.log(currentValue);
  const result = currentValue > 2;
  return result;
});

// 3. find 对数组进行元素的删除
var arr = [1, 2, 3, 4, 3];
arr.find(function(current, index, self) {
  if (index == 0) {
    delete self[3];
  }
  console.log(current);
});

var arr = [1, 2, 3, 4, 3];
arr.find(function(current, index, self) {
  if (index == 0) {
    self.pop();
  }
  console.log(current);
});

// 4. find 源码
Object.defineProperty(Array.prototype, 'myFind', {
  value: function (fn) {
    if (this == null) {
      return new Error('this 不能为null');
    }
    var o = Object(this);
    var len = o.length >>> 0; 
    // 无符号位移 0
    // 1. 能够将不是数字类型的值，转换成数字类型, 
    // 如果不能转换的话，就转成0
    // 2. 能将不是正数的值，转变成正数
    if (typeof fn !== 'function') {
      return new Error('fn必须是函数');
    }
    var thisArgs = arguments[1];
    var k = 0;
    while(k < len) {
      // find current index array
      var c = o[k];
      // call
      var result = fn.call(thisArgs, c, k, o);
      if (result) {
        return c;
      }
      k++;
    }
    return undefined;
  }
});

// 
var arr = [1, 2, 3, 4, 3];
arr.myFind(function(current) {
  return current > 3;
});